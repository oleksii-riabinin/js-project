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
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    // Пишем решение вот тут
    for(let i = 0; i<arr.length; i++){
      result[i]=arr[i];
    }
    console.log(result);
    
    // Не трогаем
    return result;
}
firstTask()

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i = 0; i < data.length; i++){
      if(typeof(data[i])===`number`){
        data[i]= data[i]*2;
      }
      else if(typeof(data[i])===`string`){
        data[i]=`${data[i]} - done`;
      }
    }
    console.log(data);
    return data;
}

secondTask();

function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }

    console.log(result);
    return result;
}

thirdTask();