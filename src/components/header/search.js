const Search = () => {
    const div = document.createElement ('div');
    div.className = 'header__searchbar searchbar';
    div.innerHTML = 
    `
        <h3 class="searchbar__title">All categories
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.81348 6.53336L7.55348 9.27336C7.67838 9.39752 7.84735 9.46722 8.02348 9.46722C8.1996 9.46722 8.36857 9.39752 8.49348 9.27336L11.1601 6.60669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
        </h3>
        <ul class="searchbar__list">
            <li class="searchbar__item"><a href="#">Drinks</a></li>
            <li class="searchbar__item"><a href="#">Bakery</a></li>
            <li class="searchbar__item"><a href="#">Pharmacy</a></li>
            <li class="searchbar__item"><a href="#">Meat and fish</a></li>
        </ul>
        <label>
        <input class="searchbar__input" placeholder="Search Product, categories...">
        </label>
        <button class="searchbar__button">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.19303 11.4333C11.7704 11.4333 13.8597 9.34394 13.8597 6.76661C13.8597 4.18928 11.7704 2.09995 9.19303 2.09995C6.61571 2.09995 4.52637 4.18928 4.52637 6.76661C4.52637 9.34394 6.61571 11.4333 9.19303 11.4333Z" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M5.81319 10.24L2.68652 13.3667" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
        </button>
    `;
    return div.outerHTML;
    
};

export default Search();