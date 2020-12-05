import bestSellingLeft from './bestselling_item_left.js';
import bestSellingRight from './bestselling_item_right.js'
const bestSelling = () => {
    const section = document.createElement('section');
    section.className = 'bestselling';
    section.innerHTML =  `
    <div class="container">
        <div class="bestselling__row row">
            <div class="col-3">
                ${bestSellingLeft}
            </div>
            <div class="col-9">
                <div class="row margin">
                    <div class="col-4">
                        ${bestSellingRight}
                    </div>
                    <div class="col-4">
                       ${bestSellingRight}
                    </div>
                    <div class="col-4">
                       ${bestSellingRight}
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