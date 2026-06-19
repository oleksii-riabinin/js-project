import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {
  const inputUa = document.querySelector("#ua"),
    inputUSD = document.querySelector("#usd");

  // Вішаємо обробник події 'input'. Він спрацьовує ЩОРАЗУ, коли користувач
  // вводить або видаляє хоча б один символ в інпуті.
  inputUa.addEventListener("input", () => {

    //Створюємо об'єкт запиту (нашого "кур'єра", який піде на сервер)
    const request = new XMLHttpRequest();

    // request.open(method,url , async,login, pass);
    //метод open він налаштовує наш запит
    request.open("GET", "/src/js/current.json");

    //Вказуємо заголовки. Кажемо серверу: "Ми очікуємо, що ти пришлеш нам JSON"
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    
    //відправляємо запит а сервер
    request.send();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        console.log(request.response);
        // Перетворюємо рядок на JS-об'єкт
        const data = JSON.parse(request.response);
        inputUSD.value = (+inputUa.value / data.current.usd).toFixed(2);
      } else {
        inputUSD.value = "Щось не так!";
      }
    });
    // Подія 'load' спрацьовує ТІЛЬКИ ТОДІ, коли запит вже повністю і успішно завершився
    request.addEventListener("load", () => {
      if (request.status === 200) {
        console.log(request.response);
        const data = JSON.parse(request.response);
        inputUSD.value = (+inputUa.value / data.current.usd).toFixed(2);
      } else {
        inputUSD.value = "Щось не так!";
      }
    });
    // status
    // status.Text
    // response
    // readyState
  });
});
