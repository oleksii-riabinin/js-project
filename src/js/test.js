import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {
  //1)Звичайна функція: this = window,но коли стоїть use strict = undefined
  function showThis() {
    console.log(this);
  }
  showThis();

  function showThis(a,b) {
    console.log(this);
    function sum(){
      console.log(this);
      return a+b;
    }
    console.log(sum());
  }
  
  showThis(4,5);


  //2)Контекст у методів об'єкту -сам об'єкт
  const obj ={
    a:20,
    b:15,
    sum:function(){
      console.log(this);
    }
  }
  obj.sum()


  //3)this в конструкторах і класах - це новий екземпляр обєкту (через new)
function User(name, id) {
  this.name = name;

  this.id = id;

  this.human = true;
}
const ivan = new User("Ivan", 28);
console.log(ivan);

//4) Ручне присваювання 
function sayName(surname){
  console.log(this);
  console.log(this.name + surname);
}
const user = {
  name:"John"
};
//наша функція отримала данні через ці дві властивості(різниця між цими властивостями це тільки виклик значеннь ) 
sayName.call(user,"Smith");
sayName.apply(user,['smith']);

function count(num){
  return this * num;
}
//властивість яка створює нову функцію,минулі не створюють нову функцію 
const double =count.bind(2);//стає заість this 
console.log(double(3));//наш num

});


