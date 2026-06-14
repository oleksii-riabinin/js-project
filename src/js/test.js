import "/src/scss/style.scss";
("use strict");
window.addEventListener("DOMContentLoaded", () => {
  //set

  const arr = ["Alex", "Oleg", "Alex"];

  const set = new Set(arr);
  //метод який додає значенння в масив
  set.add("Ivan");
  set.delete(value);
  set.has();
  set.clear();

  for (let value of set) console.log(value);
  //тут valueAgain просто дублює значення бо set  немає ключів
  set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
  });

  console.log(set);

  //функція яка робить вже відсортований звичайний масив
  function unique(arr) {
    return  Array.from(new Set(arr));
  }
  console.log(unique(arr));
});
