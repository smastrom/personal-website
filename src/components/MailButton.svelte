<script context="module">
  import MailIcon from '../components/MailIcon.svelte';
  import MailDialog from './MailDialog.svelte';
</script>

<script lang="ts">
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
    right: 30px;
    border: none;
    padding: 10px;
    border: 2px solid var(--foregroundAlphaColor);
    border-radius: 100%;
    backdrop-filter: blur(8px);
    z-index: 10;
    transition: border-color 200ms ease-out;

    &:hover {
      border-color: var(--accentColor);
    }
  }
</style>
