import {onFormSubmitClick, onPageLoad} from '../util/wpslFormSubmit';
import urlparams from '../util/Polyfills/urlparams';

export default {
  init() {
    urlparams(window);

    window.onload = function() {
      onPageLoad();

      const formSubmitBtn = document
          .getElementById('find-facility-form')
          .querySelector('.btn');

      formSubmitBtn.addEventListener('click', onFormSubmitClick);
    }
  },
};
