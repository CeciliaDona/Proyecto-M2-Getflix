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

  const justAddedSection = films.filter((item) => item.section === "Just added" || item.sectionTwo === "Just added" || item.sectionThree === "Just added");

  const showJustAdded = () => {
    justAddedSection.forEach((item) => {
      const clone = templateCategories.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;
      clone.querySelector(".movie-title").textContent = item.title;
      clone.querySelector(".add-list").dataset.film= item.title;

      fragment.appendChild(clone);
    })

    justAddedContainer.appendChild(fragment);
  }
  showJustAdded();

  // TRENDS
  const trendsContainer = document.querySelector(".container__trends");

  const trendsSection = films.filter((item) => item.section === "Trends" || item.sectionTwo === "Trends" || item.sectionThree === "Trends");

  const showTrends = () => {
    trendsSection.forEach((item) => {
      const clone = templateCategories.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;
      clone.querySelector(".movie-title").textContent = item.title;
      clone.querySelector(".add-list").dataset.film= item.title;

      fragment.appendChild(clone);
    })

    trendsContainer.appendChild(fragment);
  }
  showTrends();


  // CONTINUE WATCHING
  const continueContainer = document.querySelector(".container__continue");

  const continueSection = films.filter((item) => item.section === "Continue watching" || item.sectionTwo === "Continue watching" || item.sectionThree === "Continue watching");

  const showContinueWatching = () => {
    continueSection.forEach((item) => {
      const clone = templateCategories.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;
      clone.querySelector(".movie-title").textContent = item.title;
      clone.querySelector(".add-list").dataset.film= item.title;


      fragment.appendChild(clone);
    })

    continueContainer.appendChild(fragment);
  }
  showContinueWatching();


  // TOP TEN
  const topTenContainer = document.querySelector(".container__top-10");
  const templateTopTen = document.querySelector("#template-top-ten");

  const topTenSection = films.filter((item) => item.section === "Top ten" || item.sectionTwo === "Top ten" || item.sectionThree === "Top ten");

  const showTopTen = () => {
    topTenSection.forEach((item) => {
      const clone = templateTopTen.content.cloneNode(true);

      clone.querySelector(".img-films").src = item.img;
      clone.querySelector(".img-films").alt = item.alt;
      clone.querySelector(".movie-number").textContent = item.top;
      clone.querySelector(".movie-title").textContent = item.title;
      clone.querySelector(".add-list").dataset.film= item.title;

      fragment.appendChild(clone);
    })

    topTenContainer.appendChild(fragment);
  }
  showTopTen();

  ///////////////////////////////////////////////////////////////////////
  // const myFavoriteContainer = document.querySelector(".container__fav-list");
  // const add = document.querySelector(".add-list");


  // let myFavoriteSection = [];

  // document.addEventListener("click", (e) => {
  //   if (e.target.dataset.title === justAddedSection.title) {
  //     console.log("titulo") 
  //     addToFavoriteList();
  //   }

  //   if (e.target.dataset.title === trendsSection.title) {
  //     console.log("titulo")   
  //     addToFavoriteList();
  //   }

  //   if (e.target.dataset.title === continueSection.title) {
  //     console.log("titulo") 
  //     addToFavoriteList();  
  //   }

  //   if (e.target.dataset.title === topTenSection.title) {
  //     console.log("titulo")  
  //     addToFavoriteList(); 
  //   }
  // });

  // const addToFavoriteList = (e) => {
  //   const position = myFavoriteSection.findIndex(item => item.title === films.title);

  //   if (position === -1) {
  //     myFavoriteSection.push(films)
  //   }
  //   console.log(myFavoriteSection)
  // }

  ////////////////////////////////////////////////////////////////

  function addToFavoriteList(title) {
    // Obtener la lista de favoritos del usuario (o crearla si no existe)
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    // Verificar si la película ya está en la lista de favoritos
    if (favorites.includes(title)) {
      alert("La película ya está en tus favoritos");
    } else {
      // Agregar la película a la lista de favoritos
      favorites.push(title);
  
      // Almacenar la lista de favoritos en el almacenamiento local
      localStorage.setItem("favorites", JSON.stringify(favorites));
  
      alert("Película agregada a favoritos");
    }
  }

  const myListContainer = document.querySelector(".container__fav-list");
const btnRemove = document.querySelector(".remove");

// debería pintar en consola el "título" solo cuando el target esté en "add to list"
document.addEventListener("click", (e) => {
  const clickedFilm = e.target.dataset.film;
  const ifMovie = films.some((item) => item.title === clickedFilm);
  if (ifMovie) addToFavoriteList(clickedFilm);
});

const ShowFav = () => {
  const favoritesContainer = document.querySelector(".container__fav-list");
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  if (favorites && favorites.length > 0) {
    favorites.forEach((movie) => {
      console.log(movie);
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `
        <p style="color:white">${movie}</p>
      `;
      favoritesContainer.appendChild(movieElement);
    });
  }
};
ShowFav();





