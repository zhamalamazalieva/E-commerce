import topTop from './top_top.js';
import Navigation from './navigation.js';
import topBottom from './top_bottom.js';

const Top = () => {
    const section = document.createElement('section');
    section.className = 'top';
    section.innerHTML = `
    <div class="container">
        <div class="top__column column">
        ${Navigation}
        ${topTop}
        </div>
    </div>

    `;
     return section.outerHTML;
};
export default Top;