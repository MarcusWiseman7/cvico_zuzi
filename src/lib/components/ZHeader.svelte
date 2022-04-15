<script lang="ts">
    import { goto } from '$app/navigation';
    import { fly } from 'svelte/transition';
    import { linear } from 'svelte/easing';
    import { getPointFromEvent } from '$lib/helpers';

    const navItems = [
        { title: 'HOME', link: '/' },
        { title: 'AKTUALITY', link: '/aktuality' },
        { title: 'ROZPIS LEKCÍ', link: '/rozpis_lekci' },
        { title: 'CVIČENÍ', link: '/cviceni' },
        { title: 'OSOBNÍ PROFIL', link: '/osobni_profil' },
        // { title: 'INSTRUKTOŘI', link: '/instruktori' },
        { title: 'KONTAKT', link: '/kontakt' },
    ];

    $: navOpen = false;
    $: startPoint = null;
    $: lastPoint = null;
    $: checkPoint = null;
    $: slidingNav = false;
    $: closingNav = false;
    $: rafPending = false;
    $: translateX = '0px';

    const routeTo = (href: string): void => {
        goto(href);
        navOpen = false;
    };

    const resetVars = (): void => {
        startPoint = null;
        lastPoint = null;
        checkPoint = null;
        slidingNav = false;
        closingNav = false;
        translateX = '0px';
    };
    const aniFrame = (): void => {
        translateX = startPoint.x - lastPoint.x + 'px';
        rafPending = false;
    };
    const endAniFrame = (): void => {
        if (closingNav) {
            navOpen = false;
        } else {
            translateX = '0px';
        }

        setTimeout(() => {
            resetVars();
        }, 300);
    };
    const onPointerdown = ($event): void => {
        if (window.PointerEvent) $event.target.setPointerCapture($event.pointerId);
        startPoint = getPointFromEvent($event);
    };
    const onPointermove = ($event: Event): void => {
        lastPoint = getPointFromEvent($event);
        if (checkPoint) {
            closingNav = lastPoint.x < checkPoint.x;
        }

        setTimeout(() => {
            checkPoint = lastPoint;
        }, 0);

        if (slidingNav) {
            if (rafPending) return;
            rafPending = true;
            window.requestAnimationFrame(aniFrame);
        } else if (startPoint.x - 10 > lastPoint.x) {
            slidingNav = true;
        }
    };
    const onPointerup = ($event): void => {
        if (window.PointerEvent) $event.target.releasePointerCapture($event.pointerId);
        window.requestAnimationFrame(endAniFrame);
    };
</script>

<header class="h-16 fixed left-0 top-0 w-full flex items-center justify-center text-white z-30">
    <span
        class="absolute left-3 text-xs lg:text-base font-semibold cursor-pointer rounded-full p-2 hover:bg-pink-600"
        on:click={() => {
            navOpen = true;
        }}
    >
        MENU
    </span>

    <span class="text-3xl tracking-wider" on:click={() => goto('/')}>Zuzana Doudová</span>
</header>

{#if navOpen}
    <nav
        class="fixed left-0 top-0 w-full h-full z-40"
        style={translateX}
        transition:fly={{ x: -100, opacity: 1, easing: linear, duration: 300 }}
        on:pointerdown={onPointerdown}
        on:pointermove={onPointermove}
        on:pointerup={onPointerup}
        on:pointercancel={onPointerup}
        on:click|stopPropagation={() => {
            navOpen = false;
        }}
    >
        <ul class="absolute left-0 top-0 h-full w-72 pt-5 shadow-xl shadow-stone-500 bg-stone-700">
            {#each navItems as item}
                <li
                    class="text-sm font-semibold text-white py-4 px-5 hover:bg-stone-600"
                    on:click|stopPropagation={() => routeTo(item.link)}
                >
                    <span>{item.title}</span>
                </li>
            {/each}
        </ul>
    </nav>
{/if}

<style>
    header {
        background-color: #fc1c7d;
    }

    nav {
        touch-action: pan-x;
    }
</style>
