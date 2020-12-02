const Contact = () =>{
    const tagUl = document.createElement('ul');
    tagUl.className = 'header__list list'
    tagUl.innerHTML = `
        <li class="list__item"><a class="list__link">Chat with us</a></li>
        <li class="list__item"><a class="list__link">+420 336 775 664</a></li>
        <li class="list__item"><a class="list__link">info@freshnesecom.com</a></li>
    `;
    return tagUl.outerHTML;
};

export default Contact();


