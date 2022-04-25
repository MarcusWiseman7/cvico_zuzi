<script lang="ts">
    import { popupObj } from '$lib/stores';
    import type { ZEvent } from '$lib/ts-interfaces';

    export let event: ZEvent;
    export let pink = false;

    const startDate = new Date(event.dates.startDate);
    const startDayOfMonth = startDate.getDate();
    const startMonth = startDate.toLocaleString([], { month: 'long' });
    const startDateString = startDate.toLocaleDateString();
    const subtitle =
        startDateString + (event.dates.endDate ? ' - ' + new Date(event.dates.endDate).toLocaleDateString() : '');

    const openPopup = (): void => {
        popupObj.set({
            title: event.title,
            subtitle,
            text: event.description,
            email: true,
        });
    };
</script>

<li class="mt-3 text-xl flex cursor-pointer" on:click={openPopup}>
    <div
        class={(pink ? 'bg-slate-600 ' : 'bg-pink-1 ') +
            'text-white font-semibold flex flex-col justify-center items-center w-28 h-28 date-block'}
    >
        <span class="text-3xl">{startDayOfMonth}</span>
        <span class="text-sm">{startMonth}</span>
    </div>

    <div class="ml-2 flex flex-col justify-center">
        <h3 class="text-xl font-semibold">{event.title}</h3>
        <h5 class="text-base font-semibold">{subtitle}</h5>
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
