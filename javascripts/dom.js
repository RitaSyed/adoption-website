const domEvents = require('./events');

const outputDiv = document.getElementById('card-holder');

const domString = (petsArray) => {
  let strang = '';
  strang += `<div class="row">`;
  petsArray.forEach((pet) => {
    strang +=  `<div class="col-sm-6 col-md-4">`;
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

const displaySelectedPetType = (getPetsArray) => {
  let strang = '';
  strang += `<div class="row">`;
  getPetsArray.forEach(pet => {
    if (getPetsArray.type === domEvents.whichButton) {
      strang +=  `<div class="col-sm-6 col-md-4">`;
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
    }
  });
  strang +=  `</div>`;
  return strang;
};

const printToDom = (petsArray) => {
  outputDiv.innerHTML = domString(petsArray);
  domEvents.addEvents();
};

module.exports = {
  printToDom,
  displaySelectedPetType,
};
