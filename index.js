document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add an event listener to handle the opacity transition
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('transitionend', function () {
            // Remove 'active' class after transition to prevent further animations
            section.classList.remove('active');
        });
    });
    
    // Add an event listener to each nav link to show the corresponding section
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', function () {
            const targetId = this.getAttribute('href').substring(1); // Remove the '#' from the href
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });

            // Show the target section
            targetSection.classList.add('active');
        });
    });
});