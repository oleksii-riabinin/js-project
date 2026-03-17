import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме


//події на мобілці

//touchstart - при натисканні
//touchmove - коли водимо по елементу
//touchend - коли прибираємо палець
//touchenter
//touchleave
//touchcancel

window.addEventListener("DOMContentLoaded", ()=>{

  const box =document.querySelector(".box");

  box.addEventListener('touchmove',(e)=>{
    e.preventDefault();
    //тут ми отримуємо коорлинати при наведенні
    console.log(e.targetTouches[0].pageX);

    console.log(e.touches);
    
  });
});

//властивості
//touches - видає нам список усіх пальців які зараз взаємодієють з екраном
//targetTouches - видає нам список усіх пальців які зараз взаємодієють з елементом
//changedTouches - список пальців які які беруть участь в цій події(це пальці які виконали якусь дію: наприклад коли прибрали з кнопки )