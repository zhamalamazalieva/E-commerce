import SideBar from '../function/sidebar.js';
import Product from '../function/product.js';
import {MenuData, Products} from '../const/const.js';

const bestSelling = () => {
    const section = document.createElement('section');

    section.className = 'bestselling';
    section.innerHTML =  `
    <div class="container">
        <div class="bestselling__row row">
            <div class="col-3">
                ${SideBar(MenuData[1].MenuTitle, MenuData[1].ArrayOfList, MenuData[1].button)}
            </div>
            <div class="col-9">
                <div class="row margin">
                    <div class="col-4">
                    ${Product(Products[0].img,Products[0].productDiscount, Products[0].productTitle, Products[0].productDescription,Products[0].productPrice,Products[0].productOldPrice,  Products[0].productButton)}
                    </div>
                    <div class="col-4">
                    ${Product(Products[1].img,Products[1].productDiscount, Products[1].productTitle, Products[1].productDescription,Products[1].productPrice,Products[1].productOldPrice,  Products[1].productButton)}
                    </div>
                    <div class="col-4">
                    ${Product(Products[2].img,Products[2].productDiscount, Products[2].productTitle, Products[2].productDescription,Products[2].productPrice,Products[2].productOldPrice,  Products[2].productButton)}
                    </div>
                </div>
            </div>
        </div>  
    </div>
    `;
    return section.outerHTML;
};

export default bestSelling;