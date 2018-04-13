// const data = require('./data');
const buttons = document.getElementsByClassName('btn');

const addEvents = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonInitializer);
  }
};

const buttonInitializer = (e) => {
  whichButton();
};

const whichButton = (e) => {
  const buttonName = e.target.innerHTML.toLowerCase();
  console.log(buttonName);
};

module.exports = {
  addEvents,
  buttonInitializer,
};
