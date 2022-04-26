<script lang="ts">
    import { scale } from 'svelte/transition';
    import { kontakt, popupObj } from '$lib/stores';
    import closer from '$lib/assets/icons/closer.svg';
    import Email_src from '$lib/assets/icons/email_white.svg';

    const close = (): void => {
        popupObj.set(null);
    };
    const handle_keydown = ($event: KeyboardEvent): void => {
        if ($event.key === 'Escape') {
            close();
        }
    };
</script>

<svelte:window on:keydown={handle_keydown} />

{#if $popupObj}
    <!-- holder -->
    <div
        on:click={close}
        class="h-screen w-screen fixed left-0 top-0 z-40 flex justify-center items-center bg-slate-900 bg-opacity-40"
    >
        <!-- popup -->
        <div
            on:click|stopPropagation
            role="dialog"
            transition:scale={{ duration: 500, delay: 100 }}
            class="rounded-lg h-auto max-w-3xl relative flex flex-col items-center py-6 px-10 lg:px-14 font-semibold mx-2 bg-slate-700 text-white"
        >
            <!-- closer -->
            <div on:click={close} class="absolute top-0 left-0 py-3 px-4 cursor-pointer">
                <img src={closer} alt="close" />
            </div>

            <!-- title -->
            <h1 class="text-3xl text-center">{$popupObj.title}</h1>

            <!-- subtitle -->
            {#if $popupObj.subtitle}
                <h3 class="text-2xl mt-3">{$popupObj.subtitle}</h3>
            {/if}

            <!-- text -->
            {#if $popupObj.text}
                <p class="mt-6 mb-2 w-full text-xl text-justify">{$popupObj.text}</p>
            {/if}

            {#if $popupObj.bigText}
                <p class="mt-2 mb-2 w-full text-xl text-justify">{$popupObj.bigText}</p>
            {/if}

            {#if $popupObj.email && $kontakt?.email}
                <a href={`mailto:${$kontakt.email}`} class="mt-6 flex items-center border rounded-lg px-4 py-2">
                    <img src={Email_src} alt="email" class="mr-2" />
                    <p>Email for more info, or to register</p>
                </a>
            {/if}
        </div>
    </div>
{/if}
