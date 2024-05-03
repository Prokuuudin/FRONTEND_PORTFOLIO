function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#mobile-nav-btn');
	const navBtnClose = document.querySelector('#close-mobile-nav');
	const nav = document.querySelector('.mobile-nav');

	// Открыть мобильную навигацию
	navBtnOpen.onclick = openMobileNav;

	// Закрыть мобильную навигацию по кнопке
	navBtnClose.onclick = closeMobileNav;

	function openMobileNav() {
		nav.classList.add('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}

	function closeMobileNav() {
		nav.classList.remove('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}
}

export default mobileNav;
