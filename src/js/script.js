


'use strict';

//все буде працювати коли дом структура буде завантажена document.addEventListener('DOMContentLoaded',()=>{
document.addEventListener('DOMContentLoaded',()=>{
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",

    ]
};

const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector('.adding__input'),
    checkbox =addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event)=>{
        //прибираємо дефолтні дії браузера
       event.preventDefault(); 

       let newFilm= addInput.value;
       const favorite= checkbox.checked
       //умова якщо це значення true
       if(newFilm){
        //ця умова показує якщо строка більше ніж 21 символ то мb замінюємо її на ...
        if(newFilm.lenght>21){
            newFilm=`${newFilm.substring(0,22)}...`;
        }
        if(favorite){
            console.log("Добовляем любимый фильм")
        }
      movieDB.movies.push(newFilm);
       sortArr(movieDB.movies);
        createMovieList(movieDB.movies,movieList);

       }
        event.target.reset();
    });
    
//видалення реклам з сайту
const deleteAdv = (arr)=>{
    arr.forEach(item =>{
    item.remove();
});
};

const makeChanges = ()=>{
genre.textContent = "драма";
//коли змінюємо щось через посилання потрібно щоб ззовні та в середині були різні лапки
poster.style.backgroundImage = "url('src/img/bg.jpg')";
};

const sortArr = (arr)=>{
arr.sort();
};

function createMovieList (films,parent){
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i)=>{
    parent.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
    </li>
    `;
});

//перебираємо всі корзинки і при натисканні прибирає елемент
document.querySelectorAll('.delete').forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        btn.parentElement.remove();
        movieDB.movies.splice(i,1);
        createMovieList(films,parent);

    });
});
}
deleteAdv(adv);
makeChanges();
createMovieList(movieDB.movies,movieList);
});

