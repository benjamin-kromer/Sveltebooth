<script>
	import { error } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	let canvas;
	let camera;
	const startVideoStream = async () => {
		try {
			const videoStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
			camera.srcObject = videoStream;
			camera.play();
		} catch (err) {
			console.log(err);
			throw error(500, {
				message: err.message
			});
		}
	};
	const takePicture = () => {
		const context = canvas.getContext('2d');
		context.drawImage(camera, 0, 0, camera.width, camera.height);
	};
	onMount(startVideoStream);
</script>
<svelte:head>
	<title>SNAP - Sveltebooth</title>
</svelte:head>
<div>
	<h1>Snap View</h1>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={camera} />
	<canvas bind:this={canvas} />
	<button class="ui button massive red" on:click={takePicture}>SNAP</button>
</div>
