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
    $: translateX = 0;

    const routeTo = (href: string): void => {
        goto(href);
        closeNav();
    };

    const resetVars = (): void => {
        startPoint = null;
        lastPoint = null;
        checkPoint = null;
        slidingNav = false;
        closingNav = false;
        translateX = 0;
    };
    const aniFrame = (): void => {
        translateX = Math.min(0, lastPoint.x - startPoint.x);
        rafPending = false;
    };
    const endAniFrame = (): void => {
        if (closingNav) {
            navOpen = false;
        } else {
            translateX = 0;
        }

        setTimeout((): void => {
            resetVars();
        }, 300);
    };
    const onTouchstart = ($event: TouchEvent): void => {
        startPoint = getPointFromEvent($event);
    };
    const onTouchmove = ($event: TouchEvent): void => {
        lastPoint = getPointFromEvent($event);
        if (checkPoint) {
            closingNav = lastPoint.x < checkPoint.x;
        }

        setTimeout((): void => {
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
    const onTouchend = (): void => {
        window.requestAnimationFrame(endAniFrame);
    };
    const openNav = (): void => {
        navOpen = true;
        setTimeout((): void => {
            const el = document.getElementById('nav');
            el.addEventListener('touchstart', onTouchstart, false);
            el.addEventListener('touchmove', onTouchmove, false);
            el.addEventListener('touchend', onTouchend, false);
        }, 0);
    };
    const closeNav = (): void => {
        const el = document.getElementById('nav');
        el.removeEventListener('touchstart', onTouchstart);
        el.removeEventListener('touchmove', onTouchmove);
        el.removeEventListener('touchend', onTouchend);

        setTimeout((): void => {
            navOpen = false;
        }, 0);
    };
    const checkSliding = (): void => {
        if (!slidingNav) closeNav();
    };
</script>

<header class="h-16 fixed left-0 top-0 w-full flex items-center justify-center text-white z-30">
    <span
        class="absolute left-3 text-xs lg:text-base font-semibold cursor-pointer rounded-full p-2 hover:bg-pink-600"
        on:click={openNav}
    >
        MENU
    </span>

    <span class="text-3xl tracking-wider cursor-pointer" on:click={() => goto('/')}>Zuzana Doudová</span>
</header>

{#if navOpen}
    <nav
        class="fixed left-0 top-0 w-full h-full z-40"
        id="nav"
        transition:fly={{ x: -100, opacity: 1, easing: linear, duration: 300 }}
        on:click|stopPropagation={checkSliding}
    >
        <ul
            class="absolute left-0 top-0 h-full w-72 pt-5 shadow-xl shadow-stone-500 bg-stone-700"
            style={`left: ${translateX}px`}
        >
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
        background-color: var(--main-color);
    }
</style>
