<script context="module">
  import { onMount } from 'svelte';

  import Moon from './Moon.svelte';
  import Sun from './Sun.svelte';

  const getTheme = () => {
    if (localStorage.theme === 'dark') {
      return true;
    }
    if (localStorage.theme === 'light') {
      return false;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  };
</script>

<script lang="ts">
  let isDark = getTheme();
  let audio: HTMLAudioElement;

  onMount(() => {
    audio = new Audio(
      'https://drive.google.com/uc?export=download&id=1DeuF3BPygs7S-GhSEh1PyU39SbMVHEep'
    );
  });

  const switchTheme = () => {
    audio.play();
    isDark = !isDark;
  };

  $: {
    const HTMLClassList = document.documentElement.classList;
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      HTMLClassList.remove('light-mode');
      HTMLClassList.add('dark-mode');
    } else {
      localStorage.setItem('theme', 'light');
      HTMLClassList.remove('dark-mode');
      HTMLClassList.add('light-mode');
    }
  }
</script>

<button
  on:click={switchTheme}
  type="switch"
  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if isDark}
    <Sun />
  {:else}
    <Moon />
  {/if}
</button>

<style>
  button {
    border: none;
    display: flex;
    padding: 10px;
  }
</style>
