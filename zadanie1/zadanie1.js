const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
    function toggle(id) {
        const mySvg = document.getElementById(id)
        if (mySvg.getAttribute('display') === 'none') {
            mySvg.setAttribute('display', 'block')
        } else {
            mySvg.setAttribute('display', 'none')
        }
    }
    toggle('id01');
    toggle('id02');
})