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


function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello("Alexey"));

function returnNeighboringNumbers (num) {
console.log([num-1,num,num+1]);

}
returnNeighboringNumbers (6);

function getMathResult(base,count) {
    if (typeof count !== 'number' || count <= 0) {
        return base;
    }

    let result = '';

    for (let i = 1; i <= count; i++) {
        result += base * i;

        if (i !== count) {
            result += '---';
        }
    }

    return result;
}
console.log(getMathResult(5,3));



