const bestSellingLeft = () => {
    const div = document.createElement('div');
    div.className = 'bestselling__item bestselling__item--left';
    div.innerHTML = 
    `
    <h2 class="bestselling__menu-title">Best selling products</h2>
    <ul class="bestselling__menu menu">
        <li class="menu__item"><a class="menu__link">Kitchen</a></li>
        <li class="menu__item"><a class="menu__link">Meat and fish</a></li>
        <li class="menu__item"><a class="menu__link">Pharmacy</a></li>
        <li class="menu__item"><a class="menu__link">Special nutriation</a></li>
        <li class="menu__item"><a class="menu__link">Baby</a></li>
    </ul>
    <button class="btn btn--gray bestselling__button--category">More products<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.0332 11.6867L9.7732 8.94669C9.89737 8.82178 9.96706 8.65281 9.96706 8.47669C9.96706 8.30056 9.89737 8.13159 9.7732 8.00669L7.10654 5.34002"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg></button>
    `;
    return div.outerHTML;
};

export default bestSellingLeft();