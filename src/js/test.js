import "/src/scss/style.scss";
("use strict");
window.addEventListener("DOMContentLoaded", () => {
  //Оператор орцианальной цепочки(?.)

  const box = document.querySelector(".box");
  const block = document.querySelector(".block");
  console.log(block);
  if(block){
  console.log(block.textContent);
  }

  //наш оператор проверяет значение слева от себя и если оно имеет значение null или undefined
  //то он остонавливает операцию и возращает undefined
  //если без него и без обычного условия то выведет ошибку
  // через которую остольной код после нее не будет виден
  //РАБОТАЕТ ТОЛЬКО НА ЧТЕНИЕ КОНТЕНТА,ЕСЛИ ПОПРОБОВАТЬ ВПИСАТЬ В НЕГО ЧТО-ТО ТО БУДЕТ ОШИБКА
  block?.textContent = "123"; //БУДЕТ ОШИБКА
  console.log(block?.textContent);
  console.log(1 + 2);

  //тут ми маємо об'єкт(наприклад не ми писали а прийшов з серверу)
  const userData = {
    name: "Ivan",
    age: null,
    say: function(){
      console.log("Hello");
    }
  };
  userData.say();
  //перевіряємо чи існує такий метод 
  userData.helo?.()
    if(userData && userData.skills && userData.skills.js){
  console.log(userData.skills.js);
    }
  //якщо нам потрібно щось вивезти, а ми цього не маємо в нашому об'єкті
  //то щоб не писати великі умови ми можемо скористатися оператором орцианальной цепочки(?.)
  console.log(userData.skills?.js);
});
