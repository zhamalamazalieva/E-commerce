import Title from '../function/title.js';
const Review = () => {
    const section = document.createElement('section');
    section.className = 'review';
    section.innerHTML =
    `
    <div class="review__row column">
    <div class="container">
       ${Title('Our customers says','Button')}
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
    <div class="slider">
      <div class="review__item">
        <p class="review__description">“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</p>
        <span class="review__author">Name and Surname</span>
        <div class="review__img">
            <img src="./src/img/jpg/avatar.jpg" alt="avatar">
        </div>
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
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        slidesToScroll:1,
        centerMode: true,
      })
    return section.outerHTML;

};
export default Review;