<script lang="ts">
    import '../app.css';
    import { page } from '$app/stores';
    import ZHeader from '$lib/components/ZHeader.svelte';
    import ZFooter from '$lib/components/ZFooter.svelte';
    import ZPopup from '$lib/components/ZPopup.svelte';
    import { popupObj } from '$lib/stores';

    $: page_name = $page.url.pathname.replace('/', '').replace('_', ' ');
    $: title = page_name ? `Cvicozuzi | ${page_name}` : `Cvicozuzi`;
    $: layout_class =
        (page_name ? 'text-white bg-neutral-700 ' : 'text-stone-900 ') +
        'flex flex-col items-center justify-between pt-20 w-full min-h-screen select-none overflow-x-hidden';
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class={layout_class}>
    <ZHeader />
    <div class="min-h-max w-full px-3.5 lg:w-3/4 lg:max-w-5xl lg:px-0">
        <slot />
    </div>
    <ZFooter />

    {#if $popupObj}
        <ZPopup />
    {/if}
</div>
