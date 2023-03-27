

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

const addMoviePlus = document.querySelector('.modal__table-title-4');
const edit = document.querySelectorAll('#edit');
const back = document.querySelector('#back');
const table = document.querySelector('.modal__table');
const tableBody = table.querySelector('tbody')
const add = document.querySelector('.add-movie')
const addMovieForm = document.querySelector('.modal__add-movie');
const addMovieBtn = document.querySelector('#add-btn');
const addMovieCancel = document.querySelector('#add-cancel');


addMoviePlus.addEventListener('click', function()  {
    add.style.display = 'block';
});

addMovieCancel.addEventListener('click', function (){
    addMovieForm.reset();
    add.style.display = 'none';
})

addMovieForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let movieTitle = document.getElementById('movie-title').value;
    let movieId = document.getElementById('movie-id').value;
    let movieYear = document.getElementById('movie-year').value;
    let movieGenres = document.getElementById('movie-genres').value;
    let movieImgUrl = document.getElementById('movie-img-url').value;
    let movieAlt = document.getElementById('movie-alt').value;
    let movieTrailerUrl = document.getElementById('movie-trailer-url').value;
    let movieSynopsis = document.getElementById('movie-synopsis').value;
    let movieCategory = document.getElementById('movie-category').value;

    const addMovieTemplate = `
        <tr class="modal__table-titles">
            <th class="modal__table-title-1">${movieTitle}</th>
            <th class="modal__table-title-2">${movieYear}</th>
            <th class="modal__table-title-3">${movieSynopsis}</th>
            <th class="modal__table-title-icon"><i class="bi bi-pencil-square modal__table-btn" id="edit"></i><i class="bi bi-trash3-fill modal__table-btn"></i></th>
        </tr>`
    tableBody.insertAdjacentHTML('beforeend', addMovieTemplate);
    addMovieForm.reset();
    add.style.display = 'none';
    
});

function addToFilms () {
    let movieTitle = document.getElementById('movie-title').value;
    let movieId = document.getElementById('movie-id').value;
    let movieYear = document.getElementById('movie-year').value;
    let movieGenres = document.getElementById('movie-genres').value;
    let movieImgUrl = document.getElementById('movie-img-url').value;
    let movieAlt = document.getElementById('movie-alt').value;
    let movieTrailerUrl = document.getElementById('movie-trailer-url').value;
    let movieSynopsis = document.getElementById('movie-synopsis').value;
    let movieCategory = document.getElementById('movie-category').value;

    let newMovie = {
        title: movieTitle,
        id: movieId,
        year: movieYear,
        Genres: movieGenres,
        img: movieImgUrl,
        alt: movieAlt,
        srcTrailer: movieTrailerUrl,
        synopsis: movieSynopsis,
        section: movieCategory,
        sectionTwo: "Top ten",
        sectionThree: "",
        top: 1
    };

    films.push(newMovie);
}

function displayFilms () {
    let table = document.querySelector('.modal__table');
    let tableBody = table.querySelector('tbody');
    tableBody.innerHTML = "";

    for(let i = 0; i < films.length; i++) {
        let movie = films[i];

        let row = document.createElement('tr');
        let nameCell = document.createElement("td");
        let yearCell = document.createElement("td");
        let descriptionCell = document.createElement("td");

        nameCell.textContent = movie.movieName;
        yearCell.textContent = movie.movieYear;
        descriptionCell.textContent = movie.movieSynopsis;

        row.appendChild(nameCell);
        row.appendChild(yearCell);
        row.appendChild(descriptionCell);
        
        tableBody.appendChild(row);
    }
}

addMovieBtn.addEventListener('click', addToFilms);

document.addEventListener('load', displayFilms);



/*
document.addEventListener('DOMContentLoaded', function() { //cargar todo al dom
    const removeBtn = document.querySelectorAll('#remove-btn');
  
    removeBtn.forEach(function(e) {
      e.addEventListener('click', function() {
        const row = this.closest('tr');
        const title = row.querySelector('td:first-child').textContent;
        row.remove();
        const index = films.findIndex(movie => movie.title === title);
        films.splice(index, 1);
        localStorage.setItem('movies', JSON.stringify(films));
      });
    });
  });
  */

  back.addEventListener('click', function(){
    add.style.display = 'none'
});

closeModal.addEventListener('click', function(){
    modal.style.display = 'none';
});

