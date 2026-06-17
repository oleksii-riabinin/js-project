import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //батьківський клас
  class Rectangle {
    // constructor - це спеціальний метод, який запускається автоматично,
    // коли ти пишеш слово "new". Він "будує" початковий об'єкт.
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    //коли пишемо методи в класі то нам не потрібно писати function, а просто назву

    calcArea() {
      return this.height * this.width;
    }
  }
  //клас нащадок викликається через extends батько на якого посилаємося
  class ColoredRectangleWithText extends Rectangle {
    //пишемо усі значення
    constructor(height, width, text, bgColor) {
      //метод super()викликає конструктор батька
      //пишеться Завжди першим
      //дал вже пишемо значення нащадка
      super(height, width);
      this.text = text;
      this.bgColor = bgColor;
    }
    showMyProps() {
      console.log(`Text:${this.text},color:${this.bgColor}`);
    }
  }

  //створення і виклик наших екземплярів
  const div = new ColoredRectangleWithText(25, 50, "Hello", "red");
  const square = new Rectangle(10, 10);
  console.log(square.calcArea());
  div.showMyProps();
  console.log(div.calcArea());
  
});
