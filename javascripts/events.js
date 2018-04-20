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
  changeBackgroundForPetType();
};
const resetButton = (e) => {
  const resetButton = e.target;
  resetButton.style.border = 'thick solid red';
  resetButton.innerHTML = 'Reset';
  resetButton.classList.remove('btn-category');
  resetButton.addEventListener('click', removeEvent);
};

const removeEvent = (e) => {
  e.target.innerHTML = buttonName;
  e.target.classList.add('btn-category');
  printToDom(data.getParsedData());
  addEvents();
  e.target.style.border = 'none';
  changeBackgroundForPetType();
};

const changeBackgroundForPetType = () => {
  const petType = document.getElementsByClassName('pet-type');
  for (let i = 0; i < petType.length; i++) {
    // console.log
    if (petType[i].textContent === 'dino') {
      petType[i].style.backgroundColor = '#f0ad4e';
    } else if (petType[i].textContent === 'cat') {
      petType[i].style.backgroundColor = '#5bc0de';
    } else if (petType[i].textContent === 'dog') {
      petType[i].style.backgroundColor = '#5cb85c';
    }
  }
};

module.exports = {
  addEvents,
  changeBackgroundForPetType,
};
