import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //rest оператор- він збирає всі аргументи які можуть прийти а можуть і не прийти та робить з них масив
  // (пишеться в самому кінці аргументів та позначається ...НАЗВА)
  const log = function (a, b, ...rest) {
    console.log(a, b, rest);
  };
  //виведе наші значення а-'basic', b-"rest", і далі масив з -"operator", "usage"
  log("basic", "rest", "operator", "usage");

  //оператор за замовчуванням
 //якщо ми не викличемо дргий аргумент то ми можимо створити оператор за замовчуванням який вставить значення автоматично 
  function calcOrDouble(number,basis = 2){
    console.log(number * basis);
  }

  calcOrDouble(3)
});


