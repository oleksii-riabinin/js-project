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


//функция яка перетворює масив в строку та виводить повідомлення
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    return 'Семья состоит из: ' + arr.join(' ');
}
console.log(showFamily(family));

//стрілочна функція яка виводить всі слова з нового рядку та пише всі сло в нижньому регистрі
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    arr.forEach(city => console.log(city.toLowerCase()));
}
standardizeStrings(favoriteCities);

//Метод який змінює порядок елементів в масиві(Тільки з масивами!)
let arr = ["aa","b", "c"];
let arrRevers = arr.reverse();
console.log(arrRevers);

//функція яка повертає рядок в зворотньому напрямку(через цикл).
const someString = 'This is some strange string';
function reverse(str) {
    let result = "";
if(typeof str !== "string"){
    return "Ошибка!"
}
for(let i = str.length-1; i>=0; i--){
result+= str[i];
}
return result;
}
console.log(reverse(someString));

//функція яка повертає рядок в зворотньому напрямку(через метод reverse()).
const someStringMas = 'This is some strange string';
function reverse(str) {
    if (typeof str !== "string") {
        return "Ошибка!";
    }
    return str
        .split("")   // робимо масив символів з рядку
        .reverse()   // перевертаємо масив
        .join("");   // збираємо назад у рядок
}
console.log(reverse(someStringMas));


//створюємо масиви валют 
const baseCurrencies = ['USD', 'EUR', 'USD'];
const additionalCurrencies = ['UAH', 'AAA', 'CNY'];
//функція приймає 1. два масива валют, 2. валюту якої не повинно бути при виводі(не обов'язково )
function availableCurr(arr, missingCurr) {
let result = "Доступные валюты:\n";
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    //через метод .filter робимо умову щоб при виводі виводились валюти які не дорівнюють валюти якої не повинно бути 
    const filteredArr = arr.filter(function(curr) {
        return curr !== missingCurr;
    });
    //працює до тих пір поки він не буде менше за відфільтровіні валюти і в результат додаються наші валюти які будуть переходити на новий рядок 
    for (let i = 0; i < filteredArr.length; i++) {
        result += filteredArr[i] + "\n";
    }
    return result;
}
//тут працює так що з початку виводяться значення з першого масиву, потім з другого і в кінці вже та валюта яку треба прибрати
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies],"AAA" ));


//метод який перебирає елементи та повертає умові і якщо якийсь елемент не пройшов умову то його не виводять(.filter)
const number = [1,6,8,3,9];
const result = number.filter(function(nechet){
    return nechet%2!==0;
});
console.log(result);
//через стрілочну функцію
const num = [1,2,5,6,8];
const resultNum = num.filter(n=> n > 2);
console.log(resultNum);