<script lang="ts">
    import { scale } from 'svelte/transition';
    import { popupObj } from '$lib/stores';
    import closer from '$lib/assets/icons/closer.svg';

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
        class="h-screen w-screen fixed left-0 top-0 z-40 flex justify-center items-center bg-slate-900 bg-opacity-80"
    >
        <!-- popup -->
        <div
            on:click|stopPropagation
            role="dialog"
            transition:scale={{ duration: 500, delay: 100 }}
            class="rounded-lg h-auto max-w-3xl bg-slate-800 relative flex flex-col items-center py-6 px-10 font-semibold mx-2"
        >
            <!-- Closer -->
            <div on:click={close} class="absolute top-0 left-0 py-3 px-4 cursor-pointer">
                <img src={closer} alt="close" />
            </div>

            <!-- title -->
            <h1 class="text-3xl text-pink-1">{$popupObj.title}</h1>

            <!-- text -->
            <p class="mt-6 w-full text-xl text-pink-1 text-justify">{$popupObj.text}</p>
        </div>
    </div>
{/if}
