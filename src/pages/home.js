import bestSelling from '../components/bestselling/index.js';
import Blog from '../components/blog/index.js';
import Farmers from '../components/farmers/index.js';
import Headline from '../components/headline/index.js';
import Hero from  '../components/hero/index.js';
import Review from '../components/review/index.js';
import Vegetables from '../secondpage/top/index.js';

const Home = () => {
    const HomePage = document.createElement('main');
    HomePage.innerHTML =
    `
    ${Hero()}
    ${bestSelling()}
    ${Farmers()}
    ${Review()}
    ${Headline()}
    ${Blog()}
    ${Vegetables()}

    `;
    return HomePage;
};
export default Home;