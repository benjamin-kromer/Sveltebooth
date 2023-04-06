<script>
		import { confetti } from '@neoconfetti/svelte';

</script>

<div 
		style="position: absolute; left: 50%; top: 30%"
		use:confetti={{
			particleCount: 42,
			force: 0.7,
			stageWidth: window.innerWidth,
			stageHeight: window.innerHeight,
			colors: ['#ff3e00', '#ff0000','#40b3ff', '#676778','#ee82ee','#6a5acd','#ffa500']
		}}
	/>
	<style>

	</style>