<script lang="ts">
    import { popupObj } from '$lib/stores';
    import { page } from '$app/stores';
    import { cviceni } from '$lib/stores';

    const items = ['bodyart', 'deepwork', 'spinning', 'power jóga', 'bosu cardio/body', 'bodystyling'];
    $: exercises = $cviceni?.exercise_list?.length
        ? $cviceni.exercise_list.filter((li) => items.includes(li.title.toLowerCase()))
        : [];

    const itemClick = (item: { title: string; text: string }): void => {
        popupObj.set({
            title: item.title,
            text: item.text,
        });
    };
</script>

<footer class=" bg-stone-800 text-white w-full mt-5">
    {#if $page.url.pathname === '/'}
        <div class="w-full grid grid-cols-2 lg:grid-cols-3">
            {#each exercises as item}
                <div class="flex items-center justify-center py-4">
                    <span
                        class="item text-2xl decoration-pink-1 lg:text-3xl font-semibold p-4 cursor-pointer underline underline-offset-2 decoration-4 text-center"
                        on:click={() => {
                            itemClick(item);
                        }}
                    >
                        {item.title}
                    </span>
                </div>
            {/each}
        </div>
    {/if}
    <div class="w-full text-center my-6">
        <span class="text-sm">Marcus Wiseman &copy; {new Date().getFullYear()}</span>
    </div>
</footer>
