<script context="module">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';

  import shuffle from 'lodash.shuffle';
  import Check from './Check.svelte';
</script>

<script lang="ts">
  let isSelecting = false;
  let hasJustSelected = false;
  let hasJustConfirmed = false;

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
    hasJustSelected = true;
    hasJustConfirmed = true;
    const prevPalette = palette;

    palette = colorCode;
    palettes = sortPalette(colorCode);

    localStorage.setItem('palette', colorCode);
    document.documentElement.classList.replace(prevPalette, colorCode);

    setTimeout(() => {
      isSelecting = false;
      hasJustSelected = false;
    }, 400);

    setTimeout(() => {
      hasJustConfirmed = false;
    }, 1000);
  };

  const appendStyles = (childIndex: number) => {
    if (hasJustSelected) {
      if (childIndex === 0) {
        return 'opacity: 1;';
      }
      return 'opacity: 0.25;';
    }
    if (childIndex === 0) {
      return 'opacity: 0.25; pointer-events: none;';
    }
    return 'opacity: 1;';
  };

  onMount(() => {
    document.documentElement.classList.add(palette);
    localStorage.setItem('palette', palette);
    setTimeout(() => {
      document.body.classList.add('transitions');
    });
  });
</script>

<div dir="rtl" style={`--colorChoices: ${colors.length}`}>
  {#if !isSelecting}
    <button
      style={`pointer-events: ${hasJustConfirmed ? 'none' : 'all'}`}
      class={`nav-button ${palette.split('-')[0]}`}
      on:click={() => (isSelecting = true)}
    >
      {#if hasJustConfirmed}
        <div out:fade={{ duration: 150 }}>
          <Check />
        </div>
      {/if}
    </button>
  {/if}

  {#if isSelecting}
    {#each palettes as palette, index (palette)}
      <button
        style={appendStyles(index)}
        class={`${palette.split('-')[0]}`}
        on:click={() => setPalette(palette)}
        in:fly={{ x: 40, duration: 400 }}
        out:fly={{ x: 100, duration: 400 }}
        animate:flip={{ duration: 200, easing: cubicOut }}
      >
        {#if index === 0}
          <Check />
        {/if}
      </button>
    {/each}
  {/if}
</div>

<style lang="postcss">
  div {
    --buttonWidth: 18px;
    --borderWidth: 3px;
    --outlineWidth: 2px;
    --edges: 2;
    --spacing: 20px;
    --multiplier: calc(var(--colorChoices) - 1);

    --allBorders: calc(var(--borderWidth)) * var(--multiplier);
    --allOutlines: calc(var(--outlineWidth)) * var(--multiplier);
    --allSpacings: calc(var(--spacing) * var(--multiplier));
    --outlineOverlap: calc(var(--outlineWidth) * var(--edges));

    --itemSize: calc(var(--buttonWidth) + var(--allBorders));
    --itemSizes: calc(var(--itemSize) * var(--colorChoices));

    padding-right: var(--outlineWidth);
    width: calc(var(--itemSizes) + var(--allSpacings) + var(--outlineOverlap));
    height: calc(var(--itemSize) + var(--allOutlines));
    gap: var(--spacing);
    display: flex;
    overflow: hidden;
    align-items: center;
  }

  .nav-button {
    z-index: 20;
  }

  button {
    position: relative;
    transition: opacity 200ms ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    aspect-ratio: 1;
    box-sizing: content-box;
    width: var(--buttonWidth);
    height: var(--buttonWidth);
    border: var(--borderWidth) solid var(--backgroundColor);
    outline: var(--outlineWidth) solid var(--foregroundAlphaColor);
    transition: outline-color 100ms ease-out, opacity 100ms ease-out;

    &:hover {
      outline: var(--outlineWidth) solid var(--foregroundColor);
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
