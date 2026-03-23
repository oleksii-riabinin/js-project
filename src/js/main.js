import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

//1)Перевірка числа на парність
function isEven(number){
  if(number%2===0){
    return true;
  }else{
    return false;
  }
}
console.log(isEven(3));

//2. Сума чисел
function sumTo(n){
  let sum=0;
  for(let i = 0; i<=n;i++){
    sum += i;
  }
  return sum;
}
console.log(sumTo(5));

//3. Розворот рядка
function reverseString(str){
  let string = str.split("");
  let revers = string.reverse();

return string.join("");
}

console.log(reverseString("hello"));

//4. Факторіал через цикл
function factorial(n){
  let result = 1;
  for(let i =1; i<=n;i++){
    result *= i;
  }
  return result;
}

console.log(factorial(5));

//5. Порахувати голосні
function countVowels(str){
  let golosni = "aeiou";
  let count = 0;
  
  for(let i =0; i<str.length;i++){
    if(golosni.includes(str[i].toLowerCase())){
      count++;
    }
  }
  return count;
}
console.log(countVowels("javascript"));

//6. Найбільше число в масиві
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(findMax([3,4,6,8,0]));

//7. Найменше число в масиві
function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([3,4,6,8,1]));

//8. Видалити дублікати
function removeDuplicates(arr){
    let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;

  }
console.log(removeDuplicates([1,2,2,3,4,4]));

//9. Перевірка паліндрома
function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
console.log(isPalindrome("level"));

//10. Порахувати слова
function countWords(str) {
  let words = str.trim().split(" ");
  return words.length;
}
console.log(countWords("Hello world from JS"));

//11. Середнє число масиву
function average(arr) {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}
console.log(average([10,20,30,40,50]));