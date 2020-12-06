const Nav = () =>{
    const nav = document.createElement('nav');
    nav.className = 'header__nav nav';
    nav.innerHTML = 
    `
    <ul class="nav__menu menu">
        <li class="nav__item"><a class="nav__link">Blog</a></li>
        <li class="nav__item"><a class="nav__link">About us</a></li>
        <li class="nav__item"><a class="nav__link">Careers</a></li>
    </ul>
    `;
    return nav.outerHTML;

};

export default Nav();