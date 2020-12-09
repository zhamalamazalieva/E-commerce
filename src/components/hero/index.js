import MenuData from '../const/const.js';
import SideBar from '../function/sidebar.js';
import HeroItemRight from './hero_item_right.js';

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
                ${HeroItemRight}
            </div>
        </div>
    </div>
    `;

    return tagSection;
};

export default Hero;
