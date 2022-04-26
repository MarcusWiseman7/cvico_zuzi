<script>
    import { goto } from '$app/navigation';
    import { index } from '$lib/stores';
</script>

<div class="hero" />

<div class="absolute top-14 right-0 left-0 h-96 flex flex-col justify-center items-center z-10">
    <h1 class="text-5xl lg:text-7xl font-bold">CVÍČO ZUZI</h1>

    {#if $index?.quote?.text}
        <blockquote class="mt-8 px-10 lg:px-0 text-justify">
            <span class="font-semibold italic">"{$index.quote.text}"</span>
            {#if $index.quote.author}
                <span class="text-sm">-{$index.quote.author}</span>
            {/if}
        </blockquote>
    {/if}

    <button
        on:click={() => {
            goto('/aktuality');
        }}
        class="py-3 px-5 mt-12 border-2 border-pink-1 text-pink-1 rounded-lg text-2xl"
    >
        AKCE/AKTUALITY
    </button>
</div>

<div class="h-96" />

<style>
    .hero::after {
        content: '';
        background-image: url('https://cdn.sanity.io/images/lb1qbbos/production/11d3f47d0e28d63b1c1d08f414284364064f187b-1632x918.jpg?fm=webp');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 4rem;
        right: 0;
        left: 0;
        height: 24rem;
        opacity: 0.2;
        z-index: 0;
    }
</style>
