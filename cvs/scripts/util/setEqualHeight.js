export function setEqualHeight(wantedElement, targetElement) {
  const wantedEl = document.querySelector(wantedElement);
  const wantedElHeight = window.getComputedStyle(wantedEl, null).getPropertyValue('height');
  const targetEl = document.querySelector(targetElement);
  if(window.innerWidth > 850) {
    targetEl.style.height = wantedElHeight;
  }else{
    targetEl.style.height = '';
  }
}
