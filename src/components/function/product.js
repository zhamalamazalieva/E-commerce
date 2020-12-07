const Product = (img, title, description, price, button) => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML =
    `
    <div class="product__wrapper">
        <div class="product__img">
            ${img}
        </div>
        <div class="product__info">
            <span class="product__name">${title}</span>
            <p class="product__description">${description}</p>
            <div class="row space-between">
                <span class="product__price">${price}</span>
                <button class="product__button btn-small btn--green">${button}</button>
            </div>
        </div>
    </div>
    `;
    return div.outerHTML;
};

export default Product;