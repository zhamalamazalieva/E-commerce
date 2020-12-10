import SideBar from '../function/sidebar.js';
import Product from '../function/product.js';
import {MenuData, Products} from '../const/const.js';
const Farmers = () => {
    const section = document.createElement('section');
    const array = ['Carrots','Tomatoes','Potatoes','Chicken','Pork'];
    
    section.className = 'farmers';
    section.innerHTML = 
    `
    <div class="container">
    <div class="farmers__row row">
        <div class="col-3">
            ${SideBar(MenuData[2].MenuTitle, MenuData[2].ArrayOfList, MenuData[2].button)}
        </div>
        <div class="col-9">
            <div class="row margin">
                <div class="col-4">
                ${Product(Products[3].img,Products[3].productDiscount, Products[3].productTitle, Products[3].productDescription, Products[3].productPrice,Products[3].productOldPrice, Products[3].productButton)}
                </div>
                <div class="col-4">
                ${Product(Products[4].img,Products[4].productDiscount, Products[4].productTitle, Products[4].productDescription, Products[4].productPrice,Products[4].productOldPrice, Products[4].productButton)}
                </div>
                <div class="col-4">
                ${Product(Products[5].img,Products[5].productDiscount, Products[5].productTitle, Products[5].productDescription, Products[5].productPrice,Products[5].productOldPrice, Products[5].productButton)}
            </div>
            </div>
        </div>
    </div>  
</div>

    `;
    return section.outerHTML;

};
export default Farmers;