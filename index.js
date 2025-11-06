//RESUELVE TUS EJERCICIOS AQUI
const allBreeds = "https://dog.ceo/api/breeds/list/all";
const randomDog = "https://dog.ceo/api/breeds/image/random";
const komodor = "https://dog.ceo/api/breed/komondor/images";
const urlBreed = "https://dog.ceo/api/breed";
const urlUsers = "https://api.github.com/users";

// Conexion
const conexion = async (url) => {
  try {
    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw "Error";
    }
  } catch (error) {
    console.log("Error");
  }
};

// 1.
const getAllBreeds = async () => {
  const breeds = await conexion(allBreeds);
  return Object.keys(breeds.message);
};

// 2.
const getRandomDog = async () => {
  const imgDog = await conexion(randomDog);
  return JSON.stringify(imgDog);
};

// 3.
const getAllImagesByBreed = async () => {
  const imgKomodor = await conexion(komodor);
  return JSON.stringify(imgKomodor);
};

// 4.
const getAllImagesByBreed2 = async (breed) => {
  const imgBreed = await conexion(`${urlBreed}/${breed}/images`);
  return JSON.stringify(imgBreed);
};

// 5.
const getGitHubUserProfile = async (username) => {
  const userFind = await conexion(`${urlUsers}/${username}`);
  return userFind;
};

// 6.
const printGithubUserProfile = async (username) => {
  const printUser = await conexion(`${urlUsers}/${username}`);
  const name = printUser.name;
  const img = printUser.avatar_url;

  return { img, name };
};

// 7.
const getAndPrintGitHubUserProfile = async (username) => {
  const printUser = await conexion(`${urlUsers}/${username}`);
  const name = printUser.name;
  const img = printUser.avatar_url;
  const repos = printUser.public_repos;
  const pintar = `
                <section>
                    <img src="${img}" alt="${name}">
                    <h1>${name}</h1>
                    <p>Public repos: ${repos}</p>
                </section>
  `;

  return pintar;
};
