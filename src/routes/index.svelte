<script lang="ts">
    import ZHero from '$lib/components/ZHero.svelte';
    import FB_src from '$lib/assets/icons/facebook.svg';
    import Email_src from '$lib/assets/icons/email.svg';
    import ZSchedule from '$lib/components/ZSchedule.svelte';
    import ZEvents from '$lib/components/ZEvents.svelte';
    import { kontakt, index, aktuality } from '$lib/stores';
    import ZImage from '$lib/components/ZImage.svelte';
</script>

<ZHero />

<main class="grid lg:grid-cols-2 gap-6">
    <section>
        {#if $index?.profilePic}
            <ZImage src={$index.profilePic} alt={$index.alt || 'Zuzana'} zclass="rounded-lg shadow-xl" />
        {/if}
    </section>

    <section class="flex flex-col justify-center">
        {#if $index?.profileQuote}
            <blockquote class="italic text-3xl md:text-4xl font-extralight text-right">
                "{$index.profileQuote}"
            </blockquote>
        {/if}
        <div class="flex justify-center py-5">
            {#if $kontakt?.facebook}
                <a href={$kontakt.facebook} target="_blank" class="mx-5">
                    <img src={FB_src} alt="facebook" />
                </a>
            {/if}
            {#if $kontakt?.email}
                <a href={`mailto:${$kontakt.email}`} class="mx-5">
                    <img src={Email_src} alt="email" />
                </a>
            {/if}
        </div>
    </section>

    <section>
        {#if $aktuality?.info}
            <h4 class="my-4 text-lg font-semibold">{$aktuality.info}</h4>
        {/if}
        <ZEvents />
    </section>

    <section>
        <ZSchedule />
    </section>
</main>
