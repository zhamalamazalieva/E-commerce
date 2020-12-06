import farmersLeft from './farmers_item_left.js';
import farmersRight from './farmers_item_right.js';
const Farmers = () => {
    const section = document.createElement('section');
    section.className = 'farmers';
    section.innerHTML = 
    `
    <div class="container">
    <div class="farmers__row row">
        <div class="col-3">
            ${farmersLeft}
        </div>
        <div class="col-9">
            <div class="row margin">
                <div class="col-4">
                    ${farmersRight}
                </div>
                <div class="col-4">
                    ${farmersRight}
                </div>
                <div class="col-4">
                    ${farmersRight}
                </div>
            </div>
        </div>
    </div>  
</div>

    `;
    document.body.append(section);
    return section.outerHTML;

};
Farmers();