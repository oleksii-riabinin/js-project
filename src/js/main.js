"use strict";

import "/src/scss/style.scss";

window.addEventListener("DOMContentLoaded", () => {
  //Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  //функція яка ставить для всіх елементів disply:none і проходить по кожному елементу і прибирає клас активності
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    //показує нам спочатку перший елемент
    tabsContent[i].classList.add("show", "fade"); //показує елемент
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active"); //додаємо клас активності
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    //дія натискання
    const target = event.target; //на який елемент натиснули

    // Перевіряємо: чи ми натиснули саме на кнопку таба, а не просто десь поруч
    if (target && target.classList.contains("tabheader__item")) {
      // Якщо так, перебираємо всі наші таби, щоб знайти порядковий номер того, на який натиснули
      tabs.forEach((item, i) => {
        if (target == item) {
          // Коли знайшли співпадіння
          hideTabContent(); // Спочатку все ховаємо
          showTabContent(i); // Показуємо контент, номер якого (i) збігається з номером кнопки
        }
      });
    }
  });

  //Timer
  const deadLine = "2026-05-20";
  //функція яка отримує різницю між датами
  function getTimeRemaining(endtime) {
    //отримаємо кількість мілисекунд
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      ((days = Math.floor(t / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (seconds = Math.floor((t / 1000) % 60)));
    }
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);

    const days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");

    updateClock();

    const timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadLine);

  //modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  //це працює лише не прешій кнопці
  // modalTrigger.addEventListener("click", () => {
  //   modal.classList.add("show");
  //   modal.classList.remove("hide");
  //   // modal.classList.toggle('show'); -- або так

  //   document.body.style.overflow = "hidden";
  // });

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    // modal.classList.toggle('show');
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
  modalCloseBtn.addEventListener("click", closeModal);

  //для всіх наших кнопок
  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  //створили те що коли ми натискаємо на зону поруч з модальним вікном то воно теж буде закриватись
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  //створили те що коли натискаємо на Escape то модальне вікно закриваеться
  //обробник подій який показує натискання клавіши
  document.addEventListener("keydown", (e) => {
    //подія в event яка показує що за кнопка натиснута
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  //функція яка відкриває модальне вікно коли ми доходимо до кінця сторінки
  //   function showModalByScroll() {
  //     if (
  //       window.pageYOffset + document.documentElement.clientHeight >=
  //       document.documentElement.scrollHeight - 1
  //     ) {
  //       openModal();
  //     }

  //   }

  //  window.addEventListener("scroll", showModalByScroll);

  //використовуємо класи для карток
  //в цьому класі маємо всі наші значення та також викликаємо метод який конвертує валюту з доларів в гривні
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 43;
      this.changeToUAN();
    }
    //метод конвертації валют
    changeToUAN() {
      this.price = this.price * this.transfer;
    }
    //метод який створює наші картки які приймають в себе всі наші значення
    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
              
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
            ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
          
    `;
      //додаємо наш елементна сторінку
      this.parent.append(element);
    }
  }
  //створили об'єкт який працює тут і зараз, він зробить дії і все, більше посилань ми не будемо на нього мати
  //він створюється без назв змінної 
  new MenuCard(
    "/src/img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item",
    "big",
  ).render();

  new MenuCard(
    "/src/img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    14,
    ".menu .container",
    "menu__item",
  ).render();

  new MenuCard(
    "/src/img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    21,
    ".menu .container",
    "menu__item",
  ).render();

  //forms
  const forms = document.querySelectorAll("form");
  //будемо виводити повідомлення
  const message = {
    loading: "Завантаження",
    success: "Дякуємо! Ми вам зателефонуєм",
    failure: "Щось пішло не так...",
  };
  //проходимось по всім нашим формам та викликаємо наш запит на сервер
  forms.forEach((item) => {
    postData(item);
  });

  //функція запиту на сервер
  function postData(form) {
    //цей обробник подій який працює кожен раз коли ми хочемо відправити форму
    form.addEventListener("submit", (e) => {
      //прибираємо дефолтні дії браузеру
      e.preventDefault();
      //створили новий блок, куди будемо записувати повідомлення
      const statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      statusMessage.textContent = message.loading;
      //додаємо наш елемент на сторінку
      form.append(statusMessage);

      //робимо наш запрос без перезавантаження сторінки
      const request = new XMLHttpRequest();
      //тут ми відправлємо наші данні на сервер,він знаходиться в папці htdocs в MAMP
      request.open("POST", "http://localhost/server.php");

      //головне щоб в наших формах, або інших інтерактивних частинах в html був атрибут name
      //бо без неього наш FormData нічого не знайде
      //коли працюємо з FormData  нам не треба робити заголовки
      //передали наші форми щоб їх зібрати в одне ціле,щоб не проходити по кожному елементу 
      const formData = new FormData(form);
      request.send(formData);
      //відслідковуємо кінцеву загрузку
      request.addEventListener("load", () => {
        if (request.status === 200) {
          //показуємо дані які повернув сервер
          console.log(request.response);
          //пишемо що все добре
          statusMessage.textContent = message.success;
          //скидаєм наші форми
          form.reset();
          //ставим час зникнення повідомлень
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
        } else {
          //якщо якісь помилки то виводим смс про помилку
          statusMessage.textContent = message.failure;
        }
      });
    });
  }

  

  //якщо в нас формати json
  // request.setRequestHeader('Content-type',"application/json");
  //коли працюємо з форматом json то треба заголовок
  // const object = {};
  // formData.forEach(function(value,key){
  //   object[key]=value;
  // });
  // const json= JSON.stringify(object);
  // request.send(json);
});
