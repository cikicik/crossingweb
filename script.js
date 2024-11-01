/* JavaScript to show/hide the scroll navigation */
window.addEventListener('scroll', function () {
    const scrollNav = document.querySelector('.scroll-nav');

    if (window.scrollY > 100) {
        // Adjust the scroll position as needed
        scrollNav.style.display = 'block';
    }

    else {
        scrollNav.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.querySelector('.drawer');

    hamburger.addEventListener('click', function () {
        drawer.classList.toggle('open'); // Toggle 'open' class to show/hide drawer
    });
});
