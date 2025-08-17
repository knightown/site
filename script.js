// Functionality for header scroll effect
document.addEventListener('scroll', () => {
    const header = document.querySelector('#main-header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Functionality for the search bar toggle
const searchToggle = document.querySelector('.search-toggle');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');

searchToggle.addEventListener('click', (e) => {
    e.preventDefault();
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
});

// Functionality for the About Us tabs
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and hide all content
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.style.display = 'none');

        // Add active class to the clicked tab
        tab.classList.add('active');

        // Show the corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'block';
    });
});

// The following section for the login modal has been commented out, as per the request
// It is kept here in case you want to enable it later.

/*
// Login/Signup Modal Functionality
const loginLink = document.querySelector('.login-link');
const closeIcon = document.querySelector('.icon-close');
const wrapper = document.querySelector('.wrapper');
const modalWrapper = document.querySelector('.login-modal-wrapper');

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active-popup');
    modalWrapper.classList.add('active-modal');
});

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    modalWrapper.classList.remove('active-modal');
});
*/

// Lenis smooth scrolling functionality
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
