<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { formatPhone } from '$lib/helpers';

    const contact = {
        phone: '777 100 015',
        email: 'cvicozuzi@gmail.com',
        reserve_link: 'www.rcbaracek.cz',
        address1: 'ZŠ',
        address2: 'Lidická 384, Dobříš',
        facebook: 'https://www.facebook.com/profile.php?id=100009177529273',
    };
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

{#if contact}
    <div class="font-semibold p-10 w-fit ml-auto mr-auto bg-neutral-600 rounded-xl">
        <h2 class="text-3xl mb-2">Zuzana Doudová</h2>
        <p class="text-xl">
            mob: <a href={'tel:+420' + contact.phone} class="text-pink-1">{formatPhone(contact.phone)}</a>
        </p>
        <p class="text-xl mb-2">email: <a href={'mailto:' + contact.email} class="text-pink-1">{contact.email}</a></p>
        <p class="text-xl mb-2">
            Spolupracujeme s Rodinným centrem Baráček: <a href={'http://' + contact.reserve_link} class="text-pink-1"
                >{contact.reserve_link}</a
            >
        </p>

        <p>{contact.address1}</p>
        <p>{contact.address2}</p>
    </div>
{/if}

<div id="mapa" class="my-5 h-80 min-h-min lg:h-96 gmap" />
