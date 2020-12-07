const Review = () => {
    const section = document.createElement('section');
    section.className = 'review';
    section.innerHTML =
    `
    <div class="review__row column">
    <div class="container">
        <div class="space-between">
            <h2 class="review__title">Our customers says</h2>
            <button class="review__button btn btn--gray">Button
            <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.0332 11.6867L9.7732 8.94669C9.89737 8.82178 9.96706 8.65281 9.96706 8.47669C9.96706 8.30056 9.89737 8.13159 9.7732 8.00669L7.10654 5.34002"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
            </svg>
            </button>
        </div>
    </div>
    <div class="slider">
        <div class="review__item">
            <p class="review__description">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
            <span class="review__author">Name and Surname</span>
            <div class="review__img">
                <img src="./src/img/jpg/avatar.jpg" alt="avatar">
            </div>
        </div>
    </div>
    </div>
    `;

    document.body.appendChild(section);
    return section.outerHTML;

};
Review();