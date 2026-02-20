import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

  

        const personalMovieDB = {
        count:0,
        movies: {

        },
        actors:{

        },
        genres: [],
        privat:false,
//зараз зробили наші функції як методи об'єкту
        start: function(){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count=='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
        },

        rememberMyFilms: function(){
          for(let i = 0;i<2;i++){
      const a = prompt("Один из последних просмотренных фильмов?","").trim(),
      b = prompt("Оцените его?", "");

      if(a != null && b != null && a != "" && b != "" && a.length<50){
          personalMovieDB.movies[a] = b;
          console.log('done')
      }else{
        console.log("error")
        i--;
      }
     }
     },

     detectPersonalLevel:function(){
  if(personalMovieDB.count<10){
      console.log("Просмотрено мало фильмов");
     }else if(personalMovieDB.count<=10 && personalMovieDB.count<30){
      console.log("Вы класический зритель");
     }else if(personalMovieDB.count<=30){
      console.log("Вы киноман");
     }else{
      console.log("Ошибка");
     }
     },

     showMyDB:function(hidden){
        if(!hidden){
           console.log(personalMovieDB);
        }
     },

     writeYourGenres:function(){
        for(let i =1; i<=3;i++){
            
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(genre == '' || genre == null){
                console.log("Вы не ввели данные");
                i--;
            }else{
            personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
     },
//зроби метод який буде перевіряти приватнійсть і якщо вона дорівнює false то виведе true і навпаки
     toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat= false;
        }else{
            personalMovieDB.privat = true;
        }
     }
        };


    
  


   



    





