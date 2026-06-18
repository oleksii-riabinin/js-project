import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {


const persone = {
  name:'Alex',
  tel:"+323232",
  parents:{
    mom:"Olga",
    dad:"Mike"
  }
};
//перетворюємо наш звичайний об'єкт на формат JSON(JSON.stringify())
//перетворюємо з формату JSON в звичайний об'єкт(JSON.parse())
console.log(JSON.parse(JSON.stringify(persone)));

//створення глубокого копіювання об'єкту
const clone = JSON.parse(JSON.stringify(persone));;
clone.parents.mom="Ann";
console.log(persone);
console.log(clone);


});
