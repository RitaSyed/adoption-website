// What happens when the call is made
const xhrPets = require('./pets');
const printToDom = require('./dom');

let petsArray = [];
const parsedPetsData = function () {
  petsArray = JSON.parse(this.responseText).pets;
  printToDom(petsArray);
  // getPetsArray(petsArray);
  // console.log('Array', petsArray);
};
const executeThisCodeIfXHRFails = function () {
  console.error('It is broke.');
};
const initializer = () => {
  xhrPets(parsedPetsData, executeThisCodeIfXHRFails);
};
// console.log(getPetsArray);
module.exports = {
  initializer,
  // getPetsArray,
};
