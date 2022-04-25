<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { formatPhone } from '$lib/helpers';
    import { kontakt } from '$lib/stores';
    import FB_src from '$lib/assets/icons/facebook.svg';
    import Email_src from '$lib/assets/icons/email.svg';

    let l_to = null;
    let l_counter = 0;

    const initMap = () => {
        const center = SMap.Coords.fromWGS84(14.1751418523, 49.7836911871);
        const mapa = new SMap(JAK.gel('mapa'), center, 16);
        mapa.addDefaultLayer(SMap.DEF_SMART_BASE).enable();
        mapa.addDefaultControls();

        const layer = new SMap.Layer.Marker();
        mapa.addLayer(layer).enable();

        const options = {};
        const marker = new SMap.Marker(center, 'myMarker', options);
        layer.addMarker(marker);
    };
    const initLoader = () => {
        try {
            Loader.async = true;
            Loader.load(null, null, initMap);
        } catch (err) {
            if (l_counter < 200) {
                l_counter++;
                l_to = setTimeout(() => {
                    this.initLoader();
                }, 10);
            }
        }
    };

    onMount(initLoader);
    onDestroy(() => {
        if (l_to) clearTimeout(l_to);
    });
</script>

<svelte:head>
    <script src="https://api.mapy.cz/loader.js"></script>
</svelte:head>

{#if $kontakt}
    <div class="font-semibold p-10 w-fit ml-auto mr-auto bg-neutral-600 rounded-xl">
        <h2 class="text-3xl mb-2">Zuzana Doudová</h2>

        {#if $kontakt?.phone}
            <p class="text-xl">
                mob: <a href={'tel:+420' + $kontakt.phone} class="text-pink-1">{formatPhone($kontakt.phone)}</a>
            </p>
        {/if}

        {#if $kontakt?.email}
            <p class="text-xl mb-2">
                email: <a href={'mailto:' + $kontakt.email} class="text-pink-1">{$kontakt.email}</a>
            </p>
        {/if}

        {#if $kontakt?.reserve_link}
            <p class="text-xl mb-2">
                Spolupracujeme s Rodinným centrem Baráček: <a
                    href={'http://' + $kontakt.reserve_link}
                    class="text-pink-1">{$kontakt.reserve_link}</a
                >
            </p>
        {/if}

        {#if $kontakt?.address?.length}
            {#each $kontakt.address as address}
                <p class="text-lg">{address}</p>
            {/each}
        {/if}

        {#if $kontakt?.facebook || $kontakt?.email}
            <div class="flex justify-center pt-5">
                {#if $kontakt?.facebook}
                    <a href={$kontakt.facebook} target="_blank" class="mx-5">
                        <img src={FB_src} alt="facebook" />
                    </a>
                {/if}
                {#if $kontakt.email}
                    <a href={`mailto:${$kontakt.email}`} class="mx-5">
                        <img src={Email_src} alt="email" />
                    </a>
                {/if}
            </div>
        {/if}
    </div>
{/if}

<div id="mapa" class="my-5 h-80 min-h-min lg:h-96 gmap" />
