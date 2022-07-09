<script context="module">
  import DarkMode from './DarkMode.svelte';
  import Logo from './Logo.svelte';
  import PaletteSwitcher from './PaletteSwitcher.svelte';
</script>

<header>
  <Logo elemWidth={40} fillColor="var(--headingsColor)" />
  <nav>
    <PaletteSwitcher />
    <DarkMode />
    <span />
    <a href="https://github.com/smastrom" rel="noreferrer" target="_blank">GitHub</a>
  </nav>
</header>

<style lang="postcss">
  header {
    padding: 0 var(--gap);
    display: flex;
    height: var(--headerHeight);
    backdrop-filter: blur(4px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid var(--foregroundAlphaColor);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;

    @media (min-width: 1920px) {
      padding: 0 var(--gap);
    }
  }

  span {
    width: 1px;
    height: 45px;
    background-color: var(--foregroundAlphaColor);
  }

  nav {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  a {
    color: var(--foregroundColor);
    font-weight: 700;

    &:hover {
      color: var(--accentColor);
    }
  }
</style>
