<script lang="ts">
	// Kein Login/Auth – Links für alle sichtbar.
	// Session/Login später manuell ergänzbar.
</script>

<nav class="nav-main">
	<div class="image-wrapper" data-testid="logo">
		<a href="/" aria-label="VisionX Startseite">
			<img src="/images/VisionX_Logo.svg" alt="VisionX Logo" width="50" height="50" />
		</a>
	</div>
	<div class="menu-wrapper">
		<a href="/ueber">ÜBER VISIONX</a>
	</div>
</nav>

<style>
	.nav-main {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0.7rem 2rem;
		z-index: 9;
		position: sticky;
		top: 0;
		background-color: rgba(51, 51, 51, 0.3);
		font-size: 1.8rem;
		width: 100vw;
	}
	.nav-main a {
		color: red;
		text-decoration: none;
		padding: 0.5rem;
	}
	.nav-main a:hover {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
	}
	.image-wrapper {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
		display: block;
		width: 50px;
		cursor: pointer;
	}
	.image-wrapper:hover {
		filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
	}
	.menu-wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 1rem;
		font-size: 1.5rem;
	}
</style>
