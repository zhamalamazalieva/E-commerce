const textHidden = () => {
    const p = document.querySelectorAll('.product__description');
    p.forEach((item, index) => {
        const arrayOfLetters = item.textContent.split('');
        if(arrayOfLetters.length > 50){
            p[index].style.overflow = 'hidden';
            item.addEventListener('click', () => {
                p[index].classList.toggle('is-active')
            });
        }

    });
    
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    // slidesPerGroup:1,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        dynamicBullets:true
    },
    grabCursor:true,
  });
}
export default textHidden;

