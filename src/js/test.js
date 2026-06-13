import "/src/scss/style.scss";
("use strict");
window.addEventListener("DOMContentLoaded", () => {
  //Живі та статичні колекції і потрібні методи

  const boxesQuery = document.querySelectorAll(".box"); //статичні колекції
  const boxesGet = document.getElementsByClassName("box"); //живі колекції

  //можно створити звичайнийстатичний масив
  console.log(Array.from(boxesGet));

  boxesQuery[0].remove(); 
  //показує нам відбиток, коли ми видалили перший елемент
  //то все рівно в дереві будуть показуватись 3 ел
  boxesGet[0].remove(); 
  //а тут воно показує зміни, і коли ми тут ще видалили один елемент
  //то воно покаже один елемент в дереві
  console.log(boxesQuery);
  console.log(boxesGet);
  console.log(document.body.children);

  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    document.body.append(div);
  }

  boxesQuery.forEach((box) => {
    //метод який первіряє будь якіCSS-селекторами на їх наявність(перевіряє тільки там де запитуємо)
    if (box.matches(".this")) console.log("This one!");
  });
  //метод який шукає найближчого батька(процює по всему HTML)
  console.log(boxesQuery[0].closest(".wrapper"));
});
