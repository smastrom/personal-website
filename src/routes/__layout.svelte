<script context="module">
  import { browser } from '$app/env';

  import Head from '../components/Head.svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import MaskBackground from '../components/MaskBackground.svelte';

  import '../styles/preflight.css';
  import '../styles/responsive-layout.css';
  import '../styles/colors.css';
  import '../styles/layout.css';
  import '../styles/fonts.css';
</script>

{#if browser}
  <Head />
  <Header />
  <MaskBackground />
  <slot />
  <Footer />
{/if}
