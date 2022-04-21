<script lang="ts">
    import ZSchedule from '$lib/components/ZSchedule.svelte';
    import { formatPhone } from '$lib/helpers';

    const infoLines = ['skdjf kjsdlkjf ksldjfdjks lk lskdjf', 'ldksfj sklfdskljf sdklj'];
    const phone = 777100015;
    const email = 'cvicozuzi@gmail.com';
    const ppl = '120 Kc/55 min';
    const ppp = '1.000 Kc/10 lekci';
    const address = 'skldjf kljdfkjds kljfdslkjfdlsk jdskjfkl dlkdsfjdksjflkd';
    const underAddress = '(sdlj skdfjk ljsdlkjf d)';
</script>

<main class="grid lg:grid-cols-2 lg:gap-5">
    <section>
        <ZSchedule />
    </section>
    <section class="flex flex-col gap-5 mt-5 lg:mt-0">
        {#if infoLines?.length}
            <div class="h-fit">
                {#each infoLines as info}
                    <p class="text-xl">{info}</p>
                {/each}
            </div>
        {/if}

        <div class="h-fit">
            <p class="text-xl">mob: <a href={'tel:+420' + phone} class="text-pink-1">{formatPhone(phone)}</a></p>
            <p class="text-xl">email: <a href={'mailto:' + email} class="text-pink-1">{email}</a></p>
        </div>

        <div class="h-fit">
            <p class="text-xl">Cena lekce: {ppl}</p>
            <p class="text-xl">Cena permanentky: {ppp}</p>
        </div>

        <div class="h-fit">
            <p class="text-xl">{address}</p>
            <p class="text-xl">{underAddress}</p>
        </div>
    </section>
</main>
