
/* nav scroll */
window.addEventListener('scroll', ()=>{
    let nav=document.querySelector('nav');

    nav.classList.toggle('nav-scroll', window.scrollY>0);
})

/* typed js */
let typed = new Typed('.typed-text', {
    strings: ['Jr web developer PHP', 'Trainee Python | Django'],
    typeSpeed: 50,
    backSpeed: 50,
    fadeOut: true,
    loop: true
  });

  let menuBar = document.querySelector('.menu_bar');
  let btn_menu = document.querySelector('.menu-button');

  btn_menu.addEventListener('click', ()=>{
    
  })