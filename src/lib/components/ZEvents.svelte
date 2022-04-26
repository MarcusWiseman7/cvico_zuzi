<script>
    import ZEventItem from './ZEventItem.svelte';
    import { events } from '$lib/stores';

    export let grid = false;
</script>

{#if $events?.list?.length}
    {#if $events?.headline}
        <h2 class="text-2xl underline underline-offset-1">{$events.headline}</h2>
    {/if}

    <ul class={grid ? 'lg:grid lg:grid-cols-2' : ''}>
        {#each $events.list as event, index}
            <ZEventItem {event} pink={index % (grid ? 3 : 2) == 0} />
        {/each}
    </ul>
{/if}
