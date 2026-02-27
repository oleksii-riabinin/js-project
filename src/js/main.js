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


    
  
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};


function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}
console.log(isOpen(restorantData.openNow))

//створюємо фунцію яка буде показувати чи менше або більше сумма деяких двої товарів
function isAverageLunchPriceTrue(fDish, sDish, average) {
    //тут ми усюди додаємо спереду "+"щоб можно було пистаи числові значення а не рядки
    //потім метод .slice мии прибираємо перший елемент та останній залишаючи тільки число 
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
//тут ми вже наші значення це з який масивів ми будемо брати числа
console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));



function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));
