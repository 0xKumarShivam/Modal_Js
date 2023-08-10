'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnOpenModal);

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');}

for (let i = 0; i < btnOpenModal.length; i++ )
console.log(btnOpenModal[i].addEventListener('click' , openModal)); //no need to use curly brackets in this loop(because only one line of code to execute)


const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');}

btnCloseModal.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);


//Escape keypress event
document.addEventListener('keydown' , function(e) {
    console.log(e.key);

    if(e.key==='Escape' && !modal.classList.contains('hidden')){closeModal();}
});