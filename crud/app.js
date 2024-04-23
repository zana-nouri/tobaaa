const API = "https://65bbbd4e52189914b5bcfbe6.mockapi.io/ako/person/";

// const fetchData = async () => {};

// async function result() {}

// function result() {
//   return new Promise((resolve, reject) => {
//     resolve("ok run server");
//   });
// }

// result().then((res) => {
//   console.log(res);
// });

// ______________________________________
// function result() {
//   return new Promise((resolve, reject) => {
//     resolve("ok run server");
//   });
// }

// async function run() {
//   const res = await result();
//   return res;
// }

// async function run1() {
//   const res = await run();
//   return res;
// }
// console.log(run1());
// _____________________________________________
// const fetchData = async () => {
//   const res = await fetch(API);
//   const data = await res.json();
//   console.log(data);
// };

// fetchData();
// ____________________________________
// const fetchData = async () => {
//   const res = await fetch(API);
//   const data = await res.json();
//   return data;
// };

// fetchData().then((res) => {
//   console.log(res);
// });
// _________________________________
// const fetchData = async () => {
//   const res = await fetch(API);
//   const data = await res.json();
//   return data;
// };

// async function result() {
//   const data = await fetchData();
//   console.log(data);
// }
// result();
// ___________________________________
const fetchData = async () => {
  const res = await fetch(API);
  const data = await res.json();
  const article = document.createElement("article");
  document.body.append(article);
  data.forEach((item) => {
    const section = document.createElement("section");
    article.prepend(section);
    const firstNameElement = document.createElement("h3");
    const lastNameElement = document.createElement("h3");
    const cityElement = document.createElement("h3");
    const imageElement = document.createElement("img");
    const idElement = document.createElement("h3");
    section.prepend(imageElement);
    section.append(firstNameElement);
    section.append(lastNameElement);
    section.append(cityElement);
    section.append(idElement);
    firstNameElement.textContent = `firstName : ${item.firstName}`;
    lastNameElement.textContent = `lastName : ${item.lastName}`;
    cityElement.textContent = `city : ${item.city}`;
    idElement.textContent = `id : ${item.id}`;
    imageElement.src = item.image;
  });
};

fetchData();
// ________________________________________
// #POST
// const postApi = async () => {
//   const newPerson = {
//     firstName: "zana",
//     lastName: "nouri",
//     city: "javanrud",
//     image:
//       "https://files.virgool.io/upload/users/2462068/posts/qufjpwoje1zo/rm0lm2k0lguh.jpg",
//   };
//   const res = await fetch(API, {
//     method: "post",
//     body: JSON.stringify(newPerson),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };
// postApi()
// ___________________________________________
const formPost = document.querySelector(".form-post");

formPost.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newPerson = {
    firstName: e.target.first.value,
    lastName: e.target.last.value,
    city: e.target.city.value,
    image: e.target.img.value,
  };
  const res = await fetch(API, {
    method: "post",
    body: JSON.stringify(newPerson),
    headers: {
      "Content-Type": "application/json",
    },
  });
});

// __________________________________________
const formPut = document.querySelector(".form-put");

formPut.addEventListener("submit", async (e) => {
  const APIPUT = `https://65bbbd4e52189914b5bcfbe6.mockapi.io/ako/person/${e.target.id.value}`;
  const newPerson = {
    firstName: e.target.first.value,
    lastName: e.target.last.value,
    city: e.target.city.value,
    image: e.target.img.value,
  };
  e.preventDefault();
  const res = await fetch(APIPUT, {
    method: "put",
    body: JSON.stringify(newPerson),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
});
// _________________________________________
const formDelete = document.querySelector(".form-delete");

formDelete.addEventListener("submit", async (e) => {
  const APIDELETE = `https://65bbbd4e52189914b5bcfbe6.mockapi.io/ako/person/${e.target.id.value}`;
  e.preventDefault();
  const res = await fetch(APIDELETE, {
    method: "delete",
  });
});

// _______________________________
const formRandom = document.querySelector(".form-random");

formRandom.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch(API);
  const data = await res.json();
  const random = Math.floor(Math.random() * data.length + 1);
  data.forEach((item) => {
    if (+item.id === random) {
      const sectionRandom = document.querySelector(".randomsection");
      const h1Random = document.querySelector(".h1Random");
      const section = document.createElement("section");
      sectionRandom.prepend(section);
      const firstNameElement = document.createElement("h3");
      const lastNameElement = document.createElement("h3");
      const cityElement = document.createElement("h3");
      const imageElement = document.createElement("img");
      const idElement = document.createElement("h3");
      section.prepend(imageElement);
      section.append(firstNameElement);
      section.append(lastNameElement);
      section.append(cityElement);
      section.append(idElement);
      firstNameElement.textContent = `firstName : ${item.firstName}`;
      lastNameElement.textContent = `lastName : ${item.lastName}`;
      cityElement.textContent = `city : ${item.city}`;
      idElement.textContent = `id : ${item.id}`;
      imageElement.src = item.image;
      // console.log(sectionRandom.children.h1Random);
    }
  });
});
