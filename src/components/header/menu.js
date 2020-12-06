const Menu = () => {
    const div = document.createElement('div');
    div.className = 'header__menu menu';
    const arrayOfTitles = ['Bakery', 'Fruit and vegetables', 'Meat and fish', 'Drinks', 'Special nutrition', 'Kitchen', 'Baby','Pharmacy'];
    const arrayOfList = ['Chocolate', 'Caramel', 'Apple pie'];
    for (let i=0; i<8; i++){
        const ul = document.createElement('ul');
        ul.className = 'menu__list';
        ul.innerHTML = 
        `
        <h3 class="menu__title">${arrayOfTitles[i]}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.81348 6.53336L7.55348 9.27336C7.67838 9.39752 7.84735 9.46722 8.02348 9.46722C8.1996 9.46722 8.36857 9.39752 8.49348 9.27336L11.1601 6.60669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg></h3>
        <li class="menu__item"><a class="menu__link">${arrayOfList[0]}</a></li>
        <li class="menu__item"><a class="menu__link">${arrayOfList[1]}</a></li>
        <li class="menu__item"><a class="menu__link">${arrayOfList[2]}</a></li>
        `;
        div.append(ul);
    }   
    return div.outerHTML;
    console.log('tagNav');
};
export default Menu();