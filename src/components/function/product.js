const Product = (imgSrc,productDiscount, produtTitle, productDescription, productPrice, productOldPrice, productButton) => {
    const div = document.createElement('div');
    div.className = 'product';
    const img = document.createElement('img');
    img.src = imgSrc;

    div.innerHTML =
    `
    <div class="product__wrapper">
        <div class="product__img">
            ${img.outerHTML}
        </div>
        <span class="product__discount">- ${productDiscount}%</span>
        <div class="product__info">
            <span class="product__name">${produtTitle}</span>
            <p class="product__description">${productDescription}</p>
            <div class="row space-between">
            <div class="column">
                <span class="product__price">${productPrice} USD</span>
                <span class="product__old-price">${productOldPrice}</span>
            </div>
                <button class="product__button btn-small btn--green">${productButton}</button>
            </div>
        </div>
    </div>
    `;
    return div.outerHTML;
};

export default Product;