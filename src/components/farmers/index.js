import SideBar from '../function/sidebar.js';
import Product from '../function/product.js';
const Farmers = () => {
    const section = document.createElement('section');
    const array = ['Carrots','Tomatoes','Potatoes','Chicken','Pork'];
    
    section.className = 'farmers';
    section.innerHTML = 
    `
    <div class="container">
    <div class="farmers__row row">
        <div class="col-3">
            ${SideBar('Best from Farmers', array, 'More products')}
        </div>
        <div class="col-9">
            <div class="row margin">
                <div class="col-4">
                ${Product([],'Product Title','Space for a small product description','0.48 USD','Buy now')}
                </div>
                <div class="col-4">
                ${Product([],'Product Title','Space for a small product description','3.55 USD','Buy now')}
                </div>
                <div class="col-4">
                ${Product([],'Product Title','Space for a small product description','0.45 USD','Buy now')}
                </div>
            </div>
        </div>
    </div>  
</div>

    `;
    document.body.append(section);
    return section.outerHTML;

};
export default Farmers;