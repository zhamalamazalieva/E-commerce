const Menu = () => {
    const div = document.createElement('div');
    div.className = 'header__menu menu';
    const arrayOfTitles = ['Bakery', 'Fruit and vegetables', 'Meat and fish', 'Drinks', 'Special nutrition', 'Kitchen', 'Baby','Pharmacy'];
    // const arrayOfList = ['Chocolate', 'Caramel', 'Apple pie'];
    const newArray = arrayOfTitles.map((item) => {
        const h3 = document.createElement('h3');
        h3.className = 'menu__title';
        h3.innerHTML = item;
        return h3;
    });
    div.innerHTML =    `${newArray.map((item) => item.outerHTML).join('')}`;
    return div.outerHTML;
};
export default Menu();