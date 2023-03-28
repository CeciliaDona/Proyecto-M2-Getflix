// sign out

const signOutButton = document.getElementById('sign-out-btn');

signOutButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = '../index.html'; // reemplaza "ejemplo.com" con la URL de tu página de inicio
});



const table = document.querySelector('.modal__table');
const tableBody = table.querySelector('tbody')
const add = document.querySelector('.add-movie')
const addMovieForm = document.querySelector('.modal__add-movie');

document.addEventListener('click', (e) => {
    if(e.target.matches('.modal__table-title-4')) {
        add.style.display = 'block';
    };
    if(e.target.matches('#add-cancel')) {
        addMovieForm.reset();
        add.style.display = 'none';
    };
    if(e.target.matches('#back')) {
        add.style.display = 'none'
    };
    if(e.target.matches('#btn-close')) {
        modal.style.display = 'none';
    };
    if (e.target.matches('#remove-btn')) {
        removeMovie();
    }
    if (e.target.matches('#add-btn')) {
        addToFilms();
    }
});


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

document.addEventListener('load', displayFilms);