<script lang="ts">
    import { popupObj } from '$lib/stores';
    import { page } from '$app/stores';

    const items = ['BodyART', 'DeepWORK', 'Spinning', 'Power joga', 'Bosu', 'Bodystyling'];

    const itemClick = (item: string): void => {
        popupObj.set({
            title: item,
            text: 'dslkfjsdf l ksdjfjds kfkld s kfjsdj fd sjf lkjdsfj dk sl jkflds jfklj dskl jfk ldsj kfljds klfj sdklj fklsdjfkl sdj fkl jsdk lfjsdkljd sklsdjl ksdjl dksjfdl skj dsj fkd fkldsjfd skj dskfj dkl jdsl kfjd skljdsk ljdsl jdsklj dsklfjs dfklj d',
        });
    };
</script>

<footer class=" bg-stone-800 text-white w-full">
    {#if $page.url.pathname === '/'}
        <div class="w-full grid grid-cols-2 lg:grid-cols-3">
            {#each items as item}
                <div class="flex items-center justify-center py-4">
                    <span
                        class="item text-2xl lg:text-3xl font-semibold p-4 cursor-pointer underline underline-offset-2 decoration-4"
                        on:click={() => {
                            itemClick(item);
                        }}
                    >
                        {item}
                    </span>
                </div>
            {/each}
        </div>
    {/if}
    <div class="w-full text-center my-6">
        <span class="text-sm">Marcus Wiseman &copy; {new Date().getFullYear()}</span>
    </div>
</footer>

<style>
    .item {
        text-decoration-color: var(--main-color);
    }
</style>
