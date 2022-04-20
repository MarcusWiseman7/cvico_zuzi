<script lang="ts">
    export let src: string;
    export let alt: string;
    export let height: number | string = '';
    export let width: number | string = '';
    export let zclass: string = '';
</script>

<img {src} {alt} {height} {width} class={zclass} on:contextmenu|preventDefault on:dragstart|preventDefault />
