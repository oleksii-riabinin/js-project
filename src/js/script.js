
// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",

    ]
};
//отримання наших елементів
const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list");
//видалення реклам з сайту
adv.forEach(item =>{
    item.remove();
});
//змінення тексту
genre.textContent = "драма";
//коли змінюємо щось через посилання потрібно щоб ззовні та в середині були різні лапки
poster.style.backgroundImage = "url('src/img/bg.jpg')";
// скрили наші елементи щоб було легше сортувати та працювати
movieList.innerHTML = "";
//сортуємо за алфавітом
movieDB.movies.sort();
//переписуємо наші елементи так щоб при виводі ще показувався їх індекс
movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
    <div class="delete"></div>
    </li>
    `;
});