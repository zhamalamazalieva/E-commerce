import Top from '../secondpage/top/index.js';
const Vegetables = () => {
    const VegiPage = document.createElement('main');
    VegiPage.innerHTML =
    `
    ${Top()}
    `;
    return VegiPage;
};
export default Vegetables;