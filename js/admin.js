let bar = document.querySelector('.bi-list');
let burger = document.querySelector('.burger');
let aside = document.querySelector('aside');

burger.addEventListener('click', ()=>{
    bar.classList.toggle('bi-x-lg');
    aside.classList.toggle('extend');
})