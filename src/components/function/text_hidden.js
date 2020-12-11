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
}
export default textHidden;

