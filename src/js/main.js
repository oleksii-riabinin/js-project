import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

  

//         const personalMovieDB = {
//         count:0,
//         movies: {

//         },
//         actors:{

//         },
//         genres: [],
//         privat:false,
// //зараз зробили наші функції як методи об'єкту
//         start: function(){
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         while (personalMovieDB.count=='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
//         },

//         rememberMyFilms: function(){
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
//      },

//      detectPersonalLevel:function(){
//   if(personalMovieDB.count<10){
//       console.log("Просмотрено мало фильмов");
//      }else if(personalMovieDB.count<=10 && personalMovieDB.count<30){
//       console.log("Вы класический зритель");
//      }else if(personalMovieDB.count<=30){
//       console.log("Вы киноман");
//      }else{
//       console.log("Ошибка");
//      }
//      },

//      showMyDB:function(hidden){
//         if(!hidden){
//            console.log(personalMovieDB);
//         }
//      },

//      writeYourGenres:function(){
//         for(let i =1; i<=3;i++){
            
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//             if(genre == '' || genre == null){
//                 console.log("Вы не ввели данные");
//                 i--;
//             }else{
//             personalMovieDB.genres[i-1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i)=>{
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//      },
// //зроби метод який буде перевіряти приватнійсть і якщо вона дорівнює false то виведе true і навпаки
//      toggleVisibleMyDB: function(){
//         if(personalMovieDB.privat){
//             personalMovieDB.privat= false;
//         }else{
//             personalMovieDB.privat = true;
//         }
//      }
//         };


    
  

// тут воно виведе спочатку 5,а вже потім додасть 1
let i = 5; alert(i++);//alert працює тільки в браузері
// //тут воно виведе одразу зменене число
let j = 5; alert(++j);

//коли ми працює з пустим масивом в такоми вигляді, то він буде себе приводити до пустого рядку ""
console.log([]+ false - null + true);//тут воно виведе NaN
console.log([]+1+2);//"12"

//виведе 2
let y = 1;
let x =y=2;//тут воно працює так:  до у присваюємо 2,а вже потім це значення присва.ємо до х.
alert(x);

alert("1"[0]);//"1"

//оператор &&(І) зупиняється на значенні false!!!
console.log(2&&1&&null&&0&&undefined);

//оператор ||(АБО) зупиняється на значенні true
console.log(0||2||1||null||0||undefined);

//коли ми пишемо !! то воно наступне значення за ним поверне булінове значення
console.log(!!(1&&2) === (1&&2));//тому виведе false  так як булінове значення не буде дорівнювати значенню з других дужок

//тут все працює так: спочатку ми перевіряємо яка дія повинна виконуватись першою(оператор І буде перевірятись першим
// а вже потім АБО)
//коли в нас в опраторі І будуть рівні то буде виводитись останне значення( в нашому випадку 3)
//потім перевіряємо null||3 і так як АБО зупиняється на правді то воно знову виведе 3
alert(null||2&&3||4);


const a=[1,2,3];
const b=[1,2,3];
console.log(a==b);//виведе false так як в нас це просто два контейнери які мають однакові значення

alert(+"Infinity");//виведе просто infinity але з типом данних number так як стоїть "+" попереду строки


