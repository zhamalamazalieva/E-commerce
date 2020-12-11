import {Reviews} from '../const/const.js';
import Title from '../function/title.js';
// import Swiper from '../vendors/swiper.min.js';
const Review = (reviewsTitle,reviewsDescription, reviewsAuthor, reviewsImg) => {
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
            <p class="review__description">${Reviews[0].reviewsDescription}</p>
            <span class="review__author">${Reviews[0].reviewsAuthor}</span>
            <div class="review__img">
                <img src="./src/img/jpg/avatar.jpg" alt="avatar">
            </div>
        </div>
        <div class="review__item">
            <p class="review__description">${Reviews[1].reviewsDescription}</p>
            <span class="review__author">${Reviews[1].reviewsAuthor}</span>
            <div class="review__img">
                <img src="./src/img/jpg/avatar2.jpg" alt="avatar">
            </div>
        </div>
        <div class="review__item">
            <p class="review__description">${Reviews[1].reviewsDescription}</p>
            <span class="review__author">${Reviews[1].reviewsAuthor}</span>
            <div class="review__img">
                <img src="./src/img/jpg/avatar2.jpg" alt="avatar">
            </div>
        </div>
    </div>
  
    `;
    

};
export default Review;