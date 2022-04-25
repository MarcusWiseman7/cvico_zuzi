<script lang="ts">
    import type { BlockProps } from '@portabletext/svelte';

    export let portableText: BlockProps;

    $: block = portableText.block;
    $: anchorId = `list-${block._key}`;
</script>

<ul class="list-disc list-inside" id={anchorId}><slot /></ul>
