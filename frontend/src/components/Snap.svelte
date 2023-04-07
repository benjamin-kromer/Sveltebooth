<script>
	import { onMount } from 'svelte';
	
	let camera;
	const startVideoStream = async () => {
		try {
			const videoStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
			camera.srcObject = videoStream;
			camera.play();
		} catch (err) {
			console.log(err);
		}
		const takePicture = () => {
			console.log('taking picture');
		};
	};
	onMount(startVideoStream);
</script>

<div>
	<h1>Snap View</h1>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={camera} />
		<button class="ui button massive red" on:click={()=> console.log("takePicture")}>SNAP</button>
</div>
