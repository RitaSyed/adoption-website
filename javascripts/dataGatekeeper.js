// What happens when the call is made
const xhrPets = require('./xhr');
const printToDom = require('./dom');
const data = require('./data');
const domEvents = require('./events').addEvents;

const parsedPetsData = function () {
  const parsedpetsArray = JSON.parse(this.responseText).pets;
  printToDom(parsedpetsArray);
  domEvents();
  data.setParsedData(parsedpetsArray);
  console.log('Array', parsedpetsArray);
};
const executeThisCodeIfXHRFails = function () {
  console.error('It is broke.');
};

const initializer = () => {
  xhrPets(parsedPetsData, executeThisCodeIfXHRFails);
};

module.exports = {
  initializer,
};
