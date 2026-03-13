import "/src/sass/style.scss";
 "use strict"; //работаем в современном режиме

function pow (x,n){
  let result = 1;
  for(let i =0;i<n;i++){
    result*=x;
  }
  return result;
}
//Рекурсія - функція яка запускає сама себе поки не дійде до базового випадку
//пошук степення через рекурсію
function pow (x,n){
  //база
if(n ===1){
  return x;
}else{
  //2 * 2^3
  return x* pow(x,n-1);
}
}
console.log(pow(2,4));


let students = {
  js:[{
    name:"John",
    progress:100
  },
  {
    name:"Ann",
    progress:60
  }],

  html:{
    basic:[{
      name:"Peter",
      progress:20
    },
    {
      name:"Ann",
      progress:18
    }],
    pro:[{
      name:"Same",
      progress:10
    }],
    //якщо додати не масив а об'єкт то перший метод не спрацює
    //а спрацює тільки метод який був зробленний через рекурсію
    semi:{
      students:[{
        name:"test",
        progress:110
      }]
    }
  
  }
};

//пошук середнього прогрессу з усього об'єкту
 function getTotalProgressByIteration(data){
  let total =0;
  let students =0;
  //метод об'єктів який дозволяє отримати масив значеннь цього об'єкту(Object.value)

  //перебор кожного значення в об'єкті
  for(let course of Object.values(data)){
    //метод який повертає true якщо об'єкт є масивом 
    //i false якщо ні (Array.isArray())
    if(Array.isArray(course)){
      //перебирає кількість студентів
      students += course.length;

      for(let i = 0; i<course.length;i++){
        //витягаємо прогресс і додаємо його
        total+=course[i].progress;
      }
    }else{
      for(let subCourse of Object.values(course)){
        students += subCourse.length;
         for(let i = 0; i<subCourse.length;i++){
        //витягаємо прогресс і додаємо його
        total+=subCourse[i].progress;
      }
      }
    }

  }
  return total / students;
 }
 console.log(getTotalProgressByIteration(students));


//пошук середнього прогрессу з усього об'єкту через рекурсію
 function getTotalProgressByRecursion(data){
    if(Array.isArray(data)){
      //перебирає кількість студентів
      let total = 0;

      for(let i = 0; i<data.length;i++){
        //витягаємо прогресс і додаємо його
        total+=data[i].progress;
      }
      return [total, data.length];
    }else{
      let total = [0,0];

      for( let subData of Object.values(data)){
        const subDataArr = getTotalProgressByRecursion(subData);
        total[0]+= subDataArr[0];
        total[1]+= subDataArr[1];
      }
      return total
    }
 }   
const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);

//пошук факторіалу через рекурсію
function factorial(number) {
  if(typeof number != "number" || !Number.isInteger(number)){
    return "Не целое число";
  }
  if(number>=1){
    return number * factorial(number-1);
  } else{
    return 1;
  }

}
//пошук факторіалу через цикл
function factorial(number) {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    return "Не целое число";
  }
  if (number === 0) {
    return 1;
  }
  let result = 1;
  
  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(4));