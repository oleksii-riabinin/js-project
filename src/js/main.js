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

const usdCurs = 28;
const discount = 0.9;

function convert (amout,curs){
  return curs * amout;
}

function promotion (result){
  console.log(result * discount);
}

promotion (convert(500, usdCurs));


function test (){
  for (let i = 0; i<5; i++){
    console.log(i);
    if (i ===3) return
  }
  console.log("done");
}
test ();

function doNothing(){};
console.log(doNothing()===undefined);
