import SideBar from '../function/sidebar.js';
import {MenuData, Banner} from './const.js';
import HeroBanner from './hero_item_right.js';

const Hero = () =>{
    const tagSection = document.createElement('section');
    tagSection.className = 'hero';
    tagSection.innerHTML =
    `
    <div class="container">
        <div class="hero__row row">
            <div class="col-3">
                ${SideBar(MenuData[0].MenuTitle, MenuData[0].ArrayOfList, MenuData[0].button)}
            </div>
            <div class="col-9">
                <div class="hero__wrapper row">
                    <div class="col-6">
                        ${HeroBanner(Banner[0].imgSrc, Banner[0].suptitle, Banner[0].title, Banner[0].button)}
                    </div>
                    <div class="col-6">
                        ${HeroBanner(Banner[1].imgSrc, Banner[1].suptitle, Banner[1].title, Banner[1].button)}
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    return tagSection.outerHTML;
};

export default Hero;
