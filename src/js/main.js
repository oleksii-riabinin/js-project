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


let arr = [1,2,3,6,8];

//удаляет последний єлемент масива
arr.pop();

// // добавление єлемента в конец масива
arr.push(10);
console.log(arr);

// //перебор значений в масиве
for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
}
// //или(не работает в об'ектах)
for(let value of arr){
    console.log(value);
}

//гибкий перебор элементов
arr.forEach(function(item,i,arr){
    console.log(`${i}: ${item} внутри масива ${arr}`);
});

const str = "pivo, sneki, voda, 99";
//метод который показывает через какой знак пишем элементы 
const products = str.split(",");
//метод который меняет знак при выводе элементов 
console.log(products.join(";"));

//метод который сщртирует элементы в масиве(хорощо работает со строчными)но может и с другими типами
 const sortirovka = ["a","c","e", "b", 0, "B"];
 sortirovka.sort();
 console.log(sortirovka);

//шаблон котрый работает с сортировкой других типов в масиве
const sortOthersType = [3,6,1,10];
sortOthersType.sort(compareNum);
console.log(sortOthersType);
function compareNum(a,b){
    return a-b;
}