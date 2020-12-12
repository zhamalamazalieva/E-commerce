import Contact from './contact.js';
import Nav from './nav.js';
import Logo from './logo.js';
import Search from './search.js';
import Systems from './systems.js';
import Menu from './menu.js';
import { MenuData } from './const.js';


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
    

    const ul = document.querySelector('.searchbar__list');
    const h3 = document.querySelector('.searchbar__title');
     h3.addEventListener('click', () => {
         ul.classList.toggle('is-active');
     });

     const dropdown = () => {
        const dropdownList = document.querySelectorAll('.menu__list');
        const li = document.querySelectorAll('.menu__item');
        dropdownList.forEach((item) =>
            item.addEventListener('click', () => {
                item.classList.toggle('is-active')
        }))
    }
    dropdown();

    const headerBottom = () => {
        const ul = document.querySelectorAll('.menu__list');
        const h3 = document.querySelectorAll('.menu__title');

        h3.forEach((item, index) => {
            item.addEventListener('click', (event) =>{
                event.target.classList.toggle('is-active');
                h3.forEach((e, i) => {
                    if (i != index) e.classList.remove('is-active');
                });
                ul.forEach((e, i) => {
                    if (i != index) e.classList.remove('is-active');
                });
                ul[index].classList.toggle('is-active');
            });
        });
    };
    headerBottom();
     return tagHeader;

}
export default Header;

