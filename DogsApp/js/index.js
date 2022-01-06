//

const dogsContainer = document.querySelector(".dogsContainer");


let page = 1;

let API_URL = `https://api.thedogapi.com/v1/breeds?limit=50&page=${page}`;

async function getDogsData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  addToDom(data);
}

getDogsData(API_URL);

function addToDom(dogs) {
  dogsContainer.innerHTML = "";
  dogs.forEach((dog) => {
    // const [name, life_span, temperament, image] = dog;
    const dogBox = document.createElement("div");
    dogBox.classList.add("dogBox");
    dogBox.innerHTML = `
     
        <div class="header">
            <h1>${dog.name}</h1>
        </div>
        <img src="${dog.image.url}" class="dogImg">
        <div class="temperament">
            ${dog.temperament.slice(0, 58)} ..
        </div>
        <div class="dogLife">
            <div class="lifespan">Life Span</div>
            <div class="yearsLife">${dog.life_span}</div>
        </div>
       
        `;
    dogsContainer.appendChild(dogBox);
  });
}



