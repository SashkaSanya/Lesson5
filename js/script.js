/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ба-ла лэнд",
		"Адержимость",
		"Скотт Пилигрим против..."
	]
};

let advertisement = document.querySelectorAll('.promo__adv img');
let bg = document.querySelector('.promo__bg');
let genre = bg.querySelector('.promo__genre');
let list = document.querySelectorAll('.promo__interactive-item');
let arr = movieDB.movies.sort();


console.log(advertisement);

advertisement.forEach(item => {
	item.remove();
});

genre.textContent = 'драма';

bg.style.backgroundImage = 'url(img/bg.jpg)';

arr.forEach((item, i) => {
	list[i].textContent = `${i + 1}. ${item}`;
});

