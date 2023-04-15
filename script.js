const getCharacterById = async (url, id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "GET" });
  const character = await response.json();
  return character;
};
const getListCharacters = async (url) => {
  const response = await fetch(`${url}`, { method: "GET" });
  let characters = await response.json();
  return characters;
};
////////////////////////////////////////////////////////
const BASE_URL = "https://rickandmortyapi.com/api/character";
const personCard = document.querySelector(".personCard");
const overlay = document.querySelector(".overlay");
const people = document.querySelector(".people");
const pagination = document.querySelector(".pagination");
let characters = [];

const createPaginationBtn = (action) => {
  let btn = document.createElement("button");
  btn.classList = "pagination-btn";
  btn.id = action;
  btn.innerHTML = action;
  return btn;
};

async function generatePeople() {
  characters = await getListCharacters(BASE_URL);
  const next = createPaginationBtn("next");
  const prev = createPaginationBtn("prev");

  next.addEventListener("click", async () => {
    characters = await getListCharacters(characters.info.next);
    if (characters.info.prev !== null) {
      prev.disabled = false;
    }
    if (characters.info.next === null) {
      next.disabled = true;
    }
    renderPeople(characters.results);
  });

  prev.addEventListener("click", async () => {
    characters = await getListCharacters(characters.info.prev);
    if (characters.info.next !== null) {
      prev.disabled = false;
    }
    if (characters.info.prev === null) {
      prev.disabled = true;
    }
    renderPeople(characters.results);
  });

  pagination.append(prev);
  pagination.append(next);
  renderPeople(characters.results);
}

function renderPeople(people) {
  document.querySelector(".people").innerHTML = "";
  people.forEach((person) => {
    let listItem = document.createElement("div");
    listItem.classList.add("person");
    listItem.id = `${person.id}`;
    listItem.innerHTML = `${person.name}`;
    document.querySelector(".people").append(listItem);
  });
}

async function renderPopup(id) {
  let hero = await getCharacterById(BASE_URL, id);
  setTimeout(() => {
    let card = document.createElement("div");
    card.innerHTML = `
  <h3>${hero.name}</h3>
  <div class="photo">
    <img src=${hero.image} alt="">
  </div>
  <table>
  <tr>
  <tr>
  <td class="first-col">Gender:</td>
   <td>${hero.gender}</td>
  </tr>
   <tr>
  <td class="first-col">Episode:</td>
   <td>${
     hero.episode
       ? hero.episode
           .map((e) => e.replace("https://rickandmortyapi.com/api/episode", ""))
           .join(", ")
       : []
   } </td>
  </tr>
   <tr>
  <td class="first-col">status:</td>
   <td>${hero.status}</td>
  </tr>
    <tr>
  <td class="first-col">Species:</td>
   <td>${hero.species}</td>
  </tr>
  </tr>
  </table>
  <button class="close-btn">Close</button>`;
    personCard.innerHTML = card.innerHTML;
    personCard.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.querySelector(".close-btn").addEventListener("click", closePopup);
  }, 500);
}

function closePopup() {
  personCard.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.querySelector(".show").addEventListener("click", generatePeople);
people.addEventListener("click", (event) => {
  renderPopup(event.target.id);
});
overlay.addEventListener("click", closePopup);
