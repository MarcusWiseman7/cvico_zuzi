<script lang="ts">
    import ZEvents from '$lib/components/ZEvents.svelte';
    import ZImage from '$lib/components/ZImage.svelte';
    import { aktuality } from '$lib/stores';
    import { onMount } from 'svelte';

    let Carousel;

    onMount(async (): Promise<void> => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });
</script>

<!-- Headline -->
{#if $aktuality?.headline}
    <h2 class="text-3xl my-6">{$aktuality.headline}</h2>
{/if}

<!-- Flyer -->
{#if $aktuality?.flyer}
    <ZImage src={$aktuality.flyer.asset} alt={$aktuality.flyer.alt || 'Flyer'} zclass="w-full mb-10" />
{/if}

<!-- Events -->
<ZEvents grid />

<!-- Carousel of pics -->
{#if $aktuality?.carouselPics?.images?.length}
    <div class="mt-10">
        <svelte:component this={Carousel} arrows={false} autoplay autoplayDuration={5000} pauseOnFocus infinite>
            {#each $aktuality.carouselPics.images as pic (pic)}
                <ZImage src={pic.asset} alt={pic.alt || 'pic'} zclass="w-full object-cover max-h-96" />
            {/each}
        </svelte:component>
    </div>
{/if}
