import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {


  //створення класу
class Rectangle{
  //в конструктор передаємо значення які хочемо використовувати
  constructor(height,width){
    this.height= height;
    this.width = width;
  }
  //метод класу 
  calcArea(){
    return this.height * this.width;
  }
}

//створили наслідувальний клас,який бере значення з головного класу
//спочатку створюємо звичайний клас
//потім через extends вводимо назву класу який ми хочемо наслідувати
class ColoredRectangleWithText extends Rectangle{
  constructor(height,width,text,bgColor){
    //метод super допомогає нам не писати властивості які є в головному класі, а просто їх використовувати 
    super(height,width);
    this.text = text;
    this.bgColor =bgColor;
  }
showMyProps(){
  console.log(`Текст: ${this.text}, колір: ${this.bgColor}`);
}
}
//як і звичайно створюється новий об'єкт
const div = new ColoredRectangleWithText(25,10,"hello","red");
div.showMyProps();
console.log(div.calcArea());

//новий об'єкт зі значеннями 
const squre = new Rectangle(10,10);
const long = new Rectangle(20,100);
console.log(squre.calcArea());
console.log(long.calcArea());


});


