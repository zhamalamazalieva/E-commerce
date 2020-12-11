import Product from '../function/product.js';
import Title from '../function/title.js';
import {Products} from '../const/const.js';
const Headline = () => {
    const section = document.createElement('section');
    section.className = 'headline';
    section.innerHTML =
    `
    <div class="container">
        ${Title('Section Headline', 'Button')}
        <div class="headline__row row margin">
            <div class="col-3">
            ${Product(Products[6].img, Products[6].productDiscount, Products[6].productTitle, Products[6].productDescription, Products[6].productPrice, Products[6].productOldPrice, Products[6].productButton)}
            </div>
            <div class="col-3">
            ${Product(Products[7].img, Products[7].productDiscount, Products[7].productTitle, Products[7].productDescription, Products[7].productPrice, Products[7].productOldPrice, Products[7].productButton)}
            </div>
            <div class="col-3">
            ${Product(Products[8].img, Products[8].productDiscount, Products[8].productTitle, Products[8].productDescription, Products[8].productPrice, Products[8].productOldPrice, Products[8].productButton)}
            </div>
            <div class="col-3">
            ${Product(Products[9].img, Products[9].productDiscount, Products[9].productTitle, Products[9].productDescription, Products[9].productPrice, Products[9].productOldPrice, Products[9].productButton)}
            </div>
        </div>
    </div>
    `;
    return section.outerHTML;
    console.log('aihj')
};
export default Headline;