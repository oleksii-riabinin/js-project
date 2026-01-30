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


let result = "";
const length = 7;

for (let i = 1; i <length; i++){

  for (let j = 0; j<i; j++){
    result += "*";
  }

  result += "\n";
}

console.log(result);



first: for (let i = 0; i <3; i++){
console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++){
 console.log(`Second level: ${j}`);
  
   for (let k = 0; k < 3; k++){
    if(k===2) continue first;
console.log(`Third level: ${k}`);
  }
}
}