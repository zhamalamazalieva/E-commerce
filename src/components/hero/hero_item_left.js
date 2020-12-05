const HeroItemLeft = () => {
    const heroItem = document.createElement('div');
    heroItem.className = 'hero__item hero__item--left';
    heroItem.innerHTML = 
    `
    <h2 class="hero__menu-title">Category menu</h2>
    <ul class="hero__menu menu">
        <li class="menu__item"><a class="menu__link">Bakery</a></li>
        <li class="menu__item"><a class="menu__link">Fruit and vegetables</a></li>
        <li class="menu__item"><a class="menu__link">Meat and fish</a></li>
        <li class="menu__item"><a class="menu__link">Drinks</a></li>
        <li class="menu__item"><a class="menu__link">Kitchen</a></li>
    </ul>
    <button class="btn btn--gray hero__button--category">More categories<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.0332 11.6867L9.7732 8.94669C9.89737 8.82178 9.96706 8.65281 9.96706 8.47669C9.96706 8.30056 9.89737 8.13159 9.7732 8.00669L7.10654 5.34002"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg></button>
    `;
    return heroItem.outerHTML;
};

export default HeroItemLeft();