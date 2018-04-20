// const domEvents = require('./events').addEvents;

const outputDiv = document.getElementById('card-holder');

const domString = (petsArray) => {
  let strang = '';
  strang += `<div class="row">`;
  petsArray.forEach((pet) => {
    strang +=  `<div class="pets-cards col-sm-6 col-md-4">`;
    strang +=    `<div class="thumbnail">`;
    strang +=      `<h2 class="text-center card-title">${pet.name}</h2>`;
    strang +=      `<img src="${pet.imageUrl}" alt="...">`;
    strang +=      `<div class="caption">`;
    strang +=        `<h3 class="text-center color-title">${pet.color}</h3>`;
    strang +=        `<p class="skills-info">${pet.specialSkill}</p>`;
    strang +=        `<p class="text-center pet-type">${pet.type}</p>`;
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
