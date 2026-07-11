import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {
//   const inputUa = document.querySelector("#ua"),
//     inputUSD = document.querySelector("#usd");

//   // Вішаємо обробник події 'input'. Він спрацьовує ЩОРАЗУ, коли користувач
//   // вводить або видаляє хоча б один символ в інпуті.
//   inputUa.addEventListener("input", () => {
//     //Створюємо об'єкт запиту (нашого "кур'єра", який піде на сервер)
//     const request = new XMLHttpRequest();

//     // request.open(method,url , async,login, pass);
//     //метод open він налаштовує наш запит
//     request.open("GET", "/src/js/current.json");

//     //Вказуємо заголовки. Кажемо серверу: "Ми очікуємо, що ти пришлеш нам JSON"
//     request.setRequestHeader("Content-type", "application/json; charset=utf-8");

//     //відправляємо запит а сервер
//     request.send();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         console.log(request.response);
//         // Перетворюємо рядок на JS-об'єкт
//         const data = JSON.parse(request.response);
//         inputUSD.value = (+inputUa.value / data.current.usd).toFixed(2);
//       } else {
//         inputUSD.value = "Щось не так!";
//       }
//     });
//     // Подія 'load' спрацьовує ТІЛЬКИ ТОДІ, коли запит вже повністю і успішно завершився
//     request.addEventListener("load", () => {
//       if (request.status === 200) {
//         console.log(request.response);
//         const data = JSON.parse(request.response);
//         inputUSD.value = (+inputUa.value / data.current.usd).toFixed(2);
//       } else {
//         inputUSD.value = "Щось не так!";
//       }
//     });
//     // status
//     // status.Text
//     // response
//     // readyState
//   });

//   console.log("Запрос даних...");

//   //Promise
//   //resolve-каже типу що усе пройшло чудово
//   //reject-каже типу що щось не вийшло
//   const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Подготовка...");
//       const product = {
//         name: "TV",
//         price: 2000,
//       };

//       resolve(product);
//     }, 2000);
//   });

//   //приймає наші значення які є позитивними(resolve)
//   req.then((product) => {
//     setTimeout(() => {
//       product.status = "order";
//       console.log(product);
//     }, 2000);
//   });

//   req
//     .then((product) => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           product.status = "order";
//           resolve(product);
//         }, 2000);
//       });
//     })
//     .then((data) => {
//       data.modify = true;
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//     });

//   req
//     .then((product) => {
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           product.status = "order";
//           reject();
//         }, 2000);
//       });
//     })
//     .then((data) => {
//       data.modify = true;
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(() => {
//       console.error("Помилка");
//     });

//   req
//     .then((product) => {
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           product.status = "order";
//           resolve(product);
//         }, 2000);
//       });
//     })
//     .then((data) => {
//       data.modify = true;
//       return data;
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch(() => {
//       console.error("Помилка");
//     })
//     .finally(() => {
//       console.log("Finally");
//     });

//   const test = (time) => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(), time);
//     });
//   };

//   Promise.all([test(1000), test(2000)]).then(() => {
//     console.log("ALL");
//   });

//   Promise.race([test(1000), test(2000)]).then(() => {
//     console.log("ALL");
//   });

//   // test(1000).then(()=> console.log('1000 ms'));
//   // test(2000).then(() => console.log("2000 ms"));

//   new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000); // (*)
//   })
//     .then(function (result) {
//       // (**)

//       console.log(result); // 1
//       return result * 2;
//     })
//     .then(function (result) {
//       // (***)

//       console.log(result); // 2
//       return result * 2;
//     })
//     .then(function (result) {
//       console.log(result); // 4
//       return result * 2;
//     })
//     .then(function (result) {
//       console.log(result);
//     });

//   const films = [
//     {
//       name: "Titanic",
//       rating: 9,
//     },
//     {
//       name: "Die hard 5",
//       rating: 5,
//     },
//     {
//       name: "Matrix",
//       rating: 8,
//     },
//     {
//       name: "Some bad film",
//       rating: 4,
//     },
//   ];

//   function showGoodFilms(arr) {
//     return arr.filter((film) => film.rating >= 8);
//   }
//   console.log(showGoodFilms(films));

//   function showListOfFilms(arr) {
//     let nameFilm = arr.map((film) => {
//       return film.name;
//     });
//     return nameFilm.join(", ");
//   }
//   console.log(showListOfFilms(films));

//   function setFilmsIds(arr) {
//     const addId = arr.map((item, num) => {
//       item.id = num;
//       return item;
//     });

//     return addId;
//   }
//   console.log(setFilmsIds(films));

//   const tranformedArray = setFilmsIds(films);

//   function checkFilms(arr) {
//       return arr.every(film => film.id || film.id === 0)
//   }
//   console.log(checkFilms(tranformedArray));


//   const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//   const positive= data.filter((item)=>{
//   return item.amount >0;
// })
// .reduce((sum,item)=>{
// return sum + item.amount;
// },0);
// return positive;
// };
// console.log(getPositiveIncomeAmount(funds));
// const getTotalIncomeAmount = (data) => {

//   if (data.some((item)=>item.amount<0)){
//     return data.reduce((sum,item)=>{
//       return sum + item.amount;
//     },0);
//   }else{
//     return getPositiveIncomeAmount;
//   }
// };

// console.log(getTotalIncomeAmount(funds));

// localStorage.setItem("number",5);//додаємо значення 
// localStorage.removeItem('number');//видаляємо елемент
// localStorage.clear();//очищаємоо повністю
// console.log(localStorage.getItem("number"));//отримуємо значення

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if(localStorage.getItem("isChecked")){
  checkbox.checked = true;
}

    if (localStorage.getItem("bg") === "changed") {
      form.style.backgroundColor = "red";
    }

  checkbox.addEventListener("change",()=>{
    localStorage.setItem("isChecked", true);
  });

  change.addEventListener("click",()=>{

    if(localStorage.getItem("bg")==='changed'){
      localStorage.removeItem("bg");
      form.style.backgroundColor = "#fff";
    }else{
      localStorage.setItem("bg","changed");
      form.style.backgroundColor = "red";
    }
  });

  const person ={
    name: "Alex",
    age: 25
  };

  const serializedPerson = JSON.stringify(person);
  localStorage.setItem("alex",serializedPerson);
  console.log(JSON.parse(localStorage.getItem("alex")));


  
});


