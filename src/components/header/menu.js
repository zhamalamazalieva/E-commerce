const Menu = () => {
    const tagNav = document.createElement('nav');
    tagNav.className = 'nav__menu';
    tagNav.innerHTML = 
    `
    <ul class="nav__menu menu">
        <li class="nav__item"><a class="nav__link">Bakery</a>
            <ul class="dropdown__list">
                <li class="dropdown__item"><a class="dropwdown__link">Chocolate cake</a></li>
                <li class="dropdown__item"><a class="dropwdown__link">Caramel cake</a></li>
                <li class="dropdown__item"><a class="dropwdown__link">Apple pie</a></li>
            </ul>
        
        </li>
        <li class="nav__item"><a class="nav__link">Fruit and vegetables</a></li>
        <li class="nav__item"><a class="nav__link">Meat and fish</a></li>
        <li class="nav__item"><a class="nav__link">Drinks</a></li>
        <li class="nav__item"><a class="nav__link">Special nutrition</a></li>
        <li class="nav__item"><a class="nav__link">Kitchen</a></li>
        <li class="nav__item"><a class="nav__link">Baby</a></li>
        <li class="nav__item"><a class="nav__link">Pharmacy</a></li>
    </ul>
    `;
    
    return tagNav.outerHTML;
    console.log('tagNav');
};
export default Menu();