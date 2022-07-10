<footer>
  <small>
    Compiled with <a href="https://svelte.dev/" rel="noreferrer" target="_blank">Svelte</a>
    {' '}
    <span>—</span> Icons by
    <a href="https://feathericons.com/" rel="noreferrer" target="_blank">Feather</a>
  </small>
</footer>

<style>
  footer {
    color: var(--foregroundColor);
    font-size: responsive 1.125rem 1.75rem;
    font-range: 768px 3840px;
    position: relative;
    z-index: 5;
  }

  span {
    color: var(--foregroundAlphaColor);
  }

  a {
    color: var(--accentColor);
  }
</style>
