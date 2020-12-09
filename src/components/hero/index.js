import SideBar from '../function/sidebar.js';
import HeroItemRight from './hero_item_right.js';

const Hero = () =>{
    const tagSection = document.createElement('section');
    const array = ['Bakery','Fruit and vegetables','Meat and fish','Drinks','Kitchen']
    tagSection.className = 'hero';
    tagSection.innerHTML =
    `
    <div class="container">
        <div class="hero__row row">
            <div class="col-3">
                ${SideBar('Category menu',array, 'More categories')}
            </div>
            <div class="col-9">
                ${HeroItemRight}
            </div>
        </div>
    </div>
    `;

    return tagSection;
};

export default Hero;
