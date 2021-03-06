/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

declare namespace svelte.JSX {
  interface HTMLProps<HTMLDivElement> {
    outsideClick?: (e: CustomEvent) => void;
  }
}
