const langBtn = document.querySelector('.lang-btn');
const allLang = ['ru', 'en', 'lv'];
const flagLang = document.querySelectorAll('.nav__lang-flag'); 
console.log(flagLang)
navLangBtn.addEventListener('onclick', changeURLLanguage);
langBtn.addEventListener('onclick', changeLangBtn);

function changeLangBtn () {
        flagLang.classList.toggle('nav__lang-flag--active');
}  
// changeLangBtn()

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = langBtn.checked;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    langBtn.value = hash;
    document.querySelector('title').innerHTML = langArr['about'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

export default changeLanguage;