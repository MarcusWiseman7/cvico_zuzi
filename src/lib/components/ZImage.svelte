<script lang="ts">
    import { urlFor } from '$lib/image-url';
    import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

    export let src: SanityImageSource;
    export let alt: string;
    // export let height: number;
    // export let width: number;
    export let zclass: string = '';
</script>

<img
    src={urlFor(src).format('webp').url()}
    {alt}
    class={zclass}
    on:contextmenu|preventDefault
    on:dragstart|preventDefault
/>
