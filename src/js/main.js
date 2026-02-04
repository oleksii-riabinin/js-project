import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

// const numberr0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   movies: {

//   },
  
//   actors:{

//   },

//   genres: [],

//   privat:false,

//   count:numberr0fFilms
// };

    
//      for(let i = 0;i<2;i++){
//       const a = prompt("Один из последних просмотренных фильмов?",""),
//       b = prompt("Оцените его?", "");

//       if(a != null && b != null && a != "" && b != "" && a.length<50){
//           personalMovieDB.movies[a] = b;
//           console.log('done')
//       }else{
//         console.log("error")
//         i--;
//       }
//      }

//      if(personalMovieDB.count<10){
//       console.log("Просмотрено мало фильмов");
//      }else if(personalMovieDB.count<=10 && personalMovieDB.count<30){
//       console.log("Вы класический зритель");
//      }else if(personalMovieDB.count<=30){
//       console.log("Вы киноман");
//      }else{
//       console.log("Ошибка");
//      }
//      console.log(personalMovieDB);



//свойство поиска размера
const row = "test";
console.log(row.length);
const arr = [ 1,2,3];
console.log(arr.length);

//методы которые меняют строку на верхний или нижний регистры
const strUp = "test";
console.log(strUp.toUpperCase());
const strLower = "TEST";
console.log(strLower.toLowerCase());

//поиск начала(индекс) части строки ИЛИ поиск подстроки 
let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

// методы которые обрезают часть строки 
const logg = "Hello world and Alexey";
console.log(logg.slice(6,15));
console.log(logg.substring(6,15));

// Математическая библиотека( метод скругления числа )
const num =12.2;
console.log(Math.round(num));

//методы котрые меняют строку га числовой элемент
//1. Округляет число 
//2. Не округляет( может вывести дробное число )
const test ="12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

