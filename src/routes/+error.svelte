<script lang="ts">
	import { page } from '$app/stores';

	const status = $derived($page.status);
	const message = $derived($page.error?.message ?? '');
	const is404 = $derived(status === 404);
</script>

<div class="error-wrapper">
	<a href="/">
		<div class="image-wrapper">
			<img src="/images/VisionX_Logo.svg" alt="VisionX Logo" width="300" height="300" />
		</div>
	</a>
	<h1>{status}</h1>
	<div class="subtitle">
		{#if is404}
			Seite existiert nicht (mehr)
		{:else}
			{message || 'Ein Fehler ist aufgetreten'}
		{/if}
	</div>
	<a href="/">Zurück nach Hause</a>
</div>

<style>
	.error-wrapper {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow: scroll;
		color: red;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
	}
	.error-wrapper h1 {
		font-size: 7vmax;
		margin: 0;
	}
	.error-wrapper a {
		color: red;
		font-size: 2vmax;
		text-decoration: none;
		padding: 0.5rem 2rem;
	}
	.error-wrapper a:hover {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
	}
	.subtitle {
		font-size: 4vmax;
		letter-spacing: 0.4rem;
		margin: 2rem;
	}
	.image-wrapper {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
		display: block;
		cursor: pointer;
	}
	.image-wrapper:hover {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.8));
	}
	@media (max-width: 600px) {
		.subtitle {
			font-size: 3vmax;
			letter-spacing: 1.2rem;
			margin: 2rem;
		}
	}
	@media (min-width: 601px) and (max-width: 900px) {
		.subtitle {
			font-size: 5vmax;
			letter-spacing: 1.3rem;
			margin: 2rem;
		}
	}
</style>
