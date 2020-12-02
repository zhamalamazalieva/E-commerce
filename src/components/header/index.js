import Contact from './contact.js';
import Nav from './nav.js';
import Logo from './logo.js';
import Search from './search.js';
import Systems from './systems.js';
import Menu from './menu.js';


const Header = () => {
    const tagHeader = document.createElement('header');
    tagHeader.className = 'header'
    tagHeader.innerHTML = 
    `
    <div class="container">
    <div class="header__top">
        ${Contact}
        ${Nav}
    </div>
    <div class="header__middle">
        ${Logo}
        ${Search}
        ${Systems}
    </div>
    <div class="header__bottom">
        ${Menu}
    </div>
    </div>
    `;
    document.body.appendChild(tagHeader);
    return tagHeader;
}
Header ();
