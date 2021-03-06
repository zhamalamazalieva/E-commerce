const BlogLeft = () => {
    const a = document.createElement('a');
    a.className = 'blog__item--left blog__item';
    a.setAttribute('href', '#');

    a.innerHTML =
    `
    <div class="blog__text text">
        <div class="text__top">
           <span>Dinner tips</span>
        </div>
        <div class="text__bottom">
           <h2 class="text__title">Our chef tips for a great and tasty dinner ready in 20 minutes</h2>
           <div class="flex">
                <img class="text__avatar" src="./src/img/jpg/avatar.jpg" alt="">
                <span class="text__author">Author</span>
                <time class="text__time">17.01.2020</time>
           </div>
        </div>
    </div>
    `;
    return a.outerHTML;
};

export default BlogLeft();