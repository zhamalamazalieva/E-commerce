const Contact = () =>{
    const ul = document.createElement('ul');
    ul.className = 'header__list list'
    ul.innerHTML = `
        <li class="list__item"><a class="list__link">Chat with us</a></li>
        <li class="list__item"><a class="list__link">+420 336 775 664</a></li>
        <li class="list__item"><a class="list__link">info@freshnesecom.com</a></li>
    `;
    return ul.outerHTML;
};

export default Contact();


