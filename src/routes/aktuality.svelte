<script lang="ts">
    import ZEvents from '$lib/components/ZEvents.svelte';
    import ZImage from '$lib/components/ZImage.svelte';
    import { onMount } from 'svelte';

    let Carousel;

    const pics = [
        'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930149/zuzana/slideshow/013_dgnpew.jpg',
        'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930150/zuzana/slideshow/030_spuheg.jpg',
        'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930152/zuzana/slideshow/046_vtq1l5.jpg',
        'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930153/zuzana/slideshow/097_oofvy6.jpg',
        'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930151/zuzana/slideshow/111_jf7ocg.jpg',
        'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930154/zuzana/slideshow/8029_ls4pzw.jpg',
    ];

    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });
</script>

<!-- Headline -->
<h2>Co se u nas deje?</h2>

<!-- Flyer -->
<img src="" alt="Flyer" class="w-full" />

<!-- Events -->
<ZEvents />

<!-- Carousel of pics -->
<div class="mt-6">
    <svelte:component this={Carousel} arrows={false} autoplay autoplayDuration={5000} pauseOnFocus infinite>
        {#each pics as pic (pic)}
            <ZImage src={pic} alt="pic" zclass="w-full h-full object-cover max-h-96" />
        {/each}
    </svelte:component>
</div>
