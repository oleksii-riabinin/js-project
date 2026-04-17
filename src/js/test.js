import "/src/scss/style.scss";
("use strict");
window.addEventListener("DOMContentLoaded", () => {
  // function User(name,id){
  //   this.name = name;
  //   this.id=id;
  //   this.human=true;
  //   this.hello= ()=>{
  //     console.log(`Hello ${this.name}`);
  //   }
  // }

  // User.prototype.exit = function(name){
  // console.log(`Користувач ${this.name} пішов`);
  // }
  // const ivan = new User('Ivan',28);
  // const alex = new User('Alex',20);
  // console.log(ivan);
  // console.log(alex);

  // ivan.hello();
  // alex.hello();
  // ivan.exit();


  // Правило: Назва конструктора ЗАВЖДИ пишеться з Великої літери!
  function User(name, id) {
    // 'this' вказує на поточний порожній об'єкт, який створюється прямо зараз.
    // Записуємо унікальні властивості для КОЖНОГО користувача (беруться з параметрів)
    this.name = name;
    this.id = id;

    // Це жорстко задана властивість. У всіх користувачів human завжди буде true
    this.human = true;

    // МЕТОД ВСЕРЕДИНІ КОНСТРУКТОРА:
    // Мінус: Ця функція створюється ЗАНОВО (копіюється) для кожного нового об'єкта.
    // Якщо буде 1000 користувачів, буде 1000 копій цієї функції в пам'яті.
    this.hello = () => {
      console.log(`Hello ${this.name}`);
    };
  }

  // 2. ДОДАВАННЯ МЕТОДУ ЧЕРЕЗ ПРОТОТИП (prototype)
  // Прототип — це "спільна бібліотека" для всіх об'єктів типу User.
  // Плюс: Цей метод створюється ЛИШЕ ОДИН РАЗ. Усі об'єкти просто посилаються на нього. Це сильно економить пам'ять!
  User.prototype.exit = function () {
    console.log(`Користувач ${this.name} пішов`);
  };

 
  // Слово 'new' робить : воно створює новий об'єкт {}, каже, що 'this' — це цей об'єкт, і автоматично його повертає.
  const ivan = new User("Ivan", 28);
  const alex = new User("Alex", 20);

  // Дивимось, що вийшло
  console.log(ivan); 
  console.log(alex); 


  ivan.hello(); // Виведе: "Hello Ivan"
  alex.hello(); // Виведе: "Hello Alex"

  // Викликаємо метод з ПРОТОТИПУ
  ivan.exit();
});


