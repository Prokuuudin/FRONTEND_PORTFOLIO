function showMoreInfo() {
    const knowMoreBtn = document.querySelector('.hero__info-btn');
    const heroCards = document.querySelector('.hero__cards');
    const nextBtn = document.querySelector ('.hero__next-link');
    
      knowMoreBtn.onclick = function () {
        heroCards.classList.toggle('hero__cards--active');
        nextBtn.classList.toggle("hero__next-link--active")
    }
}
export default showMoreInfo;