import Header from './components/header/index.js';
import Home from './pages/home.js';
import Vegatables from './pages/vegetables.js';
import Footer from './components/footer/index.js';
import textHidden from './components/function/text_hidden.js';

const root = () => {
    const rootDiv = document.createElement('div');
    rootDiv.setAttribute('id', 'root');
    rootDiv.append(Header());
    rootDiv.append(Home());
    rootDiv.append(Footer());
    document.body.append(rootDiv);
    textHidden();

    return rootDiv;


    // const vegetables = document.querySelectorAll('.vegatables');
    // const home = document.querySelector('.home');
  
    // vegatables.forEach((item) => {
    //   item.addEventListener('click', () => {
    //     home.remove();
    //     rootDiv.append(VegiPage());
    //   });
    // });
  
};
root ();