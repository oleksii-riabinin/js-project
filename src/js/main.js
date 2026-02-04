import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

        let numberr0fFilms;
        function start(){
        numberr0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (numberr0fFilms=='' || numberr0fFilms == null || isNaN(numberr0fFilms)){
        numberr0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }
        }
        start();

        const personalMovieDB = {
        movies: {

        },
        
        actors:{

        },

        genres: [],

        privat:false,

        count:numberr0fFilms
        };

    
  

     function rememberMyFilms (){
          for(let i = 0;i<2;i++){
      const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("Оцените его?", "");

      if(a != null && b != null && a != "" && b != "" && a.length<50){
          personalMovieDB.movies[a] = b;
          console.log('done')
      }else{
        console.log("error")
        i--;
      }
     }
     }
     rememberMyFilms();

   

     function detectPersonalLevel(){
  if(personalMovieDB.count<10){
      console.log("Просмотрено мало фильмов");
     }else if(personalMovieDB.count<=10 && personalMovieDB.count<30){
      console.log("Вы класический зритель");
     }else if(personalMovieDB.count<=30){
      console.log("Вы киноман");
     }else{
      console.log("Ошибка");
     }
     }
     detectPersonalLevel();

     function showMyDB(hidden){
        if(!hidden){
           console.log(personalMovieDB);
        }
     }
     showMyDB(personalMovieDB.privat);
    //  console.log(personalMovieDB);

     function writeYourGenres(){
        for(let i =1; i<=3;i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i-1] = genre;
        }
     }
     writeYourGenres();


