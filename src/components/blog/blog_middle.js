const BlogMiddle = () => {
    const div = document.createElement('div');
    div.className = 'blog__item blog__item--middle';
    div.innerHTML = 
    `
    <div class="blog__img"></div>
    <span class="blog__suptitle">Vegatables</span>
    <h3 class="blog__title">Which vegetable your family will love and want’s eat each day</h3>
    <span class="blog__author">Author</span>
    <time class="blog__time">14.12.2018</time>    
    `;
     return div.outerHTML;
};
export default BlogMiddle();