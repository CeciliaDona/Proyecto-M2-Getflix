const open = document.querySelectorAll('#open');
const close = document.querySelector('#btn-close');
const modal = document.querySelector('.modal__container');
const add = document.querySelector('.bi-plus-circle-fill');
const remove = document.querySelectorAll('.bi-trash3-fill');
const edit = document.querySelectorAll('#edit');
const back = document.querySelector('#back');
const addMovie = document.querySelector('.modal__modification');
const table = document.querySelector('.modal__table');

import { films } from '../js/data/films.js'; 

const templateCategories = document.querySelector('#template-categories');
const fragment = document.createDocumentFragment();

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





open.forEach((item) => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
    });
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});

add.addEventListener('click', function() {
    table.style.display = 'none';
    close.style.display = 'none';
    add.style.display = 'none';
    addMovie.style.display = 'flex';
});

back.addEventListener('click', function(){
    table.style.display = 'flex';
    close.style.display = 'flex';
    add.style.display = 'flex';
    addMovie.style.display = 'none';
});


