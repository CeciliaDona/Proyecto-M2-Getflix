const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.container__slider')
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide();
  }
  
  setInterval(nextSlide, 10000);
  
  // slider.addEventListener('mouseenter', () => {
  //   clearInterval(slideInterval);
  // });
  
  // slider.addEventListener('mouseleave', () => {
  // slideInterval = setInterval(nextSlide, 5000);
  // });
  
  document.querySelector('#next').addEventListener('click', nextSlide);
  document.querySelector('#previous').addEventListener('click', prevSlide);

////////////////////////////////////////////////////////////////////////////

import { films } from "../js/data/films.js";

const templateCategories = document.querySelector("#template-categories");
const fragment = document.createDocumentFragment();

// JUST ADDED
const justAddedContainer = document.querySelector(".container__just-added");

const justAddedSection = films.filter(
  (item) =>
    item.section === "Just added" ||
    item.sectionTwo === "Just added" ||
    item.sectionThree === "Just added"
);

const showJustAdded = () => {
  justAddedSection.forEach((item) => {
    const clone = templateCategories.content.cloneNode(true);

    clone.querySelector(".img-films").src = item.img;
    clone.querySelector(".img-films").alt = item.alt;
    clone.querySelector(".movie-title").textContent = item.title;
    clone.querySelector(".btn-add-list").dataset.film = item.title;
    //clone.querySelector(".video").src = item.trailer;
    clone.querySelector(".btn-see-more").dataset.film = item.title;

    fragment.appendChild(clone);
  });

  justAddedContainer.appendChild(fragment);
};
showJustAdded();

// TRENDS
const trendsContainer = document.querySelector(".container__trends");

const trendsSection = films.filter(
  (item) =>
    item.section === "Trends" ||
    item.sectionTwo === "Trends" ||
    item.sectionThree === "Trends"
);

const showTrends = () => {
  trendsSection.forEach((item) => {
    const clone = templateCategories.content.cloneNode(true);

    clone.querySelector(".img-films").src = item.img;
    clone.querySelector(".img-films").alt = item.alt;
    clone.querySelector(".movie-title").textContent = item.title;
    clone.querySelector(".btn-add-list").dataset.film = item.title;
    clone.querySelector(".btn-see-more").dataset.film = item.title;

    fragment.appendChild(clone);
  });

  trendsContainer.appendChild(fragment);
};
showTrends();

// CONTINUE WATCHING
const continueContainer = document.querySelector(".container__continue");

const continueSection = films.filter(
  (item) =>
    item.section === "Continue watching" ||
    item.sectionTwo === "Continue watching" ||
    item.sectionThree === "Continue watching"
);

const showContinueWatching = () => {
  continueSection.forEach((item) => {
    const clone = templateCategories.content.cloneNode(true);

    clone.querySelector(".img-films").src = item.img;
    clone.querySelector(".img-films").alt = item.alt;
    clone.querySelector(".movie-title").textContent = item.title;
    clone.querySelector(".btn-add-list").dataset.film = item.title;
    clone.querySelector(".btn-see-more").dataset.film = item.title;

    fragment.appendChild(clone);
  });

  continueContainer.appendChild(fragment);
};
showContinueWatching();

// TOP TEN
const topTenContainer = document.querySelector(".container__top-10");
const templateTopTen = document.querySelector("#template-top-ten");

const topTenSection = films.filter(
  (item) =>
    item.section === "Top ten" ||
    item.sectionTwo === "Top ten" ||
    item.sectionThree === "Top ten"
);

const showTopTen = () => {
  topTenSection.forEach((item) => {
    const clone = templateTopTen.content.cloneNode(true);

    clone.querySelector(".img-films").src = item.img;
    clone.querySelector(".img-films").alt = item.alt;
    clone.querySelector(".movie-number").textContent = item.top;
    clone.querySelector(".movie-title").textContent = item.title;
    clone.querySelector(".btn-add-list").dataset.film = item.title;
    clone.querySelector(".btn-see-more").dataset.film = item.title;

    fragment.appendChild(clone);
  });

  topTenContainer.appendChild(fragment);
};
showTopTen();

////////////////////////////////////////////////////////////////////////////

// MODAL
const templateModal = document.querySelector(".template-modal");
const containerModal = document.querySelector(".container__modal-template");

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-see-more")) {
    showDataModal(e);
  }
});

//const film = films.find((item) => item.id === films.dataset.id);

const showDataModal = (e) => {
  containerModal.textContent = "";
  films.forEach((item) => {
    if (item.title === e.target.dataset.film) {
      const clone = templateModal.content.cloneNode(true);
      clone.querySelector(".modal-title").textContent = item.title;
      clone.querySelector(".modal-video").src = item.srcTrailer;
      clone.querySelector(".synopsis-text").textContent = item.synopsis;
      clone.querySelector(".year").textContent = item.year;
      clone.querySelector(".genre").textContent = item.Genres;

      fragment.appendChild(clone);
    }
  });
  containerModal.appendChild(fragment);
};

//MY FAVORITE LIST (NO FUNCIONA, CORREGIR)
const containerMyList = document.querySelector(".container__fav-list");
const templateFavoriteList = document.querySelector("#template-fav-list");

const myListSection = JSON.parse(localStorage.getItem("favorites")) || [];

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-add-list")) {
    if (films.some((item) => item.title === e.target.dataset.film)) {
      addToFavList(e);
    }
  }
});

const addToFavList = (e) => {
  const filmName = e.target.dataset.film; // Cargo el nombre de la peli
  const selectFilm = films.find((item) => item.title === filmName); // Obtengo los datos de la pelicula en base al "filename" (nombre de la peli obtenida en el dataset)

  const film = {
    // Cargo datos basicos.
    title: selectFilm.title,
    id: selectFilm.id,
  };

  if (!myListSection.includes(film.title)) {
    // Valido si existe ya en mi favs, si no existe lo agrego
    myListSection.push(film.title); //  cargo la peli en la lista myListSection
    localStorage.setItem("favorites", JSON.stringify(myListSection)); //actualizo la lista en el
  }

  showFilm();
};

const showFilm = () => {
  const favMovies = JSON.parse(localStorage.getItem("favorites")); // obtengo la lista de favoritos desde el localstorage (getitem)

  if (favMovies) {
    const elemento = document.querySelector(".no-added-movies-msg");
    elemento.style.display = "none";
  }

  containerMyList.textContent = "";
  favMovies.forEach((item) => {
    const film = films.find((e) => e.title === item); // busco los datos de la peli

    const clone = templateFavoriteList.content.cloneNode(true);
    clone.querySelector(".btn-add-list").dataset.id = film.id;
    clone.querySelector(".movie-title").textContent = film.title;
    clone.querySelector(".img-films").src = film.img;
    fragment.appendChild(clone);
  });

  containerMyList.appendChild(fragment);
};

showFilm();

document.addEventListener("click", (e) => {
  if (e.target.matches(".remove")) {
    const filmName = e.target.dataset.id; // Cargo la pelicula

    const index = myListSection.indexOf(filmName); //Obtengo la posicion de la lista para la pelicula
    myListSection.splice(index, 1); // Borro el elemento de la lista
    localStorage.setItem("favorites", JSON.stringify(myListSection)); // actualizo la lista.

    showFilm(); // actualizo la vista show.
  }
});


// Buscar pelicula
const searchMovie = (evento) => {
  evento.preventDefault(); // Prevenir que se recargue la página
  const search = document.getElementById('search').value; // Obtener la búsqueda del usuario y convertirla a minúsculas
  const result = films.filter((item) => item.title == search);  // Buscar coincidencias en el título, director y año de estreno
  console.log(result); // Mostrar los resultados en pantalla
}

const formSearch = document.querySelector('#form-search');
formSearch.addEventListener('submit', searchMovie);


////////////////////////////////////////////////////////

// const templateCategories = document.querySelector("#template-categories");
// const fragment = document.createDocumentFragment();

//   // JUST ADDED
//   const justAddedContainer = document.querySelector(".container__just-added");

//   const justAddedSection = films.filter((item) => item.section === "Just added" || item.sectionTwo === "Just added" || item.sectionThree === "Just added");

//   const showJustAdded = () => {
//     justAddedSection.forEach((item) => {
//       const clone = templateCategories.content.cloneNode(true);

      // clone.querySelector(".img-films").src = item.img;
      // clone.querySelector(".img-films").alt = item.alt;
      // clone.querySelector(".movie-title").textContent = item.title;
      // clone.querySelector(".btn-add-list").dataset.film= item.title;
      // clone.querySelector(".video").src = item.trailer;

//       fragment.appendChild(clone);
//     });

//     justAddedContainer.appendChild(fragment);
//   };
//   showJustAdded();



  







