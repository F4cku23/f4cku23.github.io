
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

  let abrir = document.querySelector('.abrir');
  let cerrar = document.querySelector('.cerrar');
  let visibilidad = document.querySelector('.menu_bar');

  abrir.addEventListener('click', ()=>{
    visibilidad.classList.add('visible');
    
    abrir.style.display='none';
  })

  cerrar.addEventListener('click', ()=>{
    visibilidad.classList.remove('visible');
    abrir.style.display='block';
  })
