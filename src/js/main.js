import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме


const p = document.querySelectorAll('p');
console.log(p);




//приклад як ще додати скрипти на сторінку
//script.async= false; - це означає що скрипти будуть йти один за одним
function loadScript (src){
  const script = document.createElement('script');
script.src=src;
script.async= false;
document.body.append(script);
}
loadScript("/src/js/main.js");
