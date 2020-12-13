import topTop from './top_top.js';
import Navigation from './navigation.js';

const Top = () => {
    const section = document.createElement('section');
    section.className = 'top';
    section.innerHTML = `
    <div class="container">
        <div class="top__column column">
        ${topTop}
        </div>
    </div>

    `;
     return section.outerHTML;
};
export default Top;