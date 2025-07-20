// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Obtém a referência para o campo de input da busca
    const searchInput = document.getElementById('searchInput');

    // Verifica se o campo de busca existe na página
    if (searchInput) {
        // Adiciona um 'event listener' para o evento 'keyup' (quando uma tecla é liberada)
        searchInput.addEventListener('keyup', (event) => {
            // Obtém o termo de busca digitado pelo usuário, convertendo para minúsculas
            // e removendo espaços em branco no início e fim
            const searchTerm = event.target.value.toLowerCase().trim();

            // Obtém todas as seções de produtos que contêm os cards
            // Isso inclui 'Nossos Produtos', 'Os Mais Vendidos' e 'Produtos em Destaque'
            const productSections = document.querySelectorAll('.produtos-container .grid');

            // Itera sobre cada seção de produtos
            productSections.forEach(section => {
                // Obtém todos os cards de produto dentro da seção atual
                const productCards = section.querySelectorAll('.bg-card'); // Seleciona os cards pela classe 'bg-card'

                // Itera sobre cada card de produto
                productCards.forEach(card => {
                    // Obtém o nome e a descrição do produto dentro do card
                    // Certifica-se de que o texto está em minúsculas para uma comparação sem distinção de maiúsculas/minúsculas
                    const productName = card.querySelector('h3')?.textContent.toLowerCase() || '';
                    const productDescription = card.querySelector('p')?.textContent.toLowerCase() || '';

                    // Verifica se o nome ou a descrição do produto inclui o termo de busca
                    // Se o termo de busca estiver vazio, todos os produtos são exibidos
                    const isVisible = productName.includes(searchTerm) || productDescription.includes(searchTerm) || searchTerm === '';

                    // Define a visibilidade do card com base no resultado da busca
                    if (isVisible) {
                        card.style.display = 'block'; // Mostra o card
                    } else {
                        card.style.display = 'none'; // Esconde o card
                    }
                });
            });
        });
    } else {
        console.warn("Elemento #searchInput não encontrado. A funcionalidade de busca pode não funcionar.");
    }
});