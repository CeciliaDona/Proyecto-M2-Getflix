

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
		
		fragment.appendChild(clone);
	});

	justAddedContainer.appendChild(fragment);
};
showJustAdded();


//TRENDS
const trendsContainer = document.querySelector('.container__trends');

const trendsSection = films.filter(
	(item) =>
		item.section === 'Trends' || 
        item.sectionTwo === 'Trends' || 
        item.sectionThree === 'Trends'
);

const showTrends = () => {
	trendsSection.forEach((item) => {
		const clone = templateCategories.content.cloneNode(true);

		clone.querySelector('.img-films').src = item.img;
		clone.querySelector('.img-films').alt = item.alt;
		clone.querySelector('.movie-title').textContent = item.title;

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

		fragment.appendChild(clone);
	});

	topTenContainer.appendChild(fragment);
};
showTopTen();


const modal = document.querySelector('.modal__container');
const modalTemplate = document.querySelector('#modal-template');
const closeModal = document.querySelector('#btn-close');
const table = document.querySelector('.modal__table');
const justAddedEdit = document.querySelector('.just-added-edit');
const trendsEdit = document.querySelector('.trends-edit');
const top10Edit = document.querySelector('.top-10-edit');


// JUST ADDED
justAddedEdit.addEventListener('click', function () {
        modal.style.display = 'block';
        showJustAddedData();
    });

const showJustAddedData = () => {
	justAddedSection.forEach((item) => {
		const clone = modalTemplate.content.cloneNode(true);

		clone.querySelector('.modal__table-title-1').textContent = item.title;
        clone.querySelector('.modal__table-title-2').textContent = item.year;
        clone.querySelector('.modal__table-title-3').textContent = item.synopsis;
		
		fragment.appendChild(clone);
	});

	modal.appendChild(fragment);
};

//TRENDS
trendsEdit.addEventListener('click', function () {
    modal.style.display = 'block';
    showTrendsData();
});

const showTrendsData = () => {
trendsSection.forEach((item) => {
    const clone = modalTemplate.content.cloneNode(true);

    clone.querySelector('.modal__table-title-1').textContent = item.title;
    clone.querySelector('.modal__table-title-2').textContent = item.year;
    clone.querySelector('.modal__table-title-3').textContent = item.synopsis;
    
    fragment.appendChild(clone);
});

modal.appendChild(fragment);
};

//TOP 10
top10Edit.addEventListener('click', function () {
    modal.style.display = 'block';
    showTop10Data();
});

const showTop10Data = () => {
topTenSection.forEach((item) => {
    const clone = modalTemplate.content.cloneNode(true);

    clone.querySelector('.modal__table-title-1').textContent = item.title;
    clone.querySelector('.modal__table-title-2').textContent = item.year;
    clone.querySelector('.modal__table-title-3').textContent = item.synopsis;
    
    fragment.appendChild(clone);
});

modal.appendChild(fragment);
};

const addMovie = document.querySelector('.modal__table-title-4');
const removeMovie = document.querySelectorAll('.bi-trash3-fill');
const edit = document.querySelectorAll('#edit');
const back = document.querySelector('#back');
const modificate = document.querySelector('.modal__modification');


addMovie.addEventListener('click', function()  {
    modificate.style.display = 'block';
});

back.addEventListener('click', function(){
    modificate.style.display = 'none'
})

closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
});


removeMovie.addEventListener('click', (e) => {
    films = films.filter((item) => {
        if (e.target.dataset.id === item.id) {
            item.remove();
        } else {
            return item;
        }
    });
    showJustAddedData()
});

function addToFilms() {
    var movieTitle = document.getElementById('movie-title').value;
    var movieId = document.getElementById('movie-id').value;
    var movieYear = document.getElementById('movie-year').value;
    var movieGenres = document.getElementById('movie-genres').value;
    var movieImgUrl = document.getElementById('movie-img-url').value;
    var movieAlt = document.getElementById('movie-alt').value;
    var movieTrailerUrl = document.getElementById('movie-trailer-url').value;
    var movieSynopsis = document.getElementById('movie-synopsis').value;
    var movieCategory = document.getElementById('movie-category').value;


}