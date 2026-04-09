
import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", ()=>{

const boxx = document.querySelector(".boxx");
const clk = document.querySelector(".clk");
//отримуємо значення висоти та довжини блоку без margin i scroll(тфльки сам елемент і якщо є padding)
const widthClient = boxx.clientWidth;
const heighClient = boxx.clientHeight;

 //отримуємо повну ширину і висоту навіть з margin i scroll
const widthOffset = boxx.offsetWidth;
const heighOffset = boxx.offsetHeight;

 //отримуємо ширину і висоту з урахуванням скролу
const widthScroll= boxx.scrollWidth;
const heighScroll = boxx.scrollHeight;

clk.addEventListener("click", () => {
  //після натискання отримуємо повну висоту з урахуванням скролу
  boxx.style.height = boxx.scrollHeight + "px";
  //показує скільки ми вже пролистали 
  console.log(boxx.scrollTop)
});
//отримуємо усі координати елементу( починаємо з лівого верхнього кута)
// також коли там написано right це не від правої частини екрану
//а від правої части елементу до лівого краю екрану
console.log(boxx.getBoundingClientRect().top);//можно їх окремо отримати

//отримуємо всі стилі яки є на елементі( змінювати не можем)тільки читати
const style = window.getComputedStyle(boxx);
console.log(style.display);
});

//метод який скролить сторінку від моменту на якому ми зараз зупинились
scrollBy(0,400)//- перше значення це х, а друге у

//метод який скролить сторінку відносно усієї сторінки
scrollTo(0,400)//- перше значення це х, а друге у
