// const domEvents = require('./events').addEvents;

const outputDiv = document.getElementById('card-holder');

const domString = (petsArray) => {
  let strang = '';
  strang += `<div class="row">`;
  petsArray.forEach((pet) => {
    strang +=  `<div class="pets-cards col-sm-6 col-md-4">`;
    strang +=    `<div class="thumbnail">`;
    strang +=      `<h2 class="dino">${pet.name}</h2>`;
    strang +=      `<img src="${pet.imageUrl}" alt="...">`;
    strang +=      `<div class="caption">`;
    strang +=        `<h3>${pet.color}</h3>`;
    strang +=        `<p>${pet.specialSkill}</p>`;
    strang +=        `<p>${pet.type}</p>`;
    strang +=      `</div>`;
    strang +=    `</div>`;
    strang +=  `</div>`;
  });
  strang +=  `</div>`;
  return strang;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = domString(petsArray);
};

module.exports = printToDom;
