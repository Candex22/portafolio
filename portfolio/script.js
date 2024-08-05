// JavaScript for slider functionality
const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    if (e.target.matches('.next')) {
        slider.append(items[0]);
    } else if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
    }
}

document.addEventListener('click', activate, false);

// JavaScript for navigation menu links
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.getElementById(link.href.split('#')[1]);
        console.log("Clicked link targets section:", targetSection.id); // Log section ID

        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.style.display = 'none');

        targetSection.style.display = 'block';
    });
});
