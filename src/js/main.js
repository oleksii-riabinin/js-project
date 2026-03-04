import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

  
const box = document.getElementById("box"),
      btns= document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector(".heart"),
      wrapper =document.querySelector(".wrapper");

    //працювання з елементами на сторінці
    //коли пишем значення яке хочемо змінити то пишемо не як в css(-) а camelCase
  box.style.backgroundColor = "blue";
  box.style.width = "500px";
  
  //змінює одразу декілька значеннь і тут пишемо як в звичайному css
  box.style.cssText = "background-color:blue; width:500px";

  //коли працюємо з псевдомасивами то тут вовинні обирати якийсь окремий елемент
  btns[1].style.borderRadius = "100%";

  //змінення стилів для декількох елементів
  //1) через цикл for
 for(let i = 0; i < hearts.length;i++){
  hearts[i].style.backgroundColor="green";
 }
//2) через метод forEach
 hearts.forEach(item =>{
  item.style.backgroundColor="green";
 });

 //основні методи для працювання з елементами на сторінці

 //створюємо нові елементи(він існує тільки в js)
 const div =document.createElement("div");

//додає до нашого елементу класс
div.classList.add("black");

//додає вже елемент в кінець тегу body,щоб його було видно на сторінці
document.body.append(div);

//додали наш блок в огортку wrapper
wrapper.append(div);

//додає елемент в початок батьківського елемента
wrapper.prepend(div);

//додає елемент перед якимось елементом
//елемент буде перед першим сердчком
hearts[0].before(div);

//додає елемент після якогось елемента
//елемент буде після першого сердчка
hearts[0].after(div);

//видаляє якийсь елемент
 circles[0].remove();

//замінюємо якийсь елемент на інший
//тут сердечко замінили на кружочок
hearts[0].replaceWith(circles[0]);

//можемо вводити як текст так і HTML структуру
div.innerHTML = "<h2>hello world</h2>";

//можемо вводити тільки текст
div.textContent= "text";

//додаємо Html структуру на сторінку
//спочатку пишемо над яким елементом ми будемо працювати 
//потім пишемо два значення 1.як вставимо, 2. що вставимо

//1) вставляємо перед елементом 
div.insertAdjacentHTML("beforebegin","<h2>hello</h2>");
//2)вставляємо на початок нашого елементу(як prepend) 
div.insertAdjacentHTML("afterbegin","<h2>hello</h2>");
//3) вставляємо в кінець нашого елементу
div.insertAdjacentHTML("beforeend","<h2>hello</h2>");
//4) вставляємо після елементу 
div.insertAdjacentHTML("afterend","<h2>hello</h2>");

