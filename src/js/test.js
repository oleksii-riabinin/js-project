

window.addEventListener("DOMContentLoaded", () => {
  //створюємо функцію яка виконує код з затримкою
  //першим аргументом іде сама функція
  //а другим затримка(пишемо в мілісекундах- де 1000мілісекунд=1секунді)
  //якщо треба ввести аргумет нашої функції то пишемо після затримки
  // let timerId = setTimeout(
  //   function (text) {
  //     console.log(text);
  //   },
  //   2000,
  //   "hello",
  // );

  //прибираємо нашу затримку і воно нічого не виведе
  // clearInterval(timerId);

  const btn = document.querySelector(".btn");
  let timerId,
    i = 0;

    //створив функцію якв буде рухати куб з лівого верхнього краю до нижнього правого 
    // і буде зупинятися коли дістаниться цього краю

  // function myAnimation() {
  //   const elem = document.querySelector(".box");
  //   let position = 0;

  //   const id = setInterval(frame, 10);
  //   function frame() {
      
  //   //якщо ми дістались 300px то наша анімація закінчується
  //     if (position == 300) {
  //       clearInterval(id);
  //     } else {//а поки не дісталась ми будемо додавати значання до позиції 
  //       position++;
  //       elem.style.top = position + "px";//це щоб воно писало не просто число, а число з px
  //       elem.style.left = position + 'px';
  //     }
  //   }
  // }


  //створив анімацію яка робить що наш куб ходить туди сюди
    function myAnimation() {
      const elem = document.querySelector(".box");
      let position = 0;
      let direction = 1;
      const id = setInterval(frame, 10);
function frame() {
    // Змінюємо позицію залежно від напрямку
    position = position + direction;

    // Оновлюємо стилі елемента
    elem.style.top = position + "px";
    elem.style.left = position + "px";

    //  чи дійшли ми до краю
    if (position >= 300) {
      direction = -1; // Змінюємо напрямок на "назад"
    } else if (position <= 0) {
      direction = 1;  // Змінюємо напрямок на "вперед"
    }
  }

    }
  btn.addEventListener('click',myAnimation);
});
