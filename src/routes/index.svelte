<script context="module" lang="ts">
  import { onMount } from 'svelte';
  import type { Load } from '@sveltejs/kit';

  export const router = false;

  type SectionsBlock = {
    title: string;
    text: string;
  };

  type HomeContentModel = {
    title: string;
    sections: SectionsBlock[];
  };

  type DatoResponse = {
    data: {
      home: HomeContentModel;
    };
  };

  export const load: Load = async ({ fetch }) => {
    try {
      const response = await fetch('https://graphql.datocms.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_DATOCMS_READONLY_TOKEN}`
        },
        body: JSON.stringify({
          query: `
              {
                home {
                  title(markdown: true)
                  sections {
                    title
                    text(markdown: true)
                  }
                }
              }`
        })
      });

      const {
        data: { home }
      }: DatoResponse = await response.json();

      return {
        props: { home }
      };
    } catch (error) {
      console.log(error);
      return {
        props: undefined
      };
    }
  };
</script>

<script lang="ts">
  export let home: HomeContentModel;

  onMount(() => {
    const articleBody = document.querySelector('article');

    articleBody?.querySelectorAll('a').forEach((anchor) => {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noreferrer');
    });
  });
</script>

<article>
  {@html home.title}

  {#each home.sections as { title, text }}
    <section>
      <h2>{title}</h2>
      {@html text}
    </section>
  {/each}
</article>

<style lang="postcss">
  article {
    overflow: hidden;
    position: relative;
  }

  article :global(h1) {
    margin-top: var(--headerHeight);
    padding: 3rem 0;
    letter-spacing: -0.025ch;
    color: var(--headingsColor);
    font-size: responsive 2.25rem 11.25rem;
    font-range: 768px 3840px;
    font-weight: 800;
    line-height: 1.3;

    & :global(strong) {
      color: var(--accentColor);
    }

    @media (min-width: 769px) {
      max-width: var(--fiveCols);
      padding: 7% 0 7% 0;
    }
  }

  article :global(h2) {
    letter-spacing: -0.025ch;
    font-weight: 700;
    font-size: responsive 1.375rem 4.5rem;
    font-range: 768px 3840px;
    color: var(--accentColor);
  }

  article :global(p) {
    margin: 1rem 0 1.5rem 0;
    color: var(--foregroundColor);
    font-size: responsive 1.125rem 2.25rem;
    letter-spacing: -0.015ch;
    font-range: 768px 3840px;
    line-height: 1.55;
    font-weight: 400;

    @media (min-width: 769px) {
      margin: 1% 0 2% 0;
    }
  }

  article :global(section) {
    & :global(p:last-of-type) {
      margin: 1rem 0 3rem 0;

      @media (min-width: 769px) {
        margin: 1% 0 4.5% 0;
      }
    }
  }

  article :global(h2),
  article :global(p) {
    @media (min-width: 769px) {
      max-width: var(--threeCols);
    }
  }

  article :global(a) {
    color: var(--foregroundColor);
    position: relative;
    display: inline-flex;
    text-decoration: underline;

    &::after {
      content: '';
      background-color: var(--accentColor);
      bottom: 0.1em;
      left: -0.1em;
      right: -0.1em;
      opacity: 0.25;
      position: absolute;
      height: 0.5em;
      border-radius: 0.2em;
      transition: height var(--easing);
      z-index: -1;
    }

    &:hover {
      &::after {
        height: 1.2em;
      }
    }
  }
</style>
