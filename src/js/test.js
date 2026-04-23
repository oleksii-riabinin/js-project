import "/src/scss/style.scss";
("use strict");
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
  function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
  }

  calcOrDouble(3);
});



// JSON — це універсальна мова-перекладач (своєрідне "есперанто" для коду). 
// Це просто текст, звичайний рядок (string), але записаний за дуже суворими правилами. 
// Його розуміють абсолютно всі мови програмування у світі.

const person = {
  name: "Alex",
  tel: "+34343",
  parents: {
    mom: "Olga",
    ded: "Mike",
  },
};
//перетворюємо наш об'єкт так щоб ми могли його відправити на сервер
console.log(JSON.stringify(person));

// Коли сервер надсилає тобі дані (або ти дістаєш їх з пам'яті браузера)
//  вони приходять у вигляді тексту JSON. 
// Тобі треба перетворити їх назад у повноцінний JS-об'єкт, щоб з ними було зручно працювати.
console.log(JSON.parse(JSON.stringify(person)));

//також за допомогою JSON ми можемо створювати глубоке копіювання об'єкту 
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = "ann";
console.log(person);
console.log(clone);
