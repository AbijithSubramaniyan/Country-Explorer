// fetch("https://restcountries.eu/rest/v2/all")
// .then(function(res)
// {
//   // console.log(res.json());
//   return res.json();
// })
// .then(function(data){
// // console.log(data);
// intitialize(data);
// })
// .catch(function(err){
// console.log("Error",err);
// });
/*jshint esversion: 6 */

let countries;
const countriesList=document.getElementById("countries");

countriesList.addEventListener("change",event => displayCountryInfo(event.target.value));


fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => intitialize(data))
.catch(err => console.log("Error",err));
function intitialize(newData)
{
countries=newData;
let options="";
// for(let i=0;i<countries.length;i++)
// {
// options+=`<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
// }
countries.forEach(country =>  options+=`<option value="${country.alpha3Code}">${country
.name}</option>`);
countriesList.innerHTML=options;
displayCountryInfo("AFG");
}
function displayCountryInfo(countryAlpha3C){
  const countryData = countries.find(country => country.alpha3Code === countryAlpha3C);
  // console.log(countryData);
  localStorage.setItem('x',JSON.stringify(countryData));
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name} not available`;
  
  }
