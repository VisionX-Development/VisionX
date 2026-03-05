<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="legal-page about-page" style="justify-content: flex-start;">
	<img class="about-logo" src="/images/VisionX_Logo.svg" alt={m.nav_logo_alt()} width="250" height="250" />
	<div class="about-content">
		<h1 class="about-title">
			<span class="about-title-main">VISIONX.DEV</span><span class="about-title-suffix">ELOPMENT</span>
		</h1>
		<h2 class="about-subtitle">{m.about_subtitle()}</h2>
		<p class="about-subtitle">
			{m.about_vision_text()}
		</p>
		<p class="about-contact">
			{m.about_contact()} <a href="mailto:info@visionx.dev">info@visionx.dev</a>
		</p>
	</div>
</div>

<style>
	.about-page {
		padding-top: 4rem;
	}

	.about-title {
		font-size: 2.7rem;
		font-weight: 700;
	}

	.about-title-main {
		color: #000000;
	}

	.about-title-suffix {
		color: #ff0000;
	}

	.about-subtitle {
		font-size: 2.2rem;
	}

	.about-contact {
		font-size: 2.2rem;
		margin-top: 1.5rem;
	}

	@media (max-width: 600px) {
		.about-logo {
			align-self: center;
		}
		.about-page {
			padding-top: 7rem;
		}
		.about-content {
			padding-left: 1rem;
		}
	}
</style>
