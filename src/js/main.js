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

// const a = prompt("Один из последних просмотренных фильмов?",""),
//       b = prompt("Оцените его?", ""),
//       c = prompt("Один из последних просмотренных фильмов?",""),
//       d = prompt("Оцените его?", "");

//      personalMovieDB.movies[a] = b;
//      personalMovieDB.movies[c] = d;

//      console.log(personalMovieDB);





function firstTask() {
    // Пишем решение вот тут
    for(let i = 5; i<=10; i++){
      console.log(i);
    } 
}
firstTask()

function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i>10; i--){
      if (i===13) break;
      console.log(i);
    
    }
    
}
secondTask()

function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
thirdTask()


function fourthTask() {
    let i = 2;

  while (i <= 16) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
}
fourthTask()


function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
  }

fifthTask()


const arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = i + 1;
}

console.log(arr);