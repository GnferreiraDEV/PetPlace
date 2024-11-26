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
