import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //передається за значенням
  let a = 6,
    b = a;

  b = a + 5;
  console.log(b);
  console.log(a);

  const obj = {
    a: 5,
    b: 1,
  };

  //передаємо посилання
  const copy = obj;
  copy.a = 10;
  console.log(copy); //а=10
  console.log(obj); //а=10

  //створення поверхневого копіювання через цикл
  function copyObj(mainObj) {
    let objectCopy = {}; //нова копія

    let key; //Записуємо сюди назву властивості(ключі об'єкту)
    //Запускаємо цикл: "Для кожного ключа в оригінальному об'єкті..."

    for (key in mainObj) {
      objectCopy[key] = mainObj[key];
    }
    return objectCopy;
  }

  const newNumbers = copyObj(numbers);
  newNumbers.a = 10;
  newNumbers.c.x = 12;
  console.log(numbers); //a = 2, c = 12
  console.log(newNumbers); //a = 10, c = 12;

  const numbers = {
    a: 2,
    b: 3,
    c: {
      x: 4,
      y: 5,
    },
  };
  const add = {
    d: 17,
    e: 20,
  };
  //метод Object.assign(1,2)
  //1- це куди ми хочемо усе помістити
  //2 - це що ми хочемо помістити
  //ми створили не залежну поверхневу копію,яка не залижить ні від numbers ні від add
  //якщо буде замість numbers пустий об'єкт{}- буде звичайна копія
  console.log(Object.assign(numbers, add));
  const clone = Object.assign({}, add);
  clone.d = 20;
  console.log(add);
  console.log(clone);

  //створюємо копію масива через метод slice()
  const oldArr = ["a", "b", "c"];
  const newArr = oldArr.slice();
  newArr = "asasas";
  console.log(oldArr);
  console.log(newArr);

  //Оператор розвертання(Spread)
  //він розкриває усі значення і додає їх
  // internet буде мати усі значення які мають video та blogs
  const video = ["youtume", "vimeo"],
    blogs = ["wordpress", "blogger", "livejournal"],
    internet = [...video, ...blogs, "insta", "facebook"];
  console.log(internet);

  //тут наш Spread оператор допомогає нам розкрити наш масив даних на окремі значення
  function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }
  const num = [3, 4, 5];
  log(...num);


  //створили нову копію через Spread оператор 
  //так само можемо і з об'єктом
    const array = ["d", "s", "a"];
  const newArray = [...array];
  newArray[1]= "asasa";
  console.log(array);
  console.log(newArray);
});
