<script lang="ts">
    import InfoBlock from '$lib/components/InfoBlock.svelte';

    const items = [
        {
            title: 'DeepWORK',
            text: 'Jedná se o velmi intenzivní trénínk, při kterém budujeme nejen fyzickou zdatnost, vytrvalost a sílu, ale zároveň je zaměřený na naší duchovní sílu a vnitřní rovnováhu. Je inspirován fylozofií dálného východu a vždy respektuje rovnováhu mezi jin a jang. V průběhu hodiny projdete 5 základními elementy - země, dřevo, oheň, kov a voda. Používáme vždy jen vlastní váhu těla, lekce se cvičí naboso. Cvičení je určené pro všechny, kdo se rádi hýbou, milují výzvy a chtějí zlepšit svou fyzičku. Je určené pro muže i ženy, začátečníky i pokročilé.',
        },
        {
            title: 'Spinning',
            text: 'Je energeticky účinné cvičení. Lekce je vedena na stacionárních kolech, kdy za doprovodu motivační muziky a zkušeného lektora, užijete nejen skvělou atmosféru, ale hlavně odvedete účinný kardio-vaskulární trénink. Spinning vám nejen vytvaruje postavu, zlepší fyzickou kondici, ale určitě vás i skvěle odreaguje. Lekce je opět určena pro všechny věkové skupiny, začátečníky i pokročilé. Nezapomeňte vodu, ručník, na sebe ideálně oblečení jako na kolo.',
        },
        {
            title: 'Bosu cardio/body',
            text: 'Při lekci využijeme speciální balanční pomůcku bosu balance trainer, díky které je cvičení mnohem efektivnější - kromě běžných svalů zapojíme i vnitřní stabilizační systém (hluboké svaly). Cvičení je zaměřené na formování postavy, rozvoje síly, stability a zlepšení fyzické kondice.',
        },
        {
            title: 'Bosu slow',
            text: 'Jedná se o lekci body&mind, kdy v pomalém tempu zaposilujeme a zároveň protáhneme svaly celého těla, včetně našeho core (středu těla). Cvičení probíhá naboso s využitím balanční pomůcky bosu balance trainer.',
        },
        {
            title: 'Power jóga',
            text: 'Vychází z klasické jógy, avšak jednotlivé pozice se dynamicky střídají. Je zaměřená na posílení středu těla a práci hlubokého stabilizačního systému. Cvičení vede k posílení a protažení svalů celého těla, rozvíjí koordinaci, sílu, flexibilitu, zároveň se však naučíte správně a hluboce dýchat.',
        },
        {
            title: 'Pilates',
            text: 'Je cvičební systém, který je zaměřen na posílení svalů celého těla, zejména však hlubokých břišních a zádových svalů a svalů pánevního dna. Rozvíjí sílu, ohebnost, koordinaci a dýchání. Pravidelné cvičení pomáhá od bolesti zad a zlepšuje držení celého těla.',
        },
        {
            title: 'Kruhový trénink',
            text: 'V průběhu lekce vystřídáte v pravidelných intervalech několik stanovišť, z nichž na každém jsou připraveny cviky na různé svalové skupiny (někdy s pomůckou, někdy jen s vlastní váhou). Efektivně tak procvičíte celé tělo, formujete postavu, rozvíjíte sílu a vytrvalost. Cvičení je vhodné pro muže i ženy.',
        },
        {
            title: 'BodyArt',
            text: 'Jedná se o lekci body&mind - pomalého cvičení, které spojuje východní fylozofii, prvky jógy a zdravotní fitness cvičení.  Základní pozice a sestavy z jógy jsou přizpůsobeny zdravotním omezením běžné klientely. BodyArt byl původně vyvinutý jako terapeutická metoda. Klade velký důraz na hluboké dýchání, je založen na principu jin a jang a 5 prvků z tradiční čínské medicíny. Pravidelné cvičení vede k odstranění svalových dysbalancí, rozvíjí sílu, flexibilitu a pomáhá k odbourávání stresu. Cvičí se naboso a je vhodné pro muže i ženy, začátečníky ale i aktivní sportovce.',
        },
        {
            title: 'Bodystyling',
            text: 'Po krátkém zahřátí následuje posilování svalů celého těla. Občas i s využitím cvičebních pomůcek jako bosu balance trainer, činek, gumiček, převážně však cvičíme jen s vlastní váhou těla. Lekce je zaměřená na rozvoj síly a formováí postavy.',
        },
        {
            title: 'Dance aerobic',
            text: 'Aerobní cvičení, ve kterém se postupně naučíme lehkou sestavu s využitím tanečních prvků. Perfektní pro odreagování, spálení kalorií a tvarování postavy zábavnou formou.',
        },
        {
            title: 'Fitbox',
            text: 'Intenzivní aerobní cvičební s využitím speciálních totemů. Prvky boxu jsou přizpůsobeny běžné klientele, zvládne skutečně každý. Při cvičení se nejen zapotíte, ale především odbouráte veškerý stres. Zároveň posilujete a formujete postavu. Vhodné pro muže i ženy, začátečníky i pokročilé.',
        },
    ];
</script>

{#if items?.length}
    {#each items as info}
        <InfoBlock {info} zclass="text-lime-300 border-b border-opacity-30 last:border-none border-lime-200" />
    {/each}
{/if}
