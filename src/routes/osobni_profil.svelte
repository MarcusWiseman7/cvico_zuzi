<script>
    import InfoBlock from '$lib/components/InfoBlock.svelte';
    import ZImage from '$lib/components/ZImage.svelte';
    import { osobni_profil } from '$lib/stores';
</script>

{#if $osobni_profil?.profilePic}
    <ZImage src={$osobni_profil.profilePic} alt="Zuzana" zclass="w-full rounded-lg shadow-lg" />
{/if}

{#if $osobni_profil?.info?.length}
    <section class="mt-10">
        {#each $osobni_profil.info as info}
            <InfoBlock zclassHeader="underline underline-offset-2" {info} />
        {/each}
    </section>
{/if}

{#if $osobni_profil?.cv}
    <InfoBlock zclassHeader="underline underline-offset-2" info={$osobni_profil.cv} />
{/if}

{#if $osobni_profil?.gallery?.images?.length}
    <section class="grid gap-5 grid-cols-3 mt-10">
        {#each $osobni_profil.gallery.images as pic}
            <ZImage src={pic} alt="yoga pic" zclass="rounded-lg shadow-lg h-full object-cover" />
        {/each}
    </section>
{/if}
