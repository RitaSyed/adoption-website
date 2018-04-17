const data = require('./data');
const printToDom = require('./dom');
let buttonName = '';

const addEvents = () => {
  const buttons = document.getElementsByClassName('btn-category');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener('click', removeEvent);
    buttons[i].addEventListener('click', printSelectedPet);
  }
};

const printSelectedPet = (e) => {
  const buttonNameText = e.target.innerHTML;
  const selectedPets = [];
  console.log(buttonNameText);
  data.getParsedData().forEach((pet) => {
    if (pet.type + `${'s'}` === buttonNameText.toLowerCase()) {
      selectedPets.push(pet);
      buttonName = buttonNameText;
      resetButton(e);
    }
  });
  printToDom(selectedPets);
  addEvents();
};
const resetButton = (e) => {
  const resetButton = e.target;
  resetButton.innerHTML = 'Reset';
  resetButton.classList.remove('btn-category');
  resetButton.addEventListener('click', removeEvent);
};

const removeEvent = (e) => {
  e.target.innerHTML = buttonName;
  e.target.classList.add('btn-category');
  printToDom(data.getParsedData());
  addEvents();
};

module.exports = {
  addEvents,
  // reset,
};
