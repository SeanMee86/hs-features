export default function() {
  const citiesDropDown = document.getElementById('cityName');
  const facilityDropDown = document.getElementById('department');
  citiesDropDown.addEventListener('change', function(e){
    switch(e.target.value){
      case 'Aiken':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f3409c44065e">Anchor Rehabilitation and Healthcare Center of Aiken</option>
          `
        break;
      case 'Anderson':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f343d2ce0745">Linley Park Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Easley':
        facilityDropDown.innerHTML = `
            <option class="first-selection" value="">All Locations</option>
            <option value="8a78844954e116510154f34812690a3f">Capstone Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f343185a071a">Fleetwood Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Edgefield':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f3418b7406a5">The Ridge Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Greenville':
        facilityDropDown.innerHTML = `
            <option class="first-selection" value="">All Locations</option>
            <option value="8a78844954e116510154f347101f0948">Patewood Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f3442fc20773">Poinsett Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Greer':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f3449dcd078b">Greer Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Iva':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f341e45106a8">Iva Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Marietta':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f344f7b407e5">River Falls Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Moultrie':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f35a3f501499">Cobblestone Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'McCormick':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f345a9010805">McCormick Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Pickens':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f34761f7095c">Manna Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Piedmont':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f342369706b5">Southern Oaks Rehabilitation and Healthcare Center</option>
          `
        break;
      case 'Simpsonville':
        facilityDropDown.innerHTML = `
            <option value="8a78844954e116510154f341275c067b">Simpsonville Rehabilitation and Healthcare Center</option>
          `
        break;
      default:
        facilityDropDown.innerHTML = `
            <option class="first-selection" value="">All Locations</option>
            <option value="8a78844954e116510154f3409c44065e">Anchor Rehabilitation and Healthcare Center of Aiken</option>
            <option value="8a78844954e116510154f34812690a3f">Capstone Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f35a3f501499">Cobblestone Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f343185a071a">Fleetwood Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f3449dcd078b">Greer Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f341e45106a8">Iva Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f343d2ce0745">Linley Park Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f34761f7095c">Manna Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f345a9010805">McCormick Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f347101f0948">Patewood Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f3442fc20773">Poinsett Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f344f7b407e5">River Falls Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f341275c067b">Simpsonville Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f342369706b5">Southern Oaks Rehabilitation and Healthcare Center</option>
            <option value="8a78844954e116510154f3418b7406a5">The Ridge Rehabilitation and Healthcare Center</option>
        `
    }
  });
}
