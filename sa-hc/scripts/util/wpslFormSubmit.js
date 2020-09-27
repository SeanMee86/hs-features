function getFormValues() {
  const location = document.getElementById('wpsl-search-input-pheader').value;
  const srchRadius = document.getElementById('wpsl-radius-dropdown-pheader');
  const srchRadiusValue = srchRadius.options[srchRadius.selectedIndex].value;
  const srchResults = document.getElementById('wpsl-results-dropdown-pheader');
  const srchResultsValue = srchResults.options[srchResults.selectedIndex].value;
  return {
    location,
    srchRadiusValue,
    srchResultsValue,
  }
}

function getUrlParamValues() {
  return {
    location: new URLSearchParams(window.location.search).get('wpsl-search-input'),
    srchRadiusValue: new URLSearchParams(window.location.search).get('wpsl-radius'),
    srchResultsValue: new URLSearchParams(window.location.search).get('wpsl-results'),
  }
}

function passValuesToWPSL({location, srchRadiusValue, srchResultsValue}) {
  const wpslCheckInterval = setInterval(() => {
    if(document.getElementById('wpsl-search-input')) {
      document.getElementById('wpsl-search-input').value = location;

      // On mobile wpsl does not have the "data-value" attribute
      // so we have to instead set the value of the "select" element
      if (document.getElementById('wpsl-radius')
        .querySelector('.wpsl-selected-item'))
        document.getElementById('wpsl-radius')
          .querySelector('.wpsl-selected-item')
          .setAttribute('data-value', srchRadiusValue);
      else
        document.getElementById('wpsl-radius')
          .querySelector('#wpsl-radius-dropdown').value = srchRadiusValue;

      if (document.getElementById('wpsl-results')
        .querySelector('.wpsl-selected-item'))
        document.getElementById('wpsl-results')
          .querySelector('.wpsl-selected-item')
          .setAttribute('data-value', srchResultsValue);
      else
        document.getElementById('wpsl-results')
          .querySelector('#wpsl-results-dropdown').value = srchResultsValue;

      document.getElementById('wpsl-search-btn').click();
      clearInterval(wpslCheckInterval);
    }
  }, 100);
}

export function onFormSubmitClick(event) {
  event.preventDefault();
  passValuesToWPSL(getFormValues());
}

export function onPageLoad() {
  passValuesToWPSL(getUrlParamValues());
}
