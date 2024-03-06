'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project'); //해당하는 모든 요소들을 배열로 반환
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    console.log(event.target.dataset.category);
    //전체 카테고리를 묶고있는 categories를 불러왔기때문에 카테고리가 아닌 곳을 눌러도 null이 반환됨. 
    //그래서 null일때 함수를 종료해주는 함수를 추가 
    if (filter == null) {
        return; //함수를 종료한다
    }

    handleActiveSelection(event.target);
    filterProjects(filter);
});

function handleActiveSelection(target) {
    // active 메뉴를 재설정
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

function filterProjects(filter) {
    // 프로젝트 필터링
    projectsContainer.classList.add('anim-out');

    projects.forEach((project) => {
        console.log(project.dataset.type);
        if(filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    setTimeout(()=>{
        projectsContainer.classList.remove('anim-out');    
    }, 250)
}
