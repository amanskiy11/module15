const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    alert(`Размер экрана: ${window.innerWidth} x ${window.innerHeight}`)
});

// Задание выполнено не совсем верно, т.к. window.innerWidth и window.innerHeight отображают размеры области просмотра (окна браузера), а в задании нужно было вывести размеры экрана. Для этого используются свойства window.screen.width и window.screen.height
// Вот хорошая статья на Хабре, где наглядно показаны различия между всеми этими размерами :)
// https://habr.com/ru/post/509258/