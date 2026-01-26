import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

const numberr0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  movies: {

  },
  actors:{

  },
  genres: [],
  privat:false,
  count:numberr0fFilms
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("Оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("Оцените его?", "");

     personalMovieDB.movies[a] = b;
     personalMovieDB.movies[c] = d;

     console.log(personalMovieDB);
      
