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

import { films } from '../js/data/films.js';

const templateCategories = document.querySelector('#template-categories');
const fragment = document.createDocumentFragment();

// JUST ADDED
const justAddedContainer = document.querySelector('.container__just-added');

const justAddedSection = films.filter(
	(item) =>
		item.section === 'Just added' ||
		item.sectionTwo === 'Just added' ||
		item.sectionThree === 'Just added'
);

const showJustAdded = () => {
	justAddedSection.forEach((item) => {
		const clone = templateCategories.content.cloneNode(true);

		clone.querySelector('.img-films').src = item.img;
		clone.querySelector('.img-films').alt = item.alt;
		clone.querySelector('.movie-title').textContent = item.title;
		clone.querySelector('.btn-add-list').dataset.film = item.title;
		//clone.querySelector(".video").src = item.trailer;
		clone.querySelector('.btn-see-more').dataset.film = item.title;

		fragment.appendChild(clone);
	});

	justAddedContainer.appendChild(fragment);
};
showJustAdded();

// TRENDS
const trendsContainer = document.querySelector('.container__trends');

const trendsSection = films.filter(
	(item) =>
		item.section === 'Trends' || item.sectionTwo === 'Trends' || item.sectionThree === 'Trends'
);

const showTrends = () => {
	trendsSection.forEach((item) => {
		const clone = templateCategories.content.cloneNode(true);

		clone.querySelector('.img-films').src = item.img;
		clone.querySelector('.img-films').alt = item.alt;
		clone.querySelector('.movie-title').textContent = item.title;
		clone.querySelector('.btn-add-list').dataset.film = item.title;
		clone.querySelector('.btn-see-more').dataset.film = item.title;

		fragment.appendChild(clone);
	});

	trendsContainer.appendChild(fragment);
};
showTrends();

// CONTINUE WATCHING
const continueContainer = document.querySelector('.container__continue');

const continueSection = films.filter(
	(item) =>
		item.section === 'Continue watching' ||
		item.sectionTwo === 'Continue watching' ||
		item.sectionThree === 'Continue watching'
);

const showContinueWatching = () => {
	continueSection.forEach((item) => {
		const clone = templateCategories.content.cloneNode(true);

		clone.querySelector('.img-films').src = item.img;
		clone.querySelector('.img-films').alt = item.alt;
		clone.querySelector('.movie-title').textContent = item.title;
		clone.querySelector('.btn-add-list').dataset.film = item.title;
		clone.querySelector('.btn-see-more').dataset.film = item.title;

		fragment.appendChild(clone);
	});

	continueContainer.appendChild(fragment);
};
showContinueWatching();

// TOP TEN
const topTenContainer = document.querySelector('.container__top-10');
const templateTopTen = document.querySelector('#template-top-ten');

const topTenSection = films.filter(
	(item) =>
		item.section === 'Top ten' || item.sectionTwo === 'Top ten' || item.sectionThree === 'Top ten'
);

const showTopTen = () => {
	topTenSection.forEach((item) => {
		const clone = templateTopTen.content.cloneNode(true);

		clone.querySelector('.img-films').src = item.img;
		clone.querySelector('.img-films').alt = item.alt;
		clone.querySelector('.movie-number').textContent = item.top;
		clone.querySelector('.movie-title').textContent = item.title;
		clone.querySelector('.btn-add-list').dataset.film = item.title;
		clone.querySelector('.btn-see-more').dataset.film = item.title;

		fragment.appendChild(clone);
	});

	topTenContainer.appendChild(fragment);
};
showTopTen();

////////////////////////////////////////////////////////////////////////////

// MODAL
const templateModal = document.querySelector('.template-modal');
const containerModal = document.querySelector('.container__modal-template');

document.addEventListener('click', (e) => {
	if (e.target.matches('.btn-see-more')) {
		showDataModal(e);
	}
});

//const film = films.find((item) => item.id === films.dataset.id);

const showDataModal = (e) => {
	containerModal.textContent = '';
	films.forEach((item) => {
		if (item.title === e.target.dataset.film) {
			const clone = templateModal.content.cloneNode(true);
			clone.querySelector('.modal-title').textContent = item.title;
			clone.querySelector('.modal-video').src = item.srcTrailer;
			clone.querySelector('.synopsis-text').textContent = item.synopsis;
			clone.querySelector('.year').textContent = item.year;
			clone.querySelector('.genre').textContent = item.Genres;

			fragment.appendChild(clone);
		}
	});
	containerModal.appendChild(fragment);
};





  //MY FAVORITE LIST (NO FUNCIONA, CORREGIR)
    const containerMyList = document.querySelector(".container__fav-list");
    const templateFavoriteList = document.querySelector(".template-categories");

    const myListSection = [];

    document.addEventListener("click", (e) => {
      if (e.target.dataset.id === films.title) {
        addToFavList(e);
      }
   });

    const addToFavList = (e) => {
     const film = {
      title: e.target.dataset.title,
      id: e.target.dataset.id,
      img: e.target.dataset.img,
      alt: e.target.dataset.title
     }

     const position = myListSection.findIndex(item => item.id === film.id);

     if (position === -1) {
      myListSection.push();
     }
     showFilm();
   }

   const showFilm = () => {
    containerMyList.textContent = "";
    myListSection.forEach((item) => {
      const clone = templateFavoriteList.content.cloneNode(true);
      clone.querySelector(".add-to-list").dataset.id = item.id;
      clone.querySelector(".movie-title").textContent = item.title;
      clone.querySelector(".img-films").src = item.img;
      fragment.appendChild(clone);
    });

    containerMyList.appendChild(fragment);
   }














  // const myListContainer = document.querySelector(".container__fav-list");
  // const btnRemove = document.querySelector(".remove");

  // // debería pintar en consola el "título" solo cuando el target esté en "add to list"
  
  // const myListSection = films.filter((item) => item.title === films.title);

  // document.addEventListener("click", (e) => {
    
  //   if (e.target.dataset.title === films.title) {
  //     console.log("titulo");
  //     //addToFavoriteList();
  //    }

  //    if (e.target.dataset.title === trendsSection.title) {
  //     console.log("titulo");
  //     //addToFavoriteList();
  //    }

  //    if (e.target.dataset.title === continueSection.title) {
  //     console.log("titulo");
  //     //addToFavoriteList();  
  //    }

  //    if (e.target.dataset.title === topTenSection.title) {
  //     console.log("titulo");
  //     //addToFavoriteList(); 
  //    }

  // });

  // const addToFavoriteList = (e) => {
  // const myListSection = films.filter((item) => item.title === films.title)
  // };





  







