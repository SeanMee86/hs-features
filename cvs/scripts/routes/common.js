import Resizer from '../util/resizer';
import updatePostGridLinks from '../util/updatePostLink';
import InitImageSlider from '../util/ImageSlider';
import TestimonialInjector from '../util/testimonialRandomizer';


export default {
  init() {
    // JavaScript to be fired on all pages

  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    /* eslint-disable */
    const sizesArray = [
      {targetId: 'resizerNormal', sizeValue: 1},
      {targetId: 'resizerLarge', sizeValue: 1.1},
      {targetId: 'resizerXLarge', sizeValue: 1.2}
    ];

    Resizer(sizesArray);
    updatePostGridLinks('uagb-text-link', 'vein-problems');
    TestimonialInjector.injectTestimonial();

    new SmoothScroll('a[href*="#"]');
    new InitImageSlider(
      'ba-img-bottom',
      'fa-arrows-v',
      'before-after-img-container'
    );
  },
};
