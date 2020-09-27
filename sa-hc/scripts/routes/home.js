import setEqualHeight from '../util/heightEqualWidth';
import facilitiesDropDownFilter from '../util/FacilitiesDropDownFilter';
import foreach from '../util/Polyfills/foreach';

export default {
  init() {
    // JavaScript to be fired on the home page
    foreach()
    facilitiesDropDownFilter();
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
    window.onload = function() {
      setEqualHeight();
      setTimeout(() => {
        let anchorTag = window.location.href.split('#')[1]
        if(anchorTag && !anchorTag.includes('ios')) {
          location.href = '#' + anchorTag + '-ios';
        }
      }, 300)
    }
    //navbar-toggler custom-toggler collapsed
    $('.anchor-link').click(function() {
      if($(window).width() <= 991)
        $('#navbarText')
          .collapse('toggle');
    });
  },
};
