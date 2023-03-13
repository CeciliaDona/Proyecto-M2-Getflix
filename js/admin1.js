
const open = document.querySelectorAll('#open');
const close = document.querySelector('#btn-close');
const modal = document.querySelector('.modal__container');
const add = document.querySelector('.bi-plus-circle-fill');
const remove = document.querySelectorAll('.bi-trash3-fill');
const edit = document.querySelectorAll('#edit');
const back = document.querySelector('#back');
const addMovie = document.querySelector('.modal__modification');
const table = document.querySelector('.modal__table');

let moviesArray = [document.querySelectorAll('.modal__table-titles')];
console.log(moviesArray)

document.addEventListener('click', (e) => {
    let clickedElement = e.target;
    let position = Array.from(moviesArray).indexOf(clickedElement);
    let moviesArray = Array.from(moviesArray.children);
    moviesArray.splice(position, 1);
    moviesArray.innerHTML = '';
    moviesArray.forEach(function(item) {
        moviesArray.appenChild(item);
    });
});


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



