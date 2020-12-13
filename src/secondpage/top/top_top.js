const topTop = () => {
    const div = document.createElement('div');
    div.className = 'top__row row';
    div.innerHTML = 
    `
    <h1 class="top__title">Fruit and Vegetables</h1>
    <div class="flex top__left">
    <div class="top__item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.33301 8H14.6663"  stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 1.33331V14.6666"  stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="top__type">Grid View</span>    
    </div>
    <div class="top__item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.333 1.33331H2.66634C1.92996 1.33331 1.33301 1.93027 1.33301 2.66665V13.3333C1.33301 14.0697 1.92996 14.6666 2.66634 14.6666H13.333C14.0694 14.6666 14.6663 14.0697 14.6663 13.3333V2.66665C14.6663 1.93027 14.0694 1.33331 13.333 1.33331Z" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.33301 4.66663H14.6663" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.33301 8H14.6663" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.33301 11.3333H14.6663" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="top__type">List View</span>    
    </div>
    <div class="top__item">
        <span class="top__counter">117</span> 
        <span class="top__product">Products</span>
    </div>
    </div>
    
    `;
    return div.outerHTML;

};
export default topTop();