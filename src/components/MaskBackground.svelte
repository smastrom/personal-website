<div />

<style lang="postcss">
  div {
    @media (min-width: 769px) {
      background: var(--foregroundAlphaColor);
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      mask-image: url('/logo-background-tablet.svg');
      mask-position: -10% 50%;
      mask-repeat: no-repeat;
      mask-size: 200%;
    }

    @media (min-width: 1366px) {
      mask-image: url('/logo-background-notebook.svg');
      mask-position: -100% 50%;
      mask-repeat: no-repeat;
      mask-size: 120%;
    }

    @media (min-width: 1920px) {
      mask-image: url('/logo-background.svg');
      mask-position: -100% 50%;
      mask-repeat: no-repeat;
      mask-size: 120%;
    }
  }
</style>
