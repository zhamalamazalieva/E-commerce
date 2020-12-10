const Menu = (menuTitle, menuLink ) => {
    const div = document.createElement('div');
    div.className = 'header__menu menu';
    const arrayOfTitles = [
        'Bakery',
        'Fruit and vegetables',
        'Meat and fish', 'Drinks',
        'Special nutrition',
        'Kitchen',
        'Baby',
        'Pharmacy'];
    const newArray = arrayOfTitles.map((item) => {
        const h3 = document.createElement('h3');
        h3.className = 'menu__title';
        h3.innerHTML = `${item}
        <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.0332 11.6867L9.7732 8.94669C9.89737 8.82178 9.96706 8.65281 9.96706 8.47669C9.96706 8.30056 9.89737 8.13159 9.7732 8.00669L7.10654 5.34002"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
                        <ul class="menu__list">
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>
                            <li>${item}</li>                        
                        </ul>
        `;
        return h3;
    });
    div.innerHTML =    `${newArray.map((item) => item.outerHTML).join('')}`;
    return div.outerHTML;
};
export default Menu();