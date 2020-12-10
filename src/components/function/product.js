const Product = (imgSrc, produtTitle, productDescription, productPrice, productButton) => {
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
        <div class="product__info">
            <span class="product__name">${produtTitle}</span>
            <p class="product__description">${productDescription}</p>
            <div class="row space-between">
                <span class="product__price">${productPrice} USD</span>
                <button class="product__button btn-small btn--green">${productButton}</button>
            </div>
        </div>
    </div>
    `;
    return div.outerHTML;
};

export default Product;