const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    alert(`Размер экрана: ${window.innerWidth} x ${window.innerHeight}`)
})