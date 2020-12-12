const BlogMiddle = () => {
    const a = document.createElement('a');
    a.className = 'blog__item blog__item--middle';
    a.setAttribute('href', '#');
    a.innerHTML = 
    `
    <div class="blog__img"></div>
    <span class="blog__suptitle">Vegatables</span>
    <h3 class="blog__title">Which vegetable your family will love and want’s eat each day</h3>
    <span class="blog__author">Author</span>
    <time class="blog__time">14.12.2018</time>    
    `;
     return a.outerHTML;
};
export default BlogMiddle();