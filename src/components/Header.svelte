<script>
  import Logo from './Logo.svelte';
</script>

<header class="header">
  <Logo elemWidth={40} fillColor="#dcfce7" />
  <nav class="header--right">
    <a
      class="header--right--github"
      href="https://github.com/smastrom"
      rel="noreferrer"
      target="_blank">GitHub</a
    >
  </nav>
</header>

<style lang="postcss">
  .header {
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

  .header--right {
    display: flex;
    gap: 20px;
  }

  .header--right--github {
    color: var(--foregroundColor);
    font-weight: 700;

    &:hover {
      color: var(--accentColor);
    }
  }
</style>
