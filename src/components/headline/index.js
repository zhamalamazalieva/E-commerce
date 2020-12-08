import Product from '../function/product.js';
import Title from '../function/title.js';
const Headline = () => {
    const section = document.createElement('section');
    section.className = 'headline';
    section.innerHTML =
    `
    <div class="container">
        ${Title('Section Headline', 'Button')}
        <div class="headline__row row margin">
            <div class="col-3">
            ${Product([],'Product Title','Space for a small product description','4.00 USD','Buy now')}
            </div>
            <div class="col-3">
            ${Product([],'Product Title','Space for a small product description','5.48 USD','Buy now')}
            </div>
            <div class="col-3">
            ${Product([],'Product Title','Space for a small product description','2.05 USD','Buy now')}
            </div>
            <div class="col-3">
            ${Product([],'Product Title','Space for a small product description','1.25 USD','Buy now')}
            </div>
        </div>
    </div>
    `;
    document.body.append(section);
    return section.outerHTML;
    console.log('aihj')
};
Headline();