const menuButton = document.getElementById('menuButton');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }

        if (nav.classList.contains('header__nav--active')) {
            nav.classList.remove('header__nav--active');
        }
    });
});