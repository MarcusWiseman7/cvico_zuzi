<script lang="ts">
    import ZHero from '$lib/components/ZHero.svelte';
    import FB_src from '$lib/assets/icons/facebook.svg';
    import Email_src from '$lib/assets/icons/email.svg';
    import ZSchedule from '$lib/components/ZSchedule.svelte';
    import ZEvents from '$lib/components/ZEvents.svelte';
    const info = 'skldjf kjsdfl kdfkj dlskjfkljd lkfjdskf l';
</script>

<ZHero />

<main class="grid lg:grid-cols-2 gap-6">
    <section>
        <img
            src="https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930176/zuzana/profile/zprofile_x9gut8.jpg"
            alt="Zuzana"
            class="rounded-lg shadow-xl"
        />
    </section>

    <section>
        <blockquote class="italic text-3xl md:text-4xl font-extralight text-right">
            "Myslím, že cvičení by mělo být formou aktivního odpočinku a tak se snažím, aby si každý z hodiny odnesl
            nejen dobrý pocit z toho, že pro sebe něco udělal, ale především se odprostil od běžných starostí a odcházel
            s úsměvem"
        </blockquote>
        <div class="flex justify-center py-5">
            <button class="mx-5">
                <img src={FB_src} alt="facebook" />
            </button>
            <button class="mx-5">
                <img src={Email_src} alt="email" />
            </button>
        </div>
    </section>

    <section>
        {#if info}
            <h3 class="my-4 text-lg font-semibold">{info}</h3>
        {/if}
        <ZEvents />
    </section>

    <section>
        <ZSchedule />
    </section>
</main>
