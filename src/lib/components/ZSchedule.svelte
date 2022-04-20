<script>
    const headers = ['', 'slkdjf', 'sldkjf', 'sldkjf', 'dslkf'];
    const rows = [
        { cols: ['PO', 'dslkjf', 'sldkf', 'ds', ''] },
        { cols: ['UT', 'dslkjf', '', 'lkjdskjdsfkjdskfljdskfjlkdsjfkljdsfkjdskfjdskljfdslkf', 'sldkjf sdklfj sdf'] },
        { cols: ['ST', '', 'sldkf', 'sdfsdf', ''] },
        { cols: ['CT', 'dslkjf', 'sldkf lksdjf kdfsk k', '', ''] },
        { cols: ['PA', 'dslkjf', 'sldkf', '', ''] },
        { cols: ['SO', '', '', '', ''] },
        { cols: ['NE', '', '', '', ''] },
    ];

    const h_width = 90 / (headers.length - 1) + '%';
</script>

<table class="shadow-xl w-full break-words table-fixed">
    <thead>
        <tr>
            {#each headers as header}
                <th class="py-7">{header}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each rows as row}
            <tr>
                {#each row.cols as col, index}
                    <td class="py-5 px-1 text-center" style={index != 0 ? 'width: ' + h_width : ''}>{col}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    thead {
        background-color: rgba(0, 0, 0, 0.1);
    }

    th {
        border-right: 1px solid rgba(0, 0, 0, 0.05);
    }

    th:last-child {
        border-right: none;
    }

    td {
        border-right: 1px solid rgba(0, 0, 0, 0.05);
        width: 10%;
    }

    td:last-child {
        border-right: none;
    }

    tr:nth-child(2n) {
        background: rgba(0, 0, 0, 0.07);
    }
</style>
