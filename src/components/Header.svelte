<script context="module">
  import DarkMode from './DarkMode.svelte';
  import GitHub from './GitHubIcon.svelte';
  import Logo from './Logo.svelte';
  import PaletteSwitcher from './PaletteSwitcher.svelte';
</script>

<header>
  <Logo />
  <nav>
    <PaletteSwitcher />
    <DarkMode />
    <span />
    <a
      href="https://github.com/smastrom"
      rel="noreferrer"
      target="_blank"
      aria-label="GitHub Profile"
    >
      <GitHub />
    </a>
  </nav>
</header>

<style lang="postcss">
  header {
    padding: 0 var(--gap);
    display: flex;
    height: var(--headerHeight);
    backdrop-filter: blur(8px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid var(--foregroundAlphaColor);
    justify-content: space-between;
    align-items: center;
    z-index: 5;

    @supports not (backdrop-filter: blur(8px)) {
      background-color: var(--backgroundColor);
    }

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
    gap: 10px;
    align-items: center;

    @media (min-width: 375px) {
      gap: 15px;
    }

    @media (min-width: 390px) {
      gap: 20px;
    }

    @media (min-width: 1280px) {
      gap: 25px;
    }
  }

  a {
    padding: 10px;
    margin-right: -10px;
    display: flex;
    font-weight: 700;

    &:hover {
      color: var(--accentColor);
    }
  }
</style>
