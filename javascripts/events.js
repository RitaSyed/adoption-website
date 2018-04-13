const data = require('./data');
// const dom = require('./dom');
const buttons = document.getElementsByClassName('btn');

const addEvents = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonInitializer);
  }
};
const whichButton = (e) => {
  const buttonName = e.target.innerHTML.toLowerCase();
  console.log(buttonName);
};
console.log(data.getPetsArray);
const buttonInitializer = (e) => {
  whichButton(e);
  data.getPetsArray();

  // dom.displaySelectedPetType(data.getPetsArray);
};

module.exports = {
  addEvents,
  buttonInitializer,
  whichButton,
};
