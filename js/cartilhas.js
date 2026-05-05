// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica de Busca (Consistente com a primeira página)
    const searchInput = document.querySelector('.search-container input');
    const searchButton = document.querySelector('.search-container button');

    const realizarBusca = () => {
        const termo = searchInput.value.trim();
        if (termo !== "") {
            alert(`Você está pesquisando por: "${termo}"\nRedirecionando para os resultados...`);
            // Aqui você poderia redirecionar para: window.location.href = `busca.html?q=${termo}`;
        } else {
            alert("Por favor, digite algo para pesquisar.");
        }
    };

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        realizarBusca();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            realizarBusca();
        }
    });

    // 2. Interação nos Cards (Efeito de clique/hover)
    const cards = document.querySelectorAll('.card');


        // Redirecionamento ao clicar no botão "Leia Mais"
        const btnLeiaMais = card.querySelector('.btn-leia-mais');
        btnLeiaMais.addEventListener('click', (e) => {
            e.preventDefault();
            const titulo = card.querySelector('h3').innerText;
            alert(`Abrindo o PDF da: \n${titulo}`);
        });
    });