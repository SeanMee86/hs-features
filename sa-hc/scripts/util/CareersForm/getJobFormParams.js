function getJobParamsFromUrl() {
  return {
    keyword: new URLSearchParams(window.location.search).get('keyword'),
    depId: new URLSearchParams(window.location.search).get('departmentId'),
    cityName: new URLSearchParams(window.location.search).get('cityName'),
  }
}

function getJobParamsFromForm() {
  const keyword = document.getElementById('jobTitle').value;
  const department = document.getElementById('department');
  const depId = department.options[department.selectedIndex].value;
  const city = document.getElementById('cityName');
  const cityName = city.options[city.selectedIndex].value;
  return {
    keyword,
    depId,
    cityName,
  }
}

function passParamsToPaycor({keyword, depId, cityName}, iFrameSrcRef) {
  const iFrame = document.getElementById('gnewtonIframe');
  const iFrameInterval = setInterval(() => {
    if (iFrame) {
      const keyString = keyword ? '&keyword=' + keyword.replace(' ', '%20') : '';
      const departmentString = depId ? '&departmentId=' + depId : '';
      const cityString = cityName ? '&cityName=' + cityName : '';
      iFrameSrcRef += keyString + departmentString + cityString;
      iFrame.src = iFrameSrcRef;
      document.querySelector('.loader').style.display = 'none';
      clearInterval(iFrameInterval);
    }
  }, 10)
}

export function onPaycorScriptLoad(iFrameSrc) {
  passParamsToPaycor(getJobParamsFromUrl(), iFrameSrc)
}

export function onCareerFormSubmit(event, iFrameSrc) {
  event.preventDefault();
  passParamsToPaycor(getJobParamsFromForm(), iFrameSrc)
}

