<script>
    import { dataset_dev } from 'svelte/internal';

    export let event;
    export let odd = false;
</script>

<li class="mt-3 text-xl flex">
    <div
        class={(odd ? 'bg-slate-600 ' : 'bg-pink-1 ') +
            'text-white font-semibold flex flex-col justify-center items-center w-28 h-28 date-block'}
    >
        <span class="text-3xl">{new Date(event.dates.startDate).getDate()}</span>
        <span class="text-sm">{new Date(event.dates.startDate).toLocaleString([], { month: 'long' })}</span>
    </div>

    <div class="ml-2 flex flex-col justify-center">
        <h3 class="text-xl font-semibold">{event.title}</h3>
        <h5 class="text-base font-semibold">
            {new Date(event.dates.startDate).toLocaleDateString() +
                (event.dates.endDate ? ' - ' + new Date(event.dates.endDate).toLocaleDateString() : '')}
        </h5>
        {#if event.description}
            <p class="text-sm">{event.description}</p>
        {/if}
    </div>
</li>

<style>
    .date-block {
        min-width: 7rem;
        min-height: 7rem;
    }
</style>
