const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerRect) {
        header.classList.add('header--dark')
    } else {
        header.classList.remove('header--dark')}
})

