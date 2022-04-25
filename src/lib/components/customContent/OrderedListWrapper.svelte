<script lang="ts">
    import type { BlockProps } from '@portabletext/svelte';

    export let portableText: BlockProps;

    $: block = portableText.block;
    $: anchorId = `list-${block._key}`;
</script>

<ol class="list-decimal list-inside" id={anchorId}><slot /></ol>
