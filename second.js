/*jshint esversion: 6 */

function getdetails(){
  var countryData = JSON.parse(localStorage.getItem('x'));
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("calling-code").innerHTML = `+${countryData.callingCodes[0]}`;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString();
  document.getElementById("currencies").innerHTML = countryData.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(", ");
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("subregion").innerHTML = countryData.subregion;
}
function goBack(){

  window.history.back();
}
