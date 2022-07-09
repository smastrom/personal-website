<script lang="ts">
  import { fly } from 'svelte/transition';

  export let fillColor: string | undefined;
  export let elemWidth: number | undefined;
</script>

<svg
  width={elemWidth}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 27 27"
  in:fly={{ x: 15, duration: 150 }}
>
  <path
    stroke-width="2"
    stroke-linejoin="round"
    stroke-linecap="round"
    stroke={fillColor}
    fill="none"
    d="m26.001,14.626a12.527,12.527 0 1 1 -13.626,-13.626a9.743,9.743 0 0 0 13.626,13.626z"
  />
</svg>
