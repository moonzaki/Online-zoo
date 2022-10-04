'use strict';
const watchTitle = document.querySelector('.watch__title');
const watchTitleArray = watchTitle.innerHTML.split(' ');

document.addEventListener('DOMContentLoaded', () => {
    let repWord;
    watchTitleArray.forEach((e, i) => {
        if (i === 2) {
            return repWord = e;
        }
    })
    watchTitle.innerHTML = watchTitle.innerHTML.replace(repWord, `<span style="color: rgba(255, 238, 46, 1);">${repWord}</span>`)
})

// console.log(window.location.href);
// const nav = document.querySelector('.navigation'),
//       navList = document.querySelector('.navigation__list'),
//       navItem = document.querySelectorAll('.navigation__item'),
//       navLink = document.querySelectorAll('.navigation__link'),
//       navBurger = document.querySelector('.navigation__burger'),
//       navBurgerItem = document.querySelectorAll('.navigation__burger-line');



// navBurger.addEventListener('click', () => {
//     function toggleNav() {
//         navList.classList.toggle('navigation__list')
//         navList.classList.toggle('newClass')
//     }
//     toggleNav();
// });



