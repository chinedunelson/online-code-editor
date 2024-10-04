// Dark Mode Toggle
const toggleSwitch = document.getElementById('dark-toggle');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Search functionality
const searchBar = document.getElementById('searchBar');
const cards = document.querySelectorAll('.card');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    cards.forEach((card) => {
        const language = card.querySelector('h2').innerText.toLowerCase();
        if (language.includes(searchString)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Filter functionality (web dev, frontend, backend)
const filters = document.querySelectorAll('.filter-option');
filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
        const category = e.target.dataset.category;
        cards.forEach(card => {
            if (card.dataset.category.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
