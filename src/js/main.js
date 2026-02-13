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

//тут если мы меняем значение а в новом объекте то оно и меняется в старом 
const obj ={
    a:5,
    b:1
};
const copy = obj;// передает ссылку
copy.a=10;
console.log(copy);
console.log(obj);

//Метод который добовляет значения одного объект в другой(1зн: куда, 2зн: что отпровляем )
const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};
const add = {
    d:17,
    e:20
};
console.log(Object.assign(numbers, add));

//Метод которій копирует МАСИВ
const oldArray = ["a","b","c"];
const newArray = oldArray.slice();
newArray[1]= 2;
console.log(newArray);
console.log(oldArray);

//ИЛИ через оператор разворота 
const array =["a","b"];
const newAaray = [...array];
newAaray[0]= 1;
console.log(newAaray);
console.log(array);

//оператор разворота,добовляет значения одного масива в другой масив (...)
const video =["youtube", "vimeo", "rutube"],
      blogs =["wordpress","blogger","livejournal"],
      internet= [...video, ...blogs, "inst"];
      console.log(internet);

// оператор разворота в функции
function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num =[2,5,7];
log(...num);

//оператор разворота в объектах
const q = {
    one:1,
    two:2
};
const newQ = {...q};
q.one = 3;
console.log(newQ);
console.log(q);