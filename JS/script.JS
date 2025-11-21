const images = document.querySelectorAll('.carousel-image');
let current = 0;

setInterval(() => {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}, 3000);

  const botao = document.getElementById('botaoHamburguer');
  const menu = document.getElementById('menuMobile');

  botao.addEventListener('click', () => {
    menu.classList.toggle('ativo');
  });

