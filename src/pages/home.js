import Header from '../components/header/index.js';
import bestSelling from '../components/bestselling/index.js';
import Blog from '../components/blog/index.js';
import Farmers from '../components/farmers/index.js';
import Headline from '../components/headline/index.js';
import Hero from  '../components/hero/index.js';
import Review from '../components/review/index.js';

const Home = () => {
    const HomePage = document.createElement('main');
    HomePage.innerHTML =
    `
    ${Header()}
    ${Hero()}
    ${bestSelling()}
    ${Farmers()}
    ${Review()}
    ${Headline()}
    ${Blog()}

    `;
    return HomePage;
};
Home();