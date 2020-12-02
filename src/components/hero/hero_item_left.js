const HeroItemLeft = () => {
    const tagDiv = document.createElement('div');
    tagDiv.className = 'hero__item hero__item--left';
    tagDiv.innerHTML = 
    `
    <h class="hero__title">Category menu</h>
    <ul class="hero__nav nav">
        <li class="nav__item"><a class="nav__link">Bakery</a></li>
        <li class="nav__item"><a class="nav__link">Fruit and vegetables</a></li>
        <li class="nav__item"><a class="nav__link">Meat and fish</a></li>
        <li class="nav__item"><a class="nav__link">Drinks</a></li>
        <li class="nav__item"><a class="nav__link">Kitchen</a></li>
    </ul>
    <button class="btn btn--gray hero__button"><span>More categories</span></button>
    `;
    return tagDiv.outerHTML;
};

export default HeroItemLeft();