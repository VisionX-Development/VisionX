<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { setLocale, getLocale } from '$lib/paraglide/runtime.js';

	const currentLocale = $derived(getLocale());
</script>

<nav class="nav-main">
	<div class="image-wrapper" data-testid="logo">
		<a href="/" aria-label={m.nav_home_aria()}>
			<img src="/images/VisionX_Logo.svg" alt={m.nav_logo_alt()} width="50" height="50" />
		</a>
	</div>
	<div class="menu-wrapper">
		<a href="/about">{m.nav_about()}</a>
		<div class="lang-switcher">
			<button
				class="lang-btn"
				class:active={currentLocale === 'de'}
				aria-pressed={currentLocale === 'de'}
				onclick={() => setLocale('de')}
			>
				<span class="lang-flag" aria-hidden="true">🇩🇪</span>
				<span class="lang-label">{m.lang_de()}</span>
			</button>
			<button
				class="lang-btn"
				class:active={currentLocale === 'en'}
				aria-pressed={currentLocale === 'en'}
				onclick={() => setLocale('en')}
			>
				<span class="lang-flag" aria-hidden="true">🇬🇧</span>
				<span class="lang-label">{m.lang_en()}</span>
			</button>
		</div>
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
		filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.3));
	}
	.menu-wrapper {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		font-size: 1.5rem;
	}
	.lang-switcher {
		display: flex;
		gap: 0.5rem;
	}
	.lang-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		min-width: 9.5rem;
		height: 3rem;
		padding: 0.6rem 1.2rem;
		font-size: 0.8em;
		border-radius: 9999px;
		border: 1px solid rgba(255, 255, 255, 0.25);
		background: rgba(15, 15, 15, 0.7);
		color: rgba(255, 255, 255, 0.9);
		cursor: pointer;
		font-family: inherit;
		transition:
			background-color 150ms ease,
			color 150ms ease,
			border-color 150ms ease,
			box-shadow 150ms ease,
			transform 80ms ease;
	}
	.lang-flag {
		font-size: 1.05em;
		line-height: 1;
	}
	.lang-label {
		letter-spacing: 0.02em;
	}
	.lang-btn:hover {
		background: rgba(40, 40, 40, 0.95);
		border-color: rgba(255, 255, 255, 0.4);
		box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
		transform: translateY(-1px);
	}
	.lang-btn.active {
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
		border-color: rgba(255, 255, 255, 0.8);
		box-shadow:
			0 0 0 1px rgba(255, 255, 255, 0.16),
			0 8px 16px rgba(0, 0, 0, 0.45);
		transform: translateY(0);
	}
	@media (max-width: 768px) {
		.nav-main {
			font-size: 2.35rem;
			padding: 0.8rem 1.25rem;
		}
		.nav-main a {
			font-size: 1.15em;
		}
		.menu-wrapper {
			font-size: 2.1rem;
		}
	}
</style>
