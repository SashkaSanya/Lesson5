/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
	movies: [
		"Лога123456789_123456789__123456789",
		"Лига справедливости",
		"Ба-ла лэнд",
		"Адержимость",
		"Скотт Пилигрим против...",
		'aaaaaaa'
	]
};

let advertisement = document.querySelectorAll('.promo__adv img');
let bg = document.querySelector('.promo__bg');
let genre = bg.querySelector('.promo__genre');
let list = document.querySelectorAll('.promo__interactive-item');
let movieList = document.querySelector('.promo__interactive-list');
let input = document.querySelector('.adding__input');
let button = document.querySelector('button');
// let ara = movieList.querySelectorAll('li');
let films = movieDB.movies;
let add = document.querySelector('.add');
let checkbox = add.querySelectorAll('input')[1];

console.log(add.querySelectorAll('input')[1].checked);


advertisement.forEach(item => {
	item.remove();
});
genre.textContent = 'драма';
bg.style.backgroundImage = 'url("img/bg.jpg")';

let movieListCreate = () => {
	movieList.innerHTML = '';
	films.sort();
	films.forEach((film, i) => {
		if (film.length > 23) {
			film = films[i].slice(0, 23) + '...';
		}
		movieList.innerHTML += `
		<li class="promo__interactive-item">${i + 1}. ${film}
			<div class="delete"></div>
		</li>
		`;
	});
	// ara = movieList.querySelectorAll('li');
};

movieListCreate();

button.addEventListener('click', function (e) {
	e.preventDefault();
	if (input.value.length != 0) {

		films.push(input.value);
		movieListCreate();
		input.value = '';
		if (checkbox.checked) {
			console.log("Добавляем любимый фильм");

		}
	}
});





// advertisement.forEach(item => {
// 	item.remove();
// });

let deleteFilm = document.querySelectorAll('div.delete');
let removeFilm = (buttonClick, i) => {
	console.log(buttonClick);
	buttonClick.addEventListener('click', function (e) {
		deleteFilm = document.querySelectorAll('div.delete');
		films.splice(i, 1);
		deleteFilm[i].remove();
		deleteFilm = document.querySelectorAll('div.delete');
		movieListCreate();
		console.log(deleteFilm);
	});

};

for (let i = 0; i < films.length; i++) {

	// console.log(deleteFilm[i]);
	removeFilm(deleteFilm[i], i);
}


