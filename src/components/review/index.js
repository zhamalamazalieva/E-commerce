import {Reviews} from './const.js';
import Title from '../function/title.js';
const Review = (reviewsDescription, reviewsAuthor) => {
    const section = document.createElement('section');
    section.className = 'review';
    section.innerHTML =
    `
   
<div class="container">
       ${Title('Our customers says','Button')}
    <div class="review__row column">

        <div class="swiper-container swiper__slider">

         <div class="swiper-wrapper slider">
            
        
            <div class="review__item swiper-slide">
                <p class="review__description">${Reviews[0].reviewsDescription}</p>
                <span class="review__author">${Reviews[0].reviewsAuthor}</span>
                <div class="review__img">
                    <img src="./src/img/jpg/avatar.jpg" alt="avatar">
                </div>
            </div>
            <div class="review__item swiper-slide">
                <p class="review__description">${Reviews[1].reviewsDescription}</p>
                <span class="review__author">${Reviews[1].reviewsAuthor}</span>
                <div class="review__img">
                    <img src="./src/img/jpg/avatar2.jpg" alt="avatar">
                </div>
            </div>
            <div class="review__item swiper-slide">
                <p class="review__description">${Reviews[1].reviewsDescription}</p>
                <span class="review__author">${Reviews[1].reviewsAuthor}</span>
                <div class="review__img">
                    <img src="./src/img/jpg/avatar2.jpg" alt="avatar">
                </div>
            </div>
            <div class="review__item swiper-slide">
               <p class="review__description">${Reviews[1].reviewsDescription}</p>
               <span class="review__author">${Reviews[1].reviewsAuthor}</span>
               <div class="review__img">
                  <img src="./src/img/jpg/avatar2.jpg" alt="avatar">
               </div>
            </div>
            <div class="review__item swiper-slide">
                <p class="review__description">${Reviews[1].reviewsDescription}</p>
                <span class="review__author">${Reviews[1].reviewsAuthor}</span>
                <div class="review__img">
                    <img src="./src/img/jpg/avatar2.jpg" alt="avatar">
                </div>
            </div>
            <div class="review__item swiper-slide">
                <p class="review__description">${Reviews[1].reviewsDescription}</p>
                <span class="review__author">${Reviews[1].reviewsAuthor}</span>
                <div class="review__img">
                    <img src="./src/img/jpg/avatar2.jpg" alt="avatar">
                </div>
            </div>
      
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
        </div>
    </div>
</div>
  
    `;
    return section.outerHTML;

};
export default Review;