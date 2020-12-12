const BlogRight = () => {
    const div = document.createElement('div');
    div.className = 'blog__item--right blog__item';
    div.innerHTML =
    `
    <div class="column">
        <a href="#" class="blog__right right row">
            <div class="right__text">
                <p class="right__description">Salat is kinda good start to your morning routines</p>
                <span class="right__author">Author</span>
                <time class="right__time">17.01.2020</time>
            </div>
            <div class="right__img">
                <img src="/src/img/jpg/blog1.png" alt="">
            </div>
        </a>
        <a href="#" class="blog__right right row">
            <div class="right__text">
                <p class="right__description">Our chef tips for a great and healthy breakfast</p>
                <span class="right__author">Author</span>
                <time class="right__time">17.01.2020</time>
            </div>
            <div class="right__img">
                <img src="/src/img/jpg/blog1.png" alt="">
            </div>
        </a>
        <a href="#" class="blog__right right row">
            <div class="right__text">
                <p class="right__description">Prepare a simple and delicious breads</p>
                <span class="right__author">Author</span>
                <time class="right__time">17.01.2020</time>
            </div>
            <div class="right__img">
               <img src="/src/img/jpg/blog1.png" alt="">
            </div>
        </a>
    </div>
    `;
    return div.outerHTML;
};
export default BlogRight();