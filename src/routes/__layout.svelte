<script context="module">
  import { browser } from '$app/env';

  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  import '../styles/preflight.css';
  import '../styles/responsive-layout.css';
  import '../styles/colors.css';
  import '../styles/layout.css';
  import '../styles/fonts.css';
</script>

{#if browser}
  <Header />
  <slot />
  <Footer />
{/if}
