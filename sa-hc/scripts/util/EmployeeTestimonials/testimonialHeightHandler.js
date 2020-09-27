function setTestimonialHeightRatio() {
  const testimonialTile = Array.from(document.getElementsByClassName('col-4'));

  testimonialTile.forEach((tile) => {
    tile.style.height = ((tile.offsetWidth - 20) * 1.1) + 'px';
  });
}

export function testimonialHeightHandler() {
  setTestimonialHeightRatio();
  window.addEventListener('resize', setTestimonialHeightRatio);
}
