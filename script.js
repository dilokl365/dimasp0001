document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.footer-menu > ul > li');

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', function() {
            dropdown.classList.toggle('active');
            const dropdownMenu = dropdown.querySelector('ul');
            dropdownMenu.classList.toggle('active');
        });
    });
});