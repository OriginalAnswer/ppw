window.addEventListener('scroll', () => {
    let targetY = document.querySelector('.homelogo').getBoundingClientRect().top; //타겟 top 위치
    // const h = document.querySelector('header');
    const homelogo = document.querySelector('.homelogo');
    const menuBtn = document.querySelector('.menu-btn');
    let y = window.scrollY;//현재 스크롤 위치
    if (y > targetY + 150) {
        // h.classList.remove('dpnone')
        // h.style.opacity = '1';
        homelogo.style.fontSize = '1.5em';
        menuBtn.style.fontSize = '1.5em';
    } 
    else {
        // h.classList.add('dpnone')
        homelogo.style.fontSize = '';
        menuBtn.style.fontSize = '';
    }
});