<script lang="ts">
    import type { InfoBlock } from '$lib/ts-interfaces';

    export let info: InfoBlock;
    export let zclass: string = '';

    const blockClass = zclass + ' py-10 first:pt-0';
</script>

<div class={blockClass}>
    <h2 class="text-center text-3xl mb-6">{info.title}</h2>
    <p class="text-justify text-lg">{info.text}</p>
</div>
