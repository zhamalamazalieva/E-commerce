const Navigation = () => {
    const ul = document.createElement('ul');
    ul.className = 'nav__list nav';
    ul.innerHTML = `
    <li class="nav__item"><a href="#" class="nav__link">Homepage</a></li>
    <li class="nav__item"><a href="#" class="nav__link"> / Fruit and vegetables</a></li>

    `;
    return ul.outerHTML;

};
export default Navigation();