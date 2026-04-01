import "/src/scss/style.scss";

window.addEventListener("DOMContentLoaded", ()=>{

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

});