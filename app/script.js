const imagens = [
  'imagens/foto1.jpeg',
  'imagens/foto2.jpeg',
  'imagens/foto3.jpeg',
  'imagens/foto4.jpeg',
  'imagens/foto5.jpeg',
  'imagens/foto6.jpeg',
  'imagens/foto7.jpeg',
  'imagens/foto8.jpeg',
  'imagens/foto9.jpeg',
  'imagens/foto10.jpeg',
  'imagens/foto11.jpeg',
  'imagens/foto12.jpeg',
  'imagens/foto13.jpeg',
  'imagens/foto7.jpeg',
  'imagens/foto8.jpeg',
  'imagens/foto9.jpeg',
  'imagens/foto10.jpeg',
  'imagens/foto11.jpeg',
  'imagens/foto12.jpeg',
  'imagens/foto13.jpeg',
  'imagens/foto1.jpeg',
  'imagens/foto2.jpeg',
  'imagens/foto3.jpeg',
  'imagens/foto4.jpeg',
  'imagens/foto5.jpeg',
  'imagens/foto6.jpeg',
   'imagens/foto1.jpeg',
  'imagens/foto2.jpeg',
  'imagens/foto3.jpeg',
  'imagens/foto4.jpeg',
  'imagens/foto5.jpeg',
  'imagens/foto6.jpeg',
  'imagens/foto7.jpeg',
  'imagens/foto8.jpeg',
  'imagens/foto9.jpeg',
  'imagens/foto10.jpeg',
  'imagens/foto11.jpeg',
  'imagens/foto12.jpeg',
  'imagens/foto13.jpeg',
  'imagens/foto7.jpeg',
  'imagens/foto8.jpeg',
  'imagens/foto9.jpeg',
  'imagens/foto10.jpeg',
  'imagens/foto11.jpeg',
  'imagens/foto12.jpeg',
  'imagens/foto13.jpeg',
  'imagens/foto1.jpeg',
  'imagens/foto2.jpeg',
  'imagens/foto3.jpeg',
  'imagens/foto4.jpeg',
  'imagens/foto5.jpeg',
  'imagens/foto6.jpeg',
  // adicione mais fotos aqui
];

const galeria = document.getElementById('galeria');

imagens.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.className = 'foto';

  // posição inicial aleatória
  img.style.top = Math.random() * 80 + '%';
  img.style.left = Math.random() * 80 + '%';

  // tamanho aleatório
  const size = 100 + Math.random() * 150;
  img.style.width = size + 'px';
  img.style.height = size + 'px';

  // duração da animação e delay aleatórios
  img.style.animationDuration = (15 + Math.random() * 25) + 's';
  img.style.animationDelay = (Math.random() * 5) + 's';

  // rotação inicial aleatória
  img.style.transform = `rotate(${Math.random() * 360}deg)`;

  galeria.appendChild(img);

  // cria movimentos aleatórios contínuos
  setInterval(() => {
    const randomX = (Math.random() - 0.5) * 100; // movimento lateral
    const randomY = (Math.random() - 0.5) * 100; // movimento vertical
    const randomRot = (Math.random() - 0.5) * 30; // rotação leve

    img.style.transition = 'transform 8s ease-in-out';
    img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg)`;
  }, 7000 + Math.random() * 5000); // intervalo variável
});