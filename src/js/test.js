import "/src/scss/style.scss";
"use strict";
window.addEventListener("DOMContentLoaded", () => {

   let cache = new WeakMap();

   function cacheUser(user){
    if(!cache.has(user)){
      cache.set(user, Date.now()); // Ключем є ОБ'ЄКТ користувача
    }
    return cache.get(user);
   }

   let lena = {
    name:'Elena'
   };
   let alex = {
    name:'Alex'
   };

   cacheUser(lena);
   cacheUser(alex);

   lena=null;

   console.log(cache.has(lena));
   console.log(cache.has(alex));


   //WeakSet
   //add,has,delete

   let massages = [
     { text: "Hello", from: "John" },
     { text: "World", from: "Alex" },
     { text: "...", from: "M" },
   ];

   let readMessages = new WeakSet();

   readMessages.add(massages[0]);
  //  readMessages.add(massages[1]);

   readMessages.add(massages[0]);//ігноруємо цей виклик 
    massages.shift();// видаляє перший елемент масиву
console.log(readMessages.has(massages[0]));
 
});
