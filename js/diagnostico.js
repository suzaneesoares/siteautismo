const searchInput = document.getElementById('txtBusca');
const searchButton = document.getElementById('btnBusca');
const navItems = document.querySelectorAll('.subnav ul li');

function normalizeText(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '');
}

function filterNavItems() {
    const query = normalizeText(searchInput.value);
    let found = false;

    navItems.forEach(item => {
        const text = normalizeText(item.textContent);
        if (!query || text.includes(query)) {
            item.style.display = 'list-item';
            found = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!found && query) {
        showNoResultsMessage();
    } else {
        hideNoResultsMessage();
    }
}

function createNoResultsMessage() {
    let message = document.querySelector('.search-no-results');
    if (!message) {
        message = document.createElement('p');
        message.className = 'search-no-results';
        message.textContent = 'Nenhum resultado encontrado.';
        message.style.textAlign = 'center';
        message.style.marginTop = '8px';
        message.style.color = '#40566E';
        document.querySelector('.subnav').appendChild(message);
    }
    return message;
}

function showNoResultsMessage() {
    const message = createNoResultsMessage();
    message.style.display = 'block';
}

function hideNoResultsMessage() {
    const message = document.querySelector('.search-no-results');
    if (message) {
        message.style.display = 'none';
    }
}

searchInput.addEventListener('input', filterNavItems);
searchInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        filterNavItems();
        event.preventDefault();
    }
});
searchButton.addEventListener('click', filterNavItems);