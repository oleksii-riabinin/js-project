import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

//         let numberr0fFilms;
//         function start(){
//         numberr0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//         while (numberr0fFilms=='' || numberr0fFilms == null || isNaN(numberr0fFilms)){
//         numberr0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     }
//         }
//         start();

//         const personalMovieDB = {
//         movies: {

//         },
        
//         actors:{

//         },

//         genres: [],

//         privat:false,

//         count:numberr0fFilms
//         };

    
  

//      function rememberMyFilms (){
//           for(let i = 0;i<2;i++){
//       const a = prompt("Один из последних просмотренных фильмов?","").trim(),
//       b = prompt("Оцените его?", "");

//       if(a != null && b != null && a != "" && b != "" && a.length<50){
//           personalMovieDB.movies[a] = b;
//           console.log('done')
//       }else{
//         console.log("error")
//         i--;
//       }
//      }
//      }
//      rememberMyFilms();

   

//      function detectPersonalLevel(){
//   if(personalMovieDB.count<10){
//       console.log("Просмотрено мало фильмов");
//      }else if(personalMovieDB.count<=10 && personalMovieDB.count<30){
//       console.log("Вы класический зритель");
//      }else if(personalMovieDB.count<=30){
//       console.log("Вы киноман");
//      }else{
//       console.log("Ошибка");
//      }
//      }
//      detectPersonalLevel();

//      function showMyDB(hidden){
//         if(!hidden){
//            console.log(personalMovieDB);
//         }
//      }
//      showMyDB(personalMovieDB.privat);
//     //  console.log(personalMovieDB);

//      function writeYourGenres(){
//         for(let i =1; i<=3;i++){
//             const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//             personalMovieDB.genres[i-1] = genre;
//         }
//      }
//      writeYourGenres();

//1
function getCoupeNumber(num) {
  // перевірка типу і цілості
  if (typeof num !== "number" || !Number.isInteger(num) || num < 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  // перевірка діапазону
  if (num === 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  }
  // основна формула
  return Math.ceil(num / 4);
}
console.log(getCoupeNumber(7));

//2
function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}
function second(){
    console.log(2);
}
first();
second();
//3
//callback function
function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
     console.log("Я прошел этот урок ");
}
learnJS("JavaScript", done)

//4
function calculateVolumeAndArea(a) {
    let str ='';
    if(typeof a !="number"|| a<0 || !Number.isInteger(a)){
        return "При вычислении произошла ошибка";
    }
    str=`Объем куба: ${a*a*a}, площадь всей поверхности: ${6*a*a}`;
    return str;
}
console.log(calculateVolumeAndArea(4))