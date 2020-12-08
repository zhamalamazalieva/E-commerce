const Title = (title, button) => {
    const div = document.createElement('div');
    div.className = 'section__row';
    div.innerHTML = 
    `
    <h2 class="section__title">${title}</h2>
    <button class="section__button btn">${button}
    <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.0332 11.6867L9.7732 8.94669C9.89737 8.82178 9.96706 8.65281 9.96706 8.47669C9.96706 8.30056 9.89737 8.13159 9.7732 8.00669L7.10654 5.34002"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
    </svg>
    </button>
    `;
    return div.outerHTML;
};
export default Title;