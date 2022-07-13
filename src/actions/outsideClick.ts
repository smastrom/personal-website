export const outsideClick = (node: HTMLElement) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (!node.contains(event.target as HTMLElement)) {
      node.dispatchEvent(new CustomEvent('outsideClick'));
    }
  };

  document.addEventListener('click', handleOutsideClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleOutsideClick, true);
    }
  };
};
