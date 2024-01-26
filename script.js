document.addEventListener('DOMContentLoaded', function () {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add click event listeners to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Get the target section's ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);

            // Scroll to the target section smoothly
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

