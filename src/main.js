// 메뉴 배경 색 바꾸기
const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > headerRect) {
        header.classList.add('header--dark')
    } else {
        header.classList.remove('header--dark')}
})

// 홈화면 투명하게 만들기
const homeContainer = document.querySelector('.home__container');
const homeRect = home.offsetHeight;
document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeRect;
})

// 화살표 버튼 동작
const arrow = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeRect/2) {
        arrow.classList.add('arrow--appear')
    } else {
        arrow.classList.remove('arrow--appear')}
})

//토글버튼
const toggleBtn = document.querySelector('.header__toggle');
const menu =  document.querySelector('.header__menu');
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('visible')
})

//메뉴 클릭 시 메뉴 사라지기
menu.addEventListener('click', () => {
    console.log('dd');
    menu.classList.remove('visible');
})

