const HeroBanner = (imgSrc, suptitle, title, button) => {
    const heroItem = document.createElement('div');
    heroItem.className = 'hero__item';
    const img = document.createElement('img');
    img.src = imgSrc;
    heroItem.innerHTML =
    `
                <div class="hero__img">${img.outerHTML}</div>
                <div class="hero__text">
                    <span class="hero__suptitle">${suptitle}</span>
                    <h2 class="hero__title">${title}</h2>
                    <button class="hero__button--recipe btn btn--green">${button}
                    <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.0332 11.6867L9.7732 8.94669C9.89737 8.82178 9.96706 8.65281 9.96706 8.47669C9.96706 8.30056 9.89737 8.13159 9.7732 8.00669L7.10654 5.34002"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                    </svg>
                    </button>
                </div>
            <div class="hero__opacity"></div>

    `;
    return heroItem.outerHTML;
};
export default HeroBanner;