import FooterTop from './footer_top.js';
import FooterMiddle from './footer_middle.js';
import {FooterList, Product} from './const.js';
const Footer = () => {
    const footer = document.createElement('footer');
 
    footer.className = 'footer';
    footer.innerHTML = `
    <div class="container">
        <div class="footer__top row">
            <div class="col-3">
                ${FooterTop(FooterList[0].footerTitle, FooterList[0].ArrayOfList)}
            </div>
            <div class="col-3">
              ${FooterTop(FooterList[1].footerTitle, FooterList[1].ArrayOfList)}
            </div>
            <div class="col-3">
               ${FooterTop(FooterList[2].footerTitle, FooterList[2].ArrayOfList)}
            </div>
            <div class="col-3">
               ${FooterTop(FooterList[3].footerTitle, FooterList[3].ArrayOfList)}
            </div>
        </div>
        <div class="footer__middle row">
                ${FooterMiddle(Product[0].MiddleTitle, Product[0].ArrayOfList)}
        </div>
        <div class="footer__bottom">Copyright © 2020 petrbilek.com</div>
    </div>
    `;
    return footer;
};
 export default Footer;