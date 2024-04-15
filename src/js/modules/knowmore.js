function showMoreInfo() {
    const knowMoreBtn = document.querySelector('.hero__info-link-btn');
    let heroCard = document.querySelector ('.hero__card');
    const nextBtn = document.querySelector ('.hero__next-link');
    
    knowMoreBtn.onclick = function () {
       heroCard.classList.toggle('.hero__card--active');
       nextBtn.classList.toggle('.hero__next-link--active');
    }
}
export default showMoreInfo();