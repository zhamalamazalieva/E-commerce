import SideBar from '../function/sidebar.js';
import Product from '../function/product.js';

const bestSelling = () => {
    const section = document.createElement('section');
    const array = ['Kitchen','Meat and fish', 'Special nutrition','Pharmacy','Baby'];

    section.className = 'bestselling';
    section.innerHTML =  `
    <div class="container">
        <div class="bestselling__row row">
            <div class="col-3">
                ${SideBar('Best selling products', array, 'More products')}
            </div>
            <div class="col-9">
                <div class="row margin">
                    <div class="col-4">
                        ${Product([],'Product Title','Space for a small product description','1.48 USD','Buy now')}
                    </div>
                    <div class="col-4">
                        ${Product([],'Product Title','Space for a small product description','0.25 USD','Buy now')}
                    </div>
                    <div class="col-4">
                        ${Product([],'Product Title','Space for a small product description','2.70 USD','Buy now')}
                    </div>
                </div>
            </div>
        </div>  
    </div>
    `;
    document.body.append(section);
    return section.outerHTML;
};

bestSelling();