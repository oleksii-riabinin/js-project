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

  console.log("Запрос даних...");

  //Promise
  //resolve-каже типу що усе пройшло чудово
  //reject-каже типу що щось не вийшло
  const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Подготовка...");
      const product = {
        name: "TV",
        price: 2000,
      };

      resolve(product);
    }, 2000);
  });

  //приймає наші значення які є позитивними(resolve)
  req.then((product) => {
    setTimeout(() => {
      product.status = "order";
      console.log(product);
    }, 2000);
  });

  req
    .then((product) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          product.status = "order";
          resolve(product);
        }, 2000);
      });
    })
    .then((data) => {
      data.modify = true;
      return data;
    })
    .then((data) => {
      console.log(data);
    });

  req
    .then((product) => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          product.status = "order";
          reject();
        }, 2000);
      });
    })
    .then((data) => {
      data.modify = true;
      return data;
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.error("Помилка");
    });

  req
    .then((product) => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          product.status = "order";
          resolve(product);
        }, 2000);
      });
    })
    .then((data) => {
      data.modify = true;
      return data;
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.error("Помилка");
    })
    .finally(() => {
      console.log("Finally");
    });

  const test = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), time);
    });
  };

  Promise.all([test(1000), test(2000)]).then(() => {
    console.log("ALL");
  });

  Promise.race([test(1000), test(2000)]).then(() => {
    console.log("ALL");
  });

  // test(1000).then(()=> console.log('1000 ms'));
  // test(2000).then(() => console.log("2000 ms"));

  new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
  })
    .then(function (result) {
      // (**)

      console.log(result); // 1
      return result * 2;
    })
    .then(function (result) {
      // (***)

      console.log(result); // 2
      return result * 2;
    })
    .then(function (result) {
      console.log(result); // 4
      return result * 2;
    })
    .then(function (result) {
      console.log(result);
    });

  //методи перебору масиву (повертають новий масив )

  //filter - повертає значення які підійшли до умови
  const names = ["Ivan", "Anna", "Ksenia", "Voldemart"];
  //name в аргкменті функції це кожен наш елемент в масиві
  const shortNames = names.filter(function (name) {
    return name.length < 5;
  });
  console.log(shortNames);

  //map - дозволяє змінювати елементи в масиві
  const answers = ["IvAn", "ANna", "HellO"];
  const result = answers.map((item) => {
    return item.toLocaleLowerCase();
  });
  console.log(result);

  // every(якщо всі елементи будуть підходити умові то він виведе true)
  // /some(якщо хочаб один елемент буде підходити умові то він виведе true)
  const some = [2, "sds", "sdds"];
  console.log(some.some((item) => typeof item === "number"));
  console.log(some.every((item) => typeof item === "number"));
  
  //reduce -збирає масив в єдине ціле 
  const arr = [3,2,4,1,6];
                            // 0     3
                            // 3     2
                            // 6     4
  //якщо ми ставимо третій аргумент то це початкове значення 
  const arrRes= arr.reduce((sum,current)=>sum + current,3);
  console.log(arrRes);

  const products = ["apple", "pear","plum"]
  const productsRes = products.reduce((sum,current)=>`${sum}, ${current}`);
  console.log(productsRes);


  const obj ={
  ivan:'persone',
  ann:"persone",
  dog: "animal",
  cat: "animal",
  };
//метод об'єкту який робить з об'єкту матрицю (масив в масиві)
  const newArr = Object.entries(obj)
  //тут item це наші масиви 
  .filter(item =>item[1]==="persone")
  //а тут ми повртаємо тільки перші елементи 
  .map(item=>item[0]);
  console.log(newArr);



  
});
