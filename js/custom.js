window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.mil-frame-top'); // Assuming the navbar has an id of 'navbar'
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        navbar.classList.remove('nav-scrolled'); // Remove the 'scrolled' class when scrolled to the top
    } else {
        navbar.classList.add('nav-scrolled'); // Add the 'scrolled' class when scrolled away from the top
    }
});
