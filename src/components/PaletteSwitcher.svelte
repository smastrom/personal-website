<script context="module">
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';

  import shuffle from 'lodash.shuffle';
</script>

<script lang="ts">
  type Palettes = 'green-palette' | 'blue-palette' | 'lille-palette';
  const colors: Palettes[] = ['green-palette', 'blue-palette', 'lille-palette'];

  const sortPalette = (colorCode: Palettes) => {
    const newPalette = colors.filter((color) => color !== colorCode);
    newPalette.unshift(colorCode);
    return newPalette;
  };

  let palettes = localStorage.palette ? sortPalette(localStorage.palette) : shuffle(colors);
  let palette = localStorage.palette || palettes[0];

  const setPalette = (colorCode: Palettes) => {
    const prevPalette = palette;

    palette = colorCode;
    palettes = sortPalette(colorCode);

    localStorage.setItem('palette', colorCode);
    document.documentElement.classList.replace(prevPalette, colorCode);
  };

  onMount(() => {
    document.documentElement.classList.add(palette);
    localStorage.setItem('palette', palette);
    setTimeout(() => {
      document.body.classList.add('transitions');
    });
  });
</script>

<div class="nav">
  <ul class="list" dir="rtl">
    {#each palettes as palette, _ (palette)}
      <button
        class={`button ${palette.split('-')[0]}`}
        on:click={() => setPalette(palette)}
        animate:flip={{ delay: 0, duration: 200, easing: cubicOut }}
      />
    {/each}
  </ul>
</div>

<style lang="postcss">
  div {
    --buttonWidth: 18px;
    display: flex;
  }

  ul {
    display: flex;
    gap: 20px;
  }

  button {
    transition: opacity 200ms ease-out;
    display: flex;
    box-sizing: content-box;
    border-radius: 100%;
    width: var(--buttonWidth);
    height: var(--buttonWidth);
    border: 3px solid var(--backgroundColor);
    box-shadow: 0 0 0 2px var(--foregroundAlphaColor);
    transition: 100ms ease-out box-shadow;

    &:hover {
      box-shadow: 0 0 0 2px var(--foregroundColor);
    }
  }

  .blue {
    background: var(--blueAccentColor);
  }

  .lille {
    background: var(--lilleAccentColor);
  }

  .green {
    background: var(--greenAccentColor);
  }
</style>
