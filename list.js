
/*jshint esversion: 6 */

let countries;
const countriesList=document.getElementById("inputs");

fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => intitialize(data))
.catch(err => console.log("Error",err));
function intitialize(newData)
{
countries=newData;
let options="";
countries.forEach(country =>  options+=`<option value="${country.name}">${country
.name}</option>`);
countriesList.innerHTML=options;
}
function onInput() {
    var val = document.getElementById("myInput").value;
    var opts = document.getElementById('inputs').childNodes;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        displayCountryInfo(opts[i].value);
        break;
      }
    }
  }

function displayCountryInfo(countryAlpha3C){
  const countryData = countries.find(country => country.name === countryAlpha3C);
  document.querySelector("#flag-cont img").src = countryData.flag;
  document.querySelector("#flag-cont img").alt = `Flag of ${countryData.name} not available`;
   localStorage.setItem('x',JSON.stringify(countryData));
  }
