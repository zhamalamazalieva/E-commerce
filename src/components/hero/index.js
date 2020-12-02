import HeroItemLeft from './hero_item_left.js';
const Hero = () =>{
    const tagSection = document.createElement('section');
    tagSection.className = 'hero';
    tagSection.innerHTML =
    `
    <div class="container">
        <div class="hero__row row">
            <div class="col-3">
                ${HeroItemLeft}
            </div>
        </div>
    </div>
    `;
    document.body.appendChild(tagSection);
    return tagSection;
};

Hero();
