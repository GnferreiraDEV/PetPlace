let indiceAtual = 0;
const itensPorVez = 3; // Defina quantos itens exibir por vez

function carregarProdutos() {
    const produtos = [
        { 
          imagem: 'image/produtos/remedio3.jpg', 
          titulo: 'Antipulgas e Carrapatos NexGard Spectra para Cães de 7,6 a 15kg', 
          subtitulo: 'R$ 134,90 à Vista'
        },
        { 
          imagem: 'image/produtos/remedio5.jpg', 
          titulo: 'Coleira Antiparasitas Scalibor MSD TAM P/M', 
          subtitulo: 'R$ 54,90 à Vista'
        },
        { 
          imagem: 'image/produtos/remedio4.jpg', 
          titulo: 'Antipulgas e Carrapatos NexGard para Cães de 4,1 a 10kg', 
          subtitulo: 'R$ 38,90 à Vista'
        },
        { 
          imagem: 'image/produtos/remedio6.jpg', 
          titulo: 'Antipulgas e Carrapatos NexGard 28,3 mg', 
          subtitulo: 'R$ 45,90 à Vista'
        },
        { 
          imagem: 'image/produtos/remedio7.jpg', 
          titulo: 'Antipulgas Simparic 5 mg para cães 1,3 a 2,5 kg - Zoetis', 
          subtitulo: 'R$ 122,90 à Vista'
        },
        { 
          imagem: 'image/produtos/remedio8.jpg', 
          titulo: 'Antipulgas Simparic 20 mg para cães 5,1 a 10 kg - Zoetis', 
          subtitulo: 'R$ 169,90 à Vista'
        },
        { 
          imagem: 'image/produtos/remedio3.jpg', 
          titulo: 'Ração Premier Golden Formula Cães Filhotes', 
          subtitulo: 'R$ 149,90 à Vista'
        }
    ];

    // Carregar os produtos na página
    for (let i = 0; i < produtos.length; i++) {
        document.getElementById('listaProdutos').innerHTML += `
        <div class="produto-item">
            <img src="${produtos[i].imagem}" alt="Produto ${i + 1}" class="produto-imagem">
            <h4>${produtos[i].titulo}</h4>
            <p class="produto-subtitulo">${produtos[i].subtitulo}</p>
            <button class="adicionar">
                Adicionar
            </button>
        </div>
        `;
    }
}

function navegarProdutos(direcao) {
    const totalItens = document.querySelectorAll('.produto-item').length;

    // Ajuste do índice
    indiceAtual += direcao;
  
    // Evitar que o índice ultrapasse os limites
    if (indiceAtual < 0) {
        indiceAtual = 0; // Não vai para valores negativos
    }
  
    if (indiceAtual >= totalItens) {
        indiceAtual = totalItens - itensPorVez; // Se passar do limite, vai para o final
    }

    // Movendo o carrossel
    document.getElementById('listaProdutos').style.transform = `translateX(-${(indiceAtual) * (100 / itensPorVez)}%)`;
}

carregarProdutos();
