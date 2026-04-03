import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", ()=>{
//Tabs
const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent =document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

//функція яка ставить для всіх елементів disply:none і проходить по кожному елементу і прибирає клас активності
function hideTabContent(){
  tabsContent.forEach(item =>{
    item.classList.add('hide');
    item.classList.remove('show','fade');
  });
  tabs.forEach(item =>{
    item.classList.remove("tabheader__item_active");
  });
}

function showTabContent(i=0){//показує нам спочатку перший елемент 
  tabsContent[i].classList.add('show','fade');//показує елемент 
  tabsContent[i].classList.remove('hide');
    tabs[i].classList.add("tabheader__item_active");//додаємо клас активності
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click',(event)=>{//дія натискання
  const target = event.target;//на який елемент натиснули

  // Перевіряємо: чи ми натиснули саме на кнопку таба, а не просто десь поруч
  if(target && target.classList.contains('tabheader__item')){
    // Якщо так, перебираємо всі наші таби, щоб знайти порядковий номер того, на який натиснули
    tabs.forEach((item,i)=>{
      if(target==item){// Коли знайшли співпадіння
        hideTabContent();// Спочатку все ховаємо
        showTabContent(i);// Показуємо контент, номер якого (i) збігається з номером кнопки
      }
    });
  }
});


//Timer
const deadLine = '2026-05-20';
//функція яка отримує різницю між датами
function getTimeRemaining(endtime){
  //отримаємо кількість мілисекунд
  let days,hours,minutes,seconds;
  const t = Date.parse(endtime) - Date.parse(new Date());
  if(t<=0){
    days=0;
    hours=0;
    minutes=0;
    seconds=0;
  }else{

    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((t / 1000 / 60) % 60),
    seconds = Math.floor((t / 1000 ) % 60);
  }
  return{
  'total':t,
  'days':days,
  'hours':hours,
  'minutes':minutes,
  'seconds': seconds

  };
}

function getZero(num){
  if(num>=0 && num <10){
    return `0${num}`;
  }else{
    return num;
  }
}

function setClock(selector,endtime){
  const timer = document.querySelector(selector);



  const days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds");

  updateClock();

  const timeInterval = setInterval(updateClock, 1000);


function updateClock(){
  const t = getTimeRemaining(endtime);
  days.innerHTML = getZero(t.days);
  hours.innerHTML = getZero(t.hours);
  minutes.innerHTML = getZero(t.minutes);
  seconds.innerHTML = getZero(t.seconds);

  if(t.total <=0){
    clearInterval(timeInterval);
  }
}
}

setClock('.timer',deadLine);
});
