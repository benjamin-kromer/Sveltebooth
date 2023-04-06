<script>
	import "./semantic-ui-min.css";

	import Gallery from "../components/Gallery.svelte";
	import Snap from "../components/Snap.svelte";
	export let snapMode = false;
  </script>
  
  <div class="ui">
	{#if snapMode }
	  <Snap />
	{:else}
	  <Gallery />
	{/if}
  </div>
  <div class="ui bottom fixed menu">
	<button on:click={()=>snapMode = !snapMode} class="ui {snapMode ? 'green' : 'blue'} button massive">
	  {snapMode ? "Gallery" : "SNAP"}
	</button>
  </div>
  