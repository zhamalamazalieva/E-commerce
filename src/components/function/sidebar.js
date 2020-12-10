const SideBar = (MenuTitle, ArrayOfList, button) => {
    const SideBarItem = document.createElement('aside');
    SideBarItem.className = 'sidebar';
    SideBarItem.innerHTML = 
    `
    <h2 class="sidebar__title">${MenuTitle}</h2>
    <ul class="sidebar__menu menu">


        ${ArrayOfList.map(item => {
            const li = document.createElement('li')
            const a = document.createElement('a')

            li.className = 'menu__item'
            a.className = 'menu__link'

            a.setAttribute('href', '#')

            li.append(a)
            a.innerHTML = item

            return li.outerHTML
        }).join('')}

    </ul>
    <button class="btn btn--gray sidebar__button--category">${button}<svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.0332 11.6867L9.7732 8.94669C9.89737 8.82178 9.96706 8.65281 9.96706 8.47669C9.96706 8.30056 9.89737 8.13159 9.7732 8.00669L7.10654 5.34002"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg></button>
    `;
    return SideBarItem.outerHTML;
};

export default SideBar;