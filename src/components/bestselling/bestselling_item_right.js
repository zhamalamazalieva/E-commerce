const bestSellingRight = () => {
    const div = document.createElement('div');
    div.className = 'bestselling__item--right';
    div.innerHTML =
    `
    <div class="bestselling__wrapper">
        <div class="bestselling__img">
            <img alt="photo" src="./src/img/img.png">
        </div>
        <div class="bestselling__info">
            <span class="bestselling__name">Product Title</span>
            <p class="bestselling__description">Space for a small product description </p>
            <div class="row space-between">
                <span class="bestselling__price">1.48 USD</span>
                <button class="bestselling__button btn btn--green">Buy now</button>
            </div>
        </div>
    </div>
    `;
    return div.outerHTML;
};

export default bestSellingRight();