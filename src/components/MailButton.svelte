<script lang="ts">
  import MailIcon from '../components/MailIcon.svelte';
  import MailDialog from './MailDialog.svelte';

  let isOpen = false;
</script>

{#if isOpen}
  <MailDialog bind:isOpen />
{/if}

<button
  class="email-button"
  aria-label="Send me an email"
  on:click={() => (isOpen = !isOpen)}
  tabindex={isOpen ? '-1' : '0'}
>
  <MailIcon />
</button>

<style lang="postcss">
  .email-button {
    position: fixed;
    bottom: 10%;
    right: var(--gap);
    border: none;
    display: flex;
    padding: 10px;
    border: 1px solid var(--foregroundAlphaColor);
    border-radius: 100%;
    backdrop-filter: blur(8px);
    z-index: 10;
    transition: border-color var(--easing);

    @supports not (backdrop-filter: blur(8px)) {
      background-color: var(--backgroundColor);
    }

    &:hover {
      border-color: var(--accentColor);
    }
  }
</style>
