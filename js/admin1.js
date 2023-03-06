const open = document.querySelectorAll('#open');
const close = document.querySelector('#btn-close');
const modal = document.querySelector('.modal__container');
const add = document.querySelector('.bi-plus-circle-fill');
const remove = document.querySelectorAll('.bi-trash3-fill');
const edit = document.querySelectorAll('#edit');

let moviesArray = [];

open.forEach((item) => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
    });
});

close.addEventListener('click', function() {
    modal.style.display = 'none';
});