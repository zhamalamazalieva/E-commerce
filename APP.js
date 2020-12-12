import Header from './src/components/header/index.js';
import Home from './src/pages/home.js';
import Footer from './src/components/footer/index.js';
import textHidden from './src/components/function/text_hidden.js';

const root = () => {
    const rootDiv = document.createElement('div');
    rootDiv.setAttribute('id', 'root');
    rootDiv.append(Header());
    rootDiv.append(Home());
    rootDiv.append(Footer());
    document.body.append(rootDiv);
    textHidden();

    return rootDiv;
};
root ();