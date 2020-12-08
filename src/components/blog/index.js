import Title from '../function/title.js';
import BlogLeft from '../blog/blog_left.js';
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
            
            </div>
            <div class="col-4">
            
            </div>
        </div>
    </div>
    `;
    document.body.append(section);
    return section.outerHTML;
};
Blog();