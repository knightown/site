document.addEventListener('DOMContentLoaded', function() {
    
    // ---- NEW: LENIS SMOOTH SCROLL INITIALIZATION ----
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // --------------------------------------------------


    // ---- Carousel Initialization (No changes needed here) ----
    var myCarousel = document.getElementById('heroCarousel');
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000,
            pause: 'hover'
        });
    }

    // ---- Header Scroll Effect (No changes needed here) ----
    const mainHeader = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });


    // ---- FIX: ABOUT US TABS FUNCTIONALITY (MOVED INSIDE DOMContentLoaded) ----
    const tabs = document.querySelectorAll('.about-tabs .tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show corresponding content
            const target = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                if(content.id === target) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});

 // ---- NEW: Search Functionality (In-line Expansion) ----

    const searchContainer = document.querySelector('.search-container');
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = document.querySelector('.search-input');

    // Function to toggle the search bar's visibility
    function toggleSearch() {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus(); // Automatically focus the input field
        } else {
            searchInput.value = ''; // Clear the input when it's hidden
        }
    }

    // Event listener for the search icon
    searchToggle.addEventListener('click', function(event) {
        event.preventDefault();
        toggleSearch();
    });

    // Event listener to hide the search bar on an outside click
    document.addEventListener('click', function(event) {
        // Check if the click is outside the search container
        if (!searchContainer.contains(event.target) && searchContainer.classList.contains('active')) {
            toggleSearch();
        }
    });

    // Event listener to hide the search bar with the ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && searchContainer.classList.contains('active')) {
            toggleSearch();
        }
    });

