<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { outsideClick } from '../actions/outsideClick';
	import { setNegativeTabIndex } from '../utils/setNegativeTabIndex';

	export let isOpen: boolean;

	const handleEscapeKey = (event: KeyboardEvent) => {
		if (event.code === 'Escape') {
			isOpen = false;
		}
	};

	onMount(() => {
		document.documentElement.style.overflow = 'hidden';

		setNegativeTabIndex('header', 'button', 'set');
		setNegativeTabIndex('header', 'a', 'set');
		setNegativeTabIndex('article', 'a', 'set');
		setNegativeTabIndex('footer', 'a', 'set');

		document.addEventListener('keydown', handleEscapeKey);
	});

	onDestroy(() => {
		document.documentElement.removeAttribute('style');

		setNegativeTabIndex('header', 'button', 'remove');
		setNegativeTabIndex('header', 'a', 'remove');
		setNegativeTabIndex('article', 'a', 'remove');
		setNegativeTabIndex('footer', 'a', 'remove');

		document.removeEventListener('keydown', handleEscapeKey);
	});
</script>

<div class="dialog-bg" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
	<div
		class="dialog"
		aria-modal={isOpen}
		aria-labelledby="dialog_label"
		aria-describedby="dialog_text"
		use:outsideClick
		on:outsideClick={() => (isOpen = false)}
	>
		<h1 id="dialog_label">Would you like to send me an email?</h1>
		<p id="dialog_text">
			If you'd like to get in touch, please send me an email. I'll get back to you as soon as I
			can.
		</p>
		<button
			type="button"
			on:click={() => {
				window.location.href = 'mailto:smastrom@proton.me';
				isOpen = false;
			}}>Yes, open my email app.</button
		>
		<button type="button" on:click={() => (isOpen = false)}>No, close this dialog.</button>
	</div>
</div>

<style lang="postcss">
	.dialog-bg {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		backdrop-filter: blur(12px);
		z-index: 20;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--gap);
		box-sizing: border-box;

		@supports not (backdrop-filter: blur(12px)) {
			background-color: var(--backgroundColor);
		}
	}

	.dialog {
		--marginBottom: 20px;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		border: 1px solid var(--foregroundAlphaColor);
		padding: 30px;
		background: var(--backgroundColor);
		width: 100%;
		max-width: 350px;
	}

	h1 {
		font-size: 1.375rem;
		color: var(--foregroundColor);
		font-weight: 700;
		margin-bottom: var(--marginBottom);
		line-height: 1.2;
	}

	p {
		color: var(--foregroundColor);
		margin-bottom: var(--marginBottom);
	}

	button {
		padding: 0.8em 0.6em;
		text-align: center;
		border-radius: 10px;
		border: 2px solid var(--accentColor);
		color: var(--accentColor);
		font-weight: 700;
		line-height: 1;
		transition: background-color var(--easing), color var(--easing);

		&:first-of-type {
			margin: var(--marginBottom) 0;
		}

		&:hover {
			background-color: var(--accentColor);
			color: var(--backgroundColor);
		}
	}
</style>
