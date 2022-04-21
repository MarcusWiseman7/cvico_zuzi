<script>
    import ZEventItem from './ZEventItem.svelte';

    export let grid = false;

    const title = 'DS kdsfkdsf sdkfk ksdfkdsl';
    const events = [
        {
            title: 'sdklf kjfjdslkf jsdlkjfdslk jflkdsj',
            description: 'sldkjf kjsldflk slkdfjdlks jdskljfkj dssdklf sdklfkds kjfds',
            dates: {
                startDate: '6/12/2022',
                endDate: '7/01/2022',
            },
        },
        {
            title: 'sdklfjdsjf skdfjdklsj sdfjflkjds lkjfdslkjf',
            description: 'sldkjf kjsldflk slkdfjdlks jdskljfkj dssdklf sdklfkds kjfds',
            dates: {
                startDate: '6/12/2022',
            },
        },
        {
            title: 'sdkfj fkj kdsljfkldsj flkjdslkfj',
            description: 'sldkjf kjsldflk slkdfjdlks jdskljfkj dssdklf sdklfkds kjfds',
            dates: {
                startDate: '6/12/2022',
                endDate: '7/01/2022',
            },
        },
        {
            title: 'sdkjf lj sdkjflk jdkjfkdslj',
            description: 'sldkjf kjsldflk slkdfjdlks jdskljfkj dssdklf sdklfkds kjfds',
            dates: {
                startDate: '6/12/2022',
            },
        },
    ];
</script>

{#if events?.length}
    <h2 class="text-2xl underline underline-offset-1">{title}</h2>
    <ul class={grid ? 'lg:grid lg:grid-cols-2' : ''}>
        {#each events as event, index}
            <ZEventItem {event} pink={index % (grid ? 3 : 2) == 0} />
        {/each}
    </ul>
{/if}
