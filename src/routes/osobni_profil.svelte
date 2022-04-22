<script>
    import InfoBlock from '$lib/components/InfoBlock.svelte';
    import ZImage from '$lib/components/ZImage.svelte';
    import { osobni_profile } from '$lib/stores';

    // const profile = {
    //     pic: 'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930177/zuzana/profile/profile_nyyw3n.jpg',
    //     items: [
    //         {
    //             title: 'Něco málo o mě:',
    //             text: 'Vítejte na mých stránkách.Jsem instruktorkou DeepWORKu, BodyARTu, Spinningu, Bosu, Fitboxu a různých forem aerobního cvičení.Sportu se věnuji již řadu let, ale lektorkou jsem se stala v roce 2000 a od té doby pravidelně navštěvují různá školení a kongresy v Čechách i v zahraničí.Ráda se neustále vzdělávám, jedině tak mohu předat svým klientům to nejlepší.Poslední dobou se mou velkou láskou stal především deepWORK a silovější formy cvičení.Ráda se ale občas vrátím i ke klasickému dance aerobicu.Je pro mě moc důležité, aby se klienti při cvičení cítili fajn.Těší mě, když mohu být součástí jejich progresu a když mohu vidět, že z fitka odchází s úsměvem a dobrou náladou.To je tou největší odměnou.Pak vím, že má práce má smysl.',
    //         },
    //         {
    //             title: 'Osobní profil:',
    //             text: 'Narodila jsem se 26.5.1978 - ve znamení Blíženců. Aerobicu se věnuji cca od svých 16 let. Zaměřuji se na různé formy cvičení - dance aerobic, P-class, body-stylling, body-bar, step aerobic, dále fitbox a spinning.',
    //         },
    //         {
    //             title: 'Hobby:',
    //             text: 'in-liny, cyklistika, jogging, lyžování',
    //         },
    //         {
    //             title: 'Jaká jsem?',
    //             text: 'Optimistický nadšenec do všeho nového :-)',
    //         },
    //     ],
    //     bottomPics: [
    //         'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930179/zuzana/profile/8339_k66xbf.jpg',
    //         'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930178/zuzana/profile/8344_uydm6w.jpg',
    //         'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930174/zuzana/profile/8341_tgy6mb.jpg',
    //         'https://res.cloudinary.com/dqrpaoopz/image/upload/v1602930174/zuzana/profile/8341_tgy6mb.jpg',
    //     ],
    // };
</script>

{#if $osobni_profile?.pic}
    <ZImage src={$osobni_profile.pic} alt="Zuzana" zclass="w-full rounded-lg shadow-lg" />
{/if}

{#if $osobni_profile?.items?.length}
    <section class="mt-10">
        {#each $osobni_profile.items as info}
            <InfoBlock {info} />
        {/each}
    </section>
{/if}

{#if $osobni_profile?.bottomPics?.length}
    <section class="grid gap-5 grid-cols-3">
        {#each $osobni_profile.bottomPics as pic}
            <ZImage src={pic} alt="yoga pic" zclass="rounded-lg shadow-lg" />
        {/each}
    </section>
{/if}
