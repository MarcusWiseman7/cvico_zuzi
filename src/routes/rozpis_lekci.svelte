<script lang="ts">
    import ZSchedule from '$lib/components/ZSchedule.svelte';
    import { formatPhone } from '$lib/helpers';
    import { rozpis_lekci, kontakt } from '$lib/stores';
</script>

<main class="grid lg:grid-cols-2 lg:gap-5">
    <section>
        <ZSchedule />
    </section>

    <section class="flex flex-col gap-5 mt-5 lg:mt-0">
        {#if $rozpis_lekci?.topInfo?.length}
            <div class="h-fit">
                {#each $rozpis_lekci.topInfo as info}
                    <p class="text-xl">{info}</p>
                {/each}
            </div>
        {/if}

        {#if $kontakt?.phone && $kontakt?.email}
            <div class="h-fit">
                <p class="text-xl">
                    mob: <a href={'tel:+420' + $kontakt.phone} class="text-pink-1">{formatPhone($kontakt.phone)}</a>
                </p>
                <p class="text-xl">
                    email: <a href={'mailto:' + $kontakt.email} class="text-pink-1">{$kontakt.email}</a>
                </p>
            </div>
        {/if}

        {#if $rozpis_lekci?.prices?.length}
            <div class="h-fit">
                {#each $rozpis_lekci.prices as price}
                    <p class="text-xl">{price}</p>
                {/each}
            </div>
        {/if}

        {#if $rozpis_lekci?.bottomInfo?.length}
            <div class="h-fit">
                {#each $rozpis_lekci.bottomInfo as info}
                    <p class="text-xl">{info}</p>
                {/each}
            </div>
        {/if}
    </section>
</main>
