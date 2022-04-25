<script lang="ts">
    import type { BlockProps } from '@portabletext/svelte';

    export let portableText: BlockProps;

    $: block = portableText.block;
    $: anchorId = `list-${block._key}`;
</script>

<li class="text-lg" id={anchorId}><slot /></li>
