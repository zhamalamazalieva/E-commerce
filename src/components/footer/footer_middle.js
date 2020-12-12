const FooterMiddle = (MiddleTitle, ArrayOfList) => {
    const div = document.createElement('div');
    div.className = 'footer__middle';
    div.innerHTML = `
    <h2 class="footer__title">${MiddleTitle}</h2>
    <ul class="footer__tags tags">
        ${ArrayOfList.map(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.setAttribute('href', '#');
            a.innerHTML = item;

            a.className = 'tags__link';
            li.className = 'tags__item';

            li.append(a);
            console.log(ArrayOfList)
            return li.outerHTML;

        }).join('')}
    
    </ul>
    `;
    return div.outerHTML;
};
export default FooterMiddle;