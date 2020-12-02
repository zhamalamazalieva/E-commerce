const Nav = () =>{
    const tagNav = document.createElement('nav');
    tagNav.className = 'header__nav nav';
    tagNav.innerHTML = 
    `
    <ul class="nav__menu menu">
        <li class="nav__item"><a class="nav__link">Blog</a></li>
        <li class="nav__item"><a class="nav__link">About us</a></li>
        <li class="nav__item"><a class="nav__link">Careers</a></li>
    </ul>
    `;
    return tagNav.outerHTML;

};

export default Nav();