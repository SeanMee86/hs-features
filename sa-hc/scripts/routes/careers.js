import asyncScriptLoader from '../util/CareersForm/asyncScriptLoader';
import { onCareerFormSubmit, onPaycorScriptLoad } from '../util/CareersForm/getJobFormParams';
import facilitiesDropDownFilter from '../util/FacilitiesDropDownFilter';
import urlparams from '../util/Polyfills/urlparams';
import arrayFrom from '../util/Polyfills/arrayFrom';

export default {
  finalize() {
    urlparams(window);
    arrayFrom();

    let iFrameSrcReference;
    asyncScriptLoader(
      'gnewtonjs',
      '//newton.newtonsoftware.com/career/iframe.action?clientId=8a3218144d086a4d014d97c801f45e0e',
      'paycorScriptContainer',
      function() {
        const iFrameCheckInterval = setInterval(() => {
          const iFrame = document.getElementById('gnewtonIframe')
          if(iFrame) {
            iFrameSrcReference = iFrame.src;
            onPaycorScriptLoad(iFrameSrcReference);
            clearInterval(iFrameCheckInterval)
          }
        }, 10);
      }
    )

    const formSubmitBtn = document
        .getElementById('hero-form')
        .querySelector('.btn');

    formSubmitBtn.addEventListener('click', (e) => {
      onCareerFormSubmit(e, iFrameSrcReference);
      window.location.href = '#gnewtonIframeAnchor';
    });
    facilitiesDropDownFilter();
  },
};
