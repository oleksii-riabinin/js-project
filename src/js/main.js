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


    
  


   const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
console.log(shoppingMallData);


function isBudgetEnough(data) {

    let totalArea = 0;

    // 1. Рахуємо площу всіх магазинів
    for (let i = 0; i < data.shops.length; i++) {
        totalArea += data.shops[i].width * data.shops[i].length;
    }

    // 2. Обʼєм
    const totalVolume = totalArea * data.height;

    // 3. Вартість опалення
    const totalCost = totalVolume * data.moneyPer1m3;

    // 4. Перевірка бюджету
    if (totalCost <= data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
   
}
    
console.log(isBudgetEnough(shoppingMallData));






function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    //використвання термінального оператору(?...:)-працює як if
    //до ? це умова, потім що виведе, та  після : в іншому випадку виведе(else)
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students));