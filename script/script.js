let indiceAtual = 0;

function exibirSlide(indice) {
  const carrossel = document.querySelector('.meu-carrossel');
  const totalItens = document.querySelectorAll('.meu-carrossel-item').length;
  
  if (indice >= totalItens) {
    indiceAtual = 0;
  } else if (indice < 0) {
    indiceAtual = totalItens - 1;
  } else {
    indiceAtual = indice;
  }
  
  const deslocamento = -indiceAtual * 100;
  carrossel.style.transform = `translateX(${deslocamento}%)`;
}

function mostrarSlideProximo() {
  exibirSlide(indiceAtual + 1);
}

function mostrarSlideAnterior() {
  exibirSlide(indiceAtual - 1);
}


function carregarCatalogo(){
    
  const livros = [
      { 
        imagem: 'image/produtos/antipulgas.jpg', 
        titulo: 'Antipulgas e Carrapatos Zoetis Revolution 6% para Gatos de 2,5 a 7,5 kg - 45 mg', 
        subtitulo: 'R$ 34,90 à Vista'
      },
      { 
        imagem: 'image/produtos/areia.jpg', 
        titulo: 'Areia Higiênica Meau Biodegradável Grãos Médios para Gatos', 
        subtitulo: 'R$ 55,90 à Vista'
      },
      { 
        imagem: 'image/produtos/racaopet.jpg', 
        titulo: 'Ração Seca Nutrilus Pro Carne para Cães Adultos', 
        subtitulo: 'R$ 178,90 à Vista'
      },
      { 
        imagem: 'image/produtos/racaoumida.jpg', 
        titulo: 'Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas', 
        subtitulo: 'R$ 5,90 à Vista'
      },
      { 
        imagem: 'image/produtos/tapete.jpg', 
        titulo: 'Tapete Higiênico Papum Slim Lavanda para Cães de Porte Pequeno', 
        subtitulo: 'R$ 42,90 à Vista'
      },
  ];

  for (let i = 0; i < livros.length; i++) {
      document.getElementById('catalogo').innerHTML += `
      <div class="livro">
          <img src="${livros[i].imagem}" alt="Produto ${i + 1}" class="livro-img">
          <h4>${livros[i].titulo}</h4>
          <p class="subtitulo">${livros[i].subtitulo}</p> <!-- Aqui està o subtítulo -->
          <button>
              Adicionar
              <img src="icons/plus.svg" alt="">
          </button>
      </div>
      `;
  }
}
carregarCatalogo();


function carregarProdutos() {
  const produtos = [
      { 
        imagem: 'image/CACHORRO/racao1.jpg', 
        titulo: 'Ração Seca True para Cães Adultos Raças Pequenas', 
        subtitulo: 'R$ 134,90 à Vista'
      },
      { 
        imagem: 'image/CACHORRO/tapete.jpg', 
        titulo: 'Tapete Higiênico Meau Cheirinho Cítrico Slim para Cães', 
        subtitulo: 'R$ 54,90 à Vista'
      },
      { 
        imagem: 'image/CACHORRO/macaco.jpg', 
        titulo: 'Brinquedo Chalesco Pelúcia Macaco', 
        subtitulo: 'R$ 38,90 à Vista'
      },
      { 
        imagem: 'image/CACHORRO/remedio.jpg', 
        titulo: 'Antipulgas e Carrapatos NexGard 28,3 mg', 
        subtitulo: 'R$ 45,90 à Vista'
      },
      { 
        imagem: 'image/CACHORRO/comida.jpg', 
        titulo: 'Comedouro e Bebedouro Meau Duplo Inox', 
        subtitulo: 'R$ 22,90 à Vista'
      },
      { 
        imagem: 'image/CACHORRO/suplemento.jpg', 
        titulo: 'Suplemento Vitz Pet Ômega 3 500 Sabor Carne', 
        subtitulo: 'R$ 69,90 à Vista'
      },
      { 
        imagem: 'image/CACHORRO/racao2.jpg', 
        titulo: 'Ração Premier Golden Formula Cães Filhotes', 
        subtitulo: 'R$ 249,90 à Vista'
      }
  ];

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

let indiceAtual2 = 0;
const itensPorVez = 3; // Defina quantos itens exibir por vez

function navegarProdutos(direcao) {
    const totalItens = document.querySelectorAll('.produto-item').length;
    indiceAtual += direcao;

    // Evita que o índice ultrapasse os limites
    if (indiceAtual < 0) {
        indiceAtual = Math.max(0, totalItens - itensPorVez); // Se estiver no início, vai para o último conjunto de itens
    }

    if (indiceAtual >= totalItens) {
        indiceAtual = 0; // Se estiver no final, vai para o início
    }

    // Movendo o carrossel
    document.getElementById('listaProdutos').style.transform = `translateX(-${indiceAtual * (100 / itensPorVez)}%)`;
}

carregarProdutos();

