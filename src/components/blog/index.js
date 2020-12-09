import Title from '../function/title.js';
import BlogLeft from '../blog/blog_left.js';
import BlogMiddle from '../blog/blog_middle.js';
import BlogRight from '../blog/blog_right.js'
const Blog = () => {
    const section = document.createElement('section');
    section.className = 'blog';
    section.innerHTML =
    `
    <div class="container">
        ${Title('Read our Blog posts','Go to Blog')}
        <div class="blog__row row">
            <div class="col-5">
                ${BlogLeft}
            </div>
            <div class="col-3">
                ${BlogMiddle}
            </div>
            <div class="col-4">
                ${BlogRight}
            </div>
        </div>
    </div>
    `;
    return section.outerHTML;
};
export default Blog;