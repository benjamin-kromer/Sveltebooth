<script>


	async function uploadImageToWasabi(file, fileName) {
	  const params = {
		Bucket: 'images000001',
		Key: fileName,
		Body: file,
		ContentType: 'image/jpeg',
		ACL: 'public-read',
	  };
	
	  try {
		const response = await s3.upload(params).promise();
		console.log('Image uploaded:', response);
		return response.Location;
	  } catch (error) {
		console.error('Error uploading image:', error);
	  }
	}
	
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
		context.drawImage(camera, 0, 0, canvas.width, canvas.height);
		uploadImageToWasabi(canvas.toBlob(), "test.png")
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
