<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="landing">
	<div class="image-wrapper">
		<img src="/images/VisionX_Logo.svg" alt={m.nav_logo_alt()} width="500" height="500" />
	</div>
	<p class="title">
		<strong class="capital">{m.home_title_vision().charAt(0)}</strong>{m.home_title_vision().slice(1)}
		<strong class="capital">{m.home_title_x()}</strong>
	</p>
</div>

<style>
	.landing {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		color: #ff0000;
		text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
	}
	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 8vmax;
		letter-spacing: 2.5rem;
		font-family: inherit;
		margin: 0;
		margin-top: -1.5rem;
	}
	.capital {
		font-size: 8vmax;
		font-weight: bold;
	}
	.image-wrapper {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 1));
	}
	@media (max-width: 768px) {
		.landing {
			justify-content: center;
		}
		.image-wrapper {
			padding: 0 1.5rem;
			box-sizing: border-box;
			margin-top: -20vh;
		}
		.image-wrapper img {
			width: min(72vw, 52vh);
			height: min(72vw, 52vh);
			max-width: 100%;
			object-fit: contain;
		}
		.title {
			font-size: 7.5vmax;
			letter-spacing: 1rem;
		}
		.capital {
			font-size: 7.5vmax;
		}
	}
	@media (max-width: 350px) {
		.title {
			writing-mode: vertical-rl;
			text-orientation: upright;
			font-size: 5vmax;
			letter-spacing: 0;
		}
	}
</style>
