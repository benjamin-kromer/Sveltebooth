<script>
    import {pictures} from '../../lib/stores';
    export let data;
    console.log(data)
    </script>
    <svelte:head>
        <title>GALLERY - Sveltebooth</title>
    </svelte:head>
    <div>
        <h1>Gallery View</h1>
        <div class="ui segment">
            <div class="ui stackable four column grid">
                {#if $pictures.length == 0}
                    {#each $pictures as src }
                        <div class=" column"><img class="ui small image" {src} alt="pic" width="100%" height="100%" /></div> 
                    {/each}
                {:else}
                    <h4>NO PICTURES 😲 SNAP ONE QUICK!</h4>
                {/if}
            </div>
        </div>
    </div>
    