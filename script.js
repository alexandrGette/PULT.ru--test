let allLink = document.querySelectorAll('.products__link');
let image = document.querySelector('.products__img');
let activeClass = 'active';


for (const link of allLink) {
  link.addEventListener('mouseenter',(e)=>{
    for (const link of allLink) {
      link.classList.remove(activeClass);
    }
    link.classList.add(activeClass);
    
    image.src = link.dataset.src 
  })
}







const swiper = new Swiper('.slider', {
    direction: 'horizontal',
    loop: true,   
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed:700,
    slidesPerView: 1,
    
    pagination:{
        el:'.slider__pagination',
        bulletActiveClass:'slider__bullet_active',
        bulletClass:'slider__bullet',
        clickable: true,
    }
  });