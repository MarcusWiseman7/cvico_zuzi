<script lang="ts">
    import InfoBlock from '$lib/components/InfoBlock.svelte';
    import { cviceni } from '$lib/stores';
</script>

{#if $cviceni?.exercise_list?.length}
    {#each $cviceni.exercise_list as info}
        <InfoBlock {info} zclass="text-lime-300 border-b border-opacity-30 last:border-none border-lime-200" />
    {/each}
{/if}
