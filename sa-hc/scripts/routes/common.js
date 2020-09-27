import addActiveClass from '../util/addActiveClass';
import arrayFrom from '../util/Polyfills/arrayFrom';
// import 'jarallax/src/jarallax.js';

export default {
  init() {
    // JavaScript to be fired on all pages
    arrayFrom();
    addActiveClass();
    // var isIe11 = !!window.MSInputMethodContext && !!document.documentMode;
    // if(!isIe11) {
    //   $(document).ready(function () {
    //     if ($(window).width() < 768) {
    //       $('.jarallax').jarallax({
    //         speed: 0.6,
    //         imgPosition: '70% 0',
    //       });
    //     } else {
    //       $('.jarallax').jarallax({
    //         speed: 0.6,
    //       });
    //     }
    //   });
    // }
  },
};
