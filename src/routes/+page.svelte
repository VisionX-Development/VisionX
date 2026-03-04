<div class="landing">
	<div class="image-wrapper">
		<img src="/images/VisionX_Logo.svg" alt="VisionX Logo" width="500" height="500" />
	</div>
	<p class="title">
		<strong class="capital">V</strong>ision
		<strong class="capital">X</strong>
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
	}
	.capital {
		font-size: 8vmax;
		font-weight: bold;
	}
	.image-wrapper {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 1));
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
