import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

  
//події вони нам кажуть про те що щось відбулось на сторінці( клік, прокрут колеса миші ...)
//обробник це функція яка працюватиме після того як подія відбулась

const btn = document.querySelector('button');
const overlay = document.querySelector(".overlay");
//1) обробник натискання
// ( але цей метод рідко використовують, 
// бо коли написати схожу функцію але з друшим виводом 
// то воно покаже тільки друге повідомлення)
// btn.onclick = function(){
//   alert('Click');
// }

//2) правильне написання обробників подій(перше значення назву події, а другим це callback функція)
//цей метод краще бо ми можемо давати нашому обробнику декілька дій(тут він спочатку виведе click, а потім Second click)
btn.addEventListener('click',()=>{
alert('Click');
});

//тут буде виконуватись дія коли будемо наводити мишку на елемент
btn.addEventListener('mouseenter',()=>{
console.log("hover")
});

//об'єкт подій(те що йде в аргументі функції,завжди пишемо першим, а далі інші аргументи),також він показує що було зроблено з елементом
btn.addEventListener('click',(event)=>{
  //властивість яка показує що це за елемент .target
console.log(event.target);
//показує що за подія відбулась
console.log(event.type);
//воно змінить вивід нашого target( зверху буде дочірній елемент, а знизу батьківський)
console.log(event.currentTarget);
//при натисканні видаляємо елемент
event.target.remove();
});

let i =0;
//функція
const deleteElement =(event)=>{
console.log(event.target);
i++;
if(i==1){
  //метод видалення
  btn.removeEventListener("click", deleteElement);
}
};
//тут ця функція буде працювати після натискання
btn.addEventListener("click", deleteElement);
//стоврили спливання подій, воно в нас виведе два target типу батьківсьокого елементу, а потім п виведе дочірнього елементу

overlay.addEventListener("click", deleteElement);

//робимо стандартну відмову для браузера(типу не переходь за посилання, юо ми будемо робити щось інше)
const link = document.querySelector("a");
link.addEventListener("click", (e)=>{
  //завжди ставимо на початок
e.preventDefault();
//ми не перейдемо за посиланням , а просто виведемо target в консоль
console.log(e.target);
});

//робимо наші події для декількох елементів
const button = document.querySelectorAll('button');

button.forEach(item=>{
  //тут ми додали третій аргумент який нам каже що ми можемо використовувати цю подію тільки один раз
item.addEventListener("click",deleteElement,{once:true});
});