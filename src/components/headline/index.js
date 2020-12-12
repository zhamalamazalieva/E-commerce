import Product from '../function/product.js';
import Title from '../function/title.js';
import {Products} from './const.js';
const Headline = () => {
    const section = document.createElement('section');
    section.className = 'headline';
    section.innerHTML =
    `
    <div class="container">
        ${Title('Current offers', 'Button')}
        <div class="headline__row row margin">
            <div class="col-3">
            ${Product(Products[0].img, Products[0].productDiscount, Products[0].productTitle, Products[0].productDescription, Products[0].productPrice, Products[0].productOldPrice, Products[0].productButton)}
            </div>
            <div class="col-3">
            ${Product(Products[1].img, Products[1].productDiscount, Products[1].productTitle, Products[1].productDescription, Products[1].productPrice, Products[1].productOldPrice, Products[1].productButton)}
            </div>
            <div class="col-3">
            ${Product(Products[2].img, Products[2].productDiscount, Products[2].productTitle, Products[2].productDescription, Products[2].productPrice, Products[2].productOldPrice, Products[2].productButton)}
            </div>
            <div class="col-3">
            ${Product(Products[3].img, Products[3].productDiscount, Products[3].productTitle, Products[3].productDescription, Products[3].productPrice, Products[3].productOldPrice, Products[3].productButton)}
            </div>
        </div>
    </div>
    `;
    return section.outerHTML;
    console.log('aihj')
};
export default Headline;