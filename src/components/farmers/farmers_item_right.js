const farmersRight = () => {
    const div = document.createElement('div');
    div.className = 'farmers__item--right';
    div.innerHTML =
    `
    <div class="farmers__wrapper">
    <div class="farmers__img">
        <img alt="" src="./src/img/img.png">
    </div>
    <div class="farmers__info">
        <span class="farmers__name">Product Title</span>
        <p class="farmers__description">Space for a small product description </p>
        <div class="row space-between">
            <span class="farmers__price">1.48 USD</span>
            <button class="farmers__button btn-small btn--green">Buy now</button>
        </div>
    </div>
</div>
    `;
    return div.outerHTML;
};
export default farmersRight();