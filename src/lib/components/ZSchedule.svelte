<script lang="ts">
    import { schedule } from '$lib/stores';
</script>

{#if $schedule?.headers && $schedule?.rows}
    <table class="shadow-xl w-full break-words table-fixed">
        <thead class="bg-black bg-opacity-10">
            <tr>
                {#each $schedule.headers as header}
                    <th class="py-7 border-r border-r-black border-opacity-5 last:border-r-0">{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each $schedule.rows as row}
                <tr class="even:bg-black even:bg-opacity-5">
                    {#each row.cells as cell, index}
                        <td
                            class={`py-5 px-1 text-center border-r border-r-black border-opacity-5 last:border-r-0 ${
                                index == 0 ? 'font-semibold' : ''
                            }`}
                        >
                            {cell}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
{/if}
