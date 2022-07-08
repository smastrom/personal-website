<script>
  import LogoBackground from '../components/LogoBackground.svelte';
</script>

<h1 class="title">
  Hello, <strong>I'm Simone</strong>, graphic designer and frontend developer from Italy.
</h1>
<article>
  <h2 class="h2">Who am I?</h2>
  <p class="paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur accumsan leo,
    at cursus nisi porta ut. Vivamus et aliquam nulla. Nunc et vulputate tellus. Morbi rhoncus
    faucibus neque a convallis. <a class="link" href="/">Proin</a> laoreet enim eget condimentum
    scelerisque. Duis vulputate quis nisi sit amet interdum. Donec sit amet cursus mi.
  </p>

  <h2 class="h2">Skills and Tech</h2>
  <p class="paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur accumsan leo,
    at cursus nisi porta ut. Vivamus et aliquam nulla. Nunc et vulputate tellus. Morbi rhoncus
    faucibus neque a convallis. Proin laoreet enim eget condimentum scelerisque. Duis vulputate
    quis nisi sit amet interdum. Donec sit amet cursus mi.
  </p>

  <h2 class="h2">Skills and Tech</h2>
  <p class="paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur accumsan leo,
    at cursus nisi porta ut. Vivamus et aliquam nulla. Nunc et vulputate tellus. Morbi rhoncus
    faucibus neque a convallis. Proin laoreet enim eget condimentum scelerisque. Duis vulputate
    quis nisi sit amet interdum. Donec sit amet cursus mi.
  </p>

  <LogoBackground />
</article>

<style lang="postcss">
  .title {
    margin-top: var(--headerHeight);
    padding: 3rem 0;
    font-family: 'Basier Square';
    letter-spacing: -0.025ch;
    color: #dcfce7;
    font-size: responsive 2.25rem 11.25rem;
    font-range: 768px 3840px;
    font-weight: 800;
    line-height: 1.3;

    & strong {
      color: var(--accentColor);
    }

    @media (min-width: 769px) {
      max-width: var(--fiveCols);
      padding: 7% 0 7% 0;
    }
  }

  .h2 {
    letter-spacing: -0.025ch;
    font-weight: 700;
    font-size: responsive 1.25rem 4.5rem;
    font-family: 'Basier Square';
    font-range: 768px 3840px;
    color: var(--accentColor);
  }

  .paragraph {
    margin: 1rem 0 3rem 0;
    color: var(--foregroundColor);
    font-size: responsive 1rem 2.25rem;
    font-family: 'Basier Square';
    letter-spacing: -0.015ch;
    font-range: 768px 3840px;
    line-height: 1.55;
    font-weight: 400;

    @media (min-width: 769px) {
      margin: 1% 0 4.5% 0;
    }
  }

  .h2,
  .paragraph {
    @media (min-width: 769px) {
      max-width: var(--threeCols);
    }
  }

  .link {
    color: var(--foregroundColor);
    text-decoration: underline;

    &:hover {
      color: var(--accentColor);
    }
  }
</style>
