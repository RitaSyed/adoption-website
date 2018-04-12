// Makes an XHR call
const xhrPets = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};
module.exports = xhrPets;
