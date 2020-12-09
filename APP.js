import Header from './src/components/header/index.js';
import Home from './src/pages/home.js';
const root = () => {
    const rootDiv = document.createElement('div');
    rootDiv.setAttribute('id', 'root');
    rootDiv.append(Header());
    rootDiv.append(Home());
    document.body.append(rootDiv);
    return rootDiv;
};
root ();