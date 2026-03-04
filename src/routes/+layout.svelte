<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>VisionX</title>
</svelte:head>

<Navbar />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		/* body ist ein flex container mit align-items:center -> main darf nicht schrumpfen */
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
