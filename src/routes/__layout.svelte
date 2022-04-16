<script lang="ts">
    import '../app.css';
    import { page } from '$app/stores';
    import ZHeader from '$lib/components/ZHeader.svelte';
    import ZFooter from '$lib/components/ZFooter.svelte';
    import ZPopup from '$lib/components/ZPopup.svelte';
    import { popupObj } from '$lib/stores';

    $: page_name = $page.url.pathname.replace('/', '');
    $: title = page_name ? `Cvicozuzi | ${page_name.slice(0, 1).toUpperCase() + page_name.slice(1)}` : `Cvicozuzi`;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div
    class="flex flex-col items-center justify-between pt-20 w-full min-h-screen text-stone-900 select-none overflow-x-hidden"
>
    <ZHeader />
    <div class="min-h-max w-full px-3.5 lg:w-2/3 lg:max-w-4xl lg:px-0">
        <slot />
    </div>
    <ZFooter />

    {#if $popupObj}
        <ZPopup />
    {/if}
</div>
