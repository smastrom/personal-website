<script context="module">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { cubicOut } from 'svelte/easing';

  import shuffle from 'lodash.shuffle';

  import { outsideClick } from '../actions/outsideClick';
  import Check from './CheckIcon.svelte';
</script>

<script lang="ts">
  let isSelecting = false;
  let hasJustSelected = false;
  let hasJustConfirmed = false;

  let audio: HTMLAudioElement;

  onMount(() => {
    audio = new Audio('/swoosh.mp3');
  });

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
    audio.play();
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

<div
  class="nav"
  role="group"
  dir="rtl"
  style={`--colorChoices: ${colors.length}; pointer-events: ${
    hasJustConfirmed ? 'none' : 'all'
  }`}
  use:outsideClick
  on:outsideClick={() => (isSelecting = false)}
>
  {#if !isSelecting}
    <button
      type="button"
      class="nav-button"
      on:click={() => (isSelecting = true)}
      aria-label="Switch palette"
    >
      <div class={`button-inner ${palette.split('-')[0]}`}>
        {#if hasJustConfirmed}
          <span out:fade={{ duration: 150 }}>
            <Check />
          </span>
        {/if}
      </div>
    </button>
  {/if}

  {#if isSelecting}
    {#each palettes as palette, index (palette)}
      <button
        type="button"
        style={appendStyles(index)}
        on:click={() => setPalette(palette)}
        in:fly={{ x: 40, duration: 400 }}
        out:fly={{ x: 100, duration: 400 }}
        animate:flip={{ duration: 200, easing: cubicOut }}
        aria-label={`Switch to ${palette.replace('-', ' ')}`}
        aria-disabled={index === 0}
        tabindex={index === 0 ? '-1' : '0'}
      >
        <div class={`button-inner ${palette.split('-')[0]}`}>
          {#if index === 0}
            <Check />
          {/if}
        </div>
      </button>
    {/each}
  {/if}
</div>

<style lang="postcss">
  .nav {
    --buttonWidth: 18px;
    --borderWidth: 3px;
    --outlineWidth: 2px;
    --padding: 10px;

    --edges: 2;
    --multiplier: calc(var(--colorChoices) - 1);
    --spacing: calc(var(--padding) * 2);

    --allBorders: calc(var(--borderWidth)) * var(--multiplier);
    --allOutlines: calc(var(--outlineWidth)) * var(--multiplier);
    --allSpacings: calc(var(--spacing) * calc(var(--colorChoices) - 1));
    --outlineOverlap: calc(var(--outlineWidth) * var(--edges));

    --itemSize: calc(var(--buttonWidth) + var(--allBorders));
    --itemSizes: calc(var(--itemSize) * var(--colorChoices));

    width: calc(var(--itemSizes) + var(--allSpacings) + var(--outlineOverlap));
    height: calc(var(--itemSize) + var(--allOutlines) + var(--spacing));
    padding-right: var(--outlineWidth);
    display: flex;
    overflow: hidden;
    align-items: center;
  }

  button {
    border: none;
    padding: var(--padding);

    &:first-of-type {
      padding: var(--padding) 0 var(--padding) var(--padding);
    }
  }

  .nav-button {
    z-index: 20;
  }

  .button-inner {
    position: relative;
    transition: opacity var(--easing);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    aspect-ratio: 1;

    box-sizing: content-box;
    width: var(--buttonWidth);
    height: var(--buttonWidth);
    border: var(--borderWidth) solid var(--backgroundColor);
    box-shadow: 0 0 0 var(--outlineWidth) var(--foregroundAlphaColor);
    transition: box-shadow 100ms ease-out, opacity 100ms ease-out;

    &:hover {
      box-shadow: 0 0 0 var(--outlineWidth) var(--foregroundColor);
    }

    & span {
      display: flex;
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
