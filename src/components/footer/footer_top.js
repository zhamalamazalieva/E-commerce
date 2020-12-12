const FooterTop = (footerTitle, ArrayOfList) => {
    const div = document.createElement('div');
    div.className = 'footer__item';
    div.innerHTML = `

            <h2 class="footer__title">${footerTitle}</h2>
            <ul class="footer__list list">


            ${ArrayOfList.map(item => {
                const li = document.createElement('li')
                const a = document.createElement('a')
    
                li.className = 'list__item'
                a.className = 'list__link'
    
                a.setAttribute('href', '#')
                a.innerHTML = item


                li.append(a)
               
    
                return li.outerHTML
            }).join('')}
    
            </ul>

    `;

    return div.outerHTML;
};
export default FooterTop;