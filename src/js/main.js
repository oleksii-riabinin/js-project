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

  //дія натискання
  tabsParent.addEventListener("click", (event) => {
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
  const deadLine = "2026-09-02";
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

    let timeInterval;
    updateClock();
    timeInterval = setInterval(updateClock, 1000);
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
    modal = document.querySelector(".modal");
  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  //для всіх наших кнопок
  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  //створили те що коли ми натискаємо на зону поруч з модальним вікном то воно теж буде закриватись
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
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

  const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };

  // getResource("http://localhost:3000/menu")
  // .then(data =>{
  //   data.forEach(({img,altimg,title,descr, price}) =>{
  //     new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  //   });
  // });
  //Бібліотека axios
  axios.get("http://localhost:3000/menu").then((data) => {
    //отримуємо саме об'єкт і більше нічого зайвого
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container",
      ).render();
    });
  });

  //Forms
  const forms = document.querySelectorAll("form");
  //будемо виводити повідомлення
  const message = {
    loading: "/src/icons/spinner.svg",
    success: "Дякуємо! Ми вам зателефонуєм",
    failure: "Щось пішло не так...",
  };
  //проходимось по всім нашим формам та викликаємо наш запит на сервер
  forms.forEach((item) => {
    bingPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });

    return await res.json();
  };

  //функція запиту на сервер
  function bingPostData(form) {
    //цей обробник подій який працює кожен раз коли ми хочемо відправити форму
    form.addEventListener("submit", (e) => {
      //прибираємо дефолтні дії браузеру
      e.preventDefault();
      //створили новий блок, куди будемо записувати повідомлення
      const statusMessage = document.createElement("img");
      //додаємо атрибут для зображення
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display: block;
      margin:0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);
      //головне щоб в наших формах, або інших інтерактивних частинах в html був атрибут name
      //бо без нього наш FormData нічого не знайде
      //коли працюємо з FormData  нам не треба робити заголовки
      //передали наші форми щоб їх зібрати в одне ціле,щоб не проходити по кожному елементу
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //data-це те що нам поверне наш сервер
      //якщо у нас не JSON формат пишемо метод text() щоб повернулися нормальні дані
      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          //пишемо що все добре
          showThanksModal(message.success);
          //скидаєм наші форми

          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    //наша стара форма
    const prevModalDialog = document.querySelector(".modal__dialog");
    //робимо її скритою та відкриваємо
    prevModalDialog.classList.add("hide");
    openModal();
    //створення блоку подяки
    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");

    thanksModal.innerHTML = `
    <div class ="modal__content">
    <div class = "modal__close"data-close>×</div>
    <div class="modal__title">${message}</div>
    `;

    //додаємо у наш батьківський елемент
    document.querySelector(".modal").append(thanksModal);
    //через 4сек наша форма подяки закриється і повернеться стара форма
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }

  //Slides (варіант 2)
  const slides = document.querySelectorAll(".offer__slide"),
  slider = document.querySelector(".offer__slider"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    total = document.querySelectorAll("#total"),
    current = document.querySelector("#current"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    slidesField = document.querySelector(".offer__slider-inner"),
    width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

      if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
      } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
      }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
        dots = [];
  indicators.classList.add("carousel-indicators");

  indicators.style.cssText = `
      position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;

  slider.append(indicators);

  for(let i = 0; i < slides.length;i++){
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to',i+1);
    dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: green;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
    `;
    if(i==0){
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener("click", () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex == slides.length){
      slideIndex = 1;
    }else {
      slideIndex++;
    }

    if(slides.length<10){
      current.textContent =`0${slideIndex}`;
    }else{
      current.textContent = slideIndex;
    }

    dots.forEach(dot =>dot.style.opacity ='.5');
    dots[slideIndex-1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

        if (slides.length < 10) {
          current.textContent = `0${slideIndex}`;
        } else {
          current.textContent = slideIndex;
        }

            dots.forEach((dot) => (dot.style.opacity = ".5"));
            dots[slideIndex - 1].style.opacity = 1;
  });
  //Slider(варіант 1)

  // const slides = document.querySelectorAll(".offer__slide"),
  //   prev = document.querySelector(".offer__slider-prev"),
  //   next = document.querySelector(".offer__slider-next"),
  //   total = document.querySelectorAll("#total"),
  //   current = document.querySelector("#current"),
  //   slidesWrapper = document.querySelector(".offer__slider-wrapper"),
  //   slidesField = document.querySelector(".offer__slider-inner"),
  //   width = window.getComputedStyle(slidesWrapper).width;

  // let slideIndex = 1;

  // showSlides(slideIndex);

  //     if (slides.length < 10) {
  //       total.textContent = `0${slides.length}`;
  //     } else {
  //       total.textContent = slides.length;
  //     }

  // function showSlides(n){
  //   if(n>slides.length){
  //     slideIndex = 1;
  //   }
  //   if(n<1){
  //     slideIndex=slides.length;
  //   }

  //   slides.forEach(item => item.style.display = 'none');

  //   slides[slideIndex-1].style.display = 'block';

  //     if (slides.length < 10) {
  //       current.textContent = `0${slideIndex}`;
  //     } else {
  //       current.textContent = slideIndex;
  //     }
  // }

  // function plusSlides(n){
  //   showSlides(slideIndex+=n);
  // }

  // prev.addEventListener("click",()=>{
  //   plusSlides(-1);
  // });

  //   next.addEventListener("click", () => {
  //     plusSlides(1);
  //   });
});
