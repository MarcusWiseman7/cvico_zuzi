<script lang="ts">
    import type { InfoBlock } from '$lib/ts-interfaces';
    import CustomPortableText from './CustomPortableText.svelte';

    export let info: InfoBlock;
    export let zclass: string = '';
    export let zclassHeader: string = '';

    const blockClass = zclass + ' py-10 first:pt-0';
    const headerClass = zclassHeader + ' text-3xl mb-6';
</script>

<div class={blockClass}>
    <h2 class={headerClass}>{info.title}</h2>
    {#if info.hasOwnProperty('text')}
        <p class="text-justify text-lg">{info.text}</p>
    {:else if info.hasOwnProperty('content')}
        <CustomPortableText blocks={info.content} />
    {/if}
</div>
