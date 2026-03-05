<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<footer class="footer-main">
	<a href="/privacy">{m.footer_privacy()}</a>
	<a href="/terms">{m.footer_terms()}</a>
	<a href="/about">{m.footer_imprint()}</a>
</footer>

<style>
	.footer-main {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 0.7rem 2rem;
		z-index: 9;
		background-color: rgba(51, 51, 51, 0.3);
		font-size: 1.2rem;
		cursor: pointer;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		width: 100vw;
	}
	.footer-main a {
		margin: 0 1.5rem;
		color: rgba(255, 0, 0, 1);
		text-decoration: none;
	}
	.footer-main a:hover {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
	}
	@media (max-width: 768px) {
		.footer-main {
			font-size: 1.85rem;
			padding: 1rem 1.25rem;
		}
		.footer-main a {
			margin: 0 1rem;
		}
	}
</style>
