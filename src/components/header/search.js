const Search = () => {
    const tagForm = document.createElement ('form');
    tagForm.className = 'header__form form';
    tagForm.innerHTML = 
    `
    <div class="form__inner">
        <select class="form__select">
            <option class="form__option" value="All categories">All categoties</option>
            <option class="form__option" value="All categories">All categoties</option>
            <option class="form__option" value="All categories">All categoties</option>
            <option class="form__option" value="All categories">All categoties</option>
        </select>
        <input class="form__input" placeholder="Search Product, categories...">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.19303 11.4333C11.7704 11.4333 13.8597 9.34394 13.8597 6.76661C13.8597 4.18928 11.7704 2.09995 9.19303 2.09995C6.61571 2.09995 4.52637 4.18928 4.52637 6.76661C4.52637 9.34394 6.61571 11.4333 9.19303 11.4333Z" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M5.81319 10.24L2.68652 13.3667" stroke="#151515" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
    </div>
    `;
    return tagForm.outerHTML;
};

export default Search();