// Função para o botão "Saiba Mais"
function saibaMais() {
    window.location.href = "pages/index2.html";
}

// Simulação de busca
const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-container button');

function fazerBusca() {
    alert('Buscando por: ' + searchInput.value);
}

// Busca ao pressionar Enter
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        fazerBusca();
    }
});

// Busca ao clicar no botão da lupa
searchButton.addEventListener('click', function () {
    fazerBusca();
});