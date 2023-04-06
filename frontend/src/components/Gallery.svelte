<script>
import {pictures} from '../lib/stores';
</script>

<div>
	<h1>Gallery View</h1>
	<div class="ui segment">
		<div class="ui stackable four column grid">
			{#if $pictures.length == 0}
				{#each $pictures as src }
					<div class=" column"><img {src} alt="pic" width="100%" height="100%" /></div>
				{/each}
			{:else}
				<h4>NO PICTURES 😲 SNAP ONE QUICK!</h4>
			{/if}
		</div>
	</div>
</div>
