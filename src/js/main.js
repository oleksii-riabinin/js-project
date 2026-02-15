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


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    //створили метод який буде виводити рік народження та які мови знає людина
 showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
//функція яка виводить опит людини
function showExperience(plan) {
    const{exp}= plan.skills;
    return exp;
}
showExperience(personalPlanPeter);
//функція яка виводить строку де показується на скільки людина знає мови з об'єкту
function showProgrammingLangs(plan) {
    const progLangs = plan.skills.programmingLangs ;
if(Object.keys(progLangs).length ===0){
    return "";
}
let result = "";
for(let key in progLangs){
result+= `Язык ${key} изучен на ${progLangs[key]}\n`;
}
return result;     
}
showProgrammingLangs(personalPlanPeter);


