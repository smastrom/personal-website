export const setNegativeTabIndex = (
  parentTag: string,
  childTag: string,
  actionType: 'set' | 'remove'
) => {
  const elements = (document.querySelector(parentTag) as HTMLElement).querySelectorAll(
    childTag
  );
  if (actionType === 'set') {
    elements.forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
  } else {
    elements.forEach((element) => {
      element.removeAttribute('tabindex');
    });
  }
};
