
const perguntas = [
  {
    texto: "1. Qual o nome do movimento em que a bailarina gira sobre uma perna?",
    alternativas: ["Plié", "Pirouette", "Souplesse", "Port de bras"],
    correta: 2
  },
  {
    texto: "2. O Battement tendu devant é executado em qual direção?",
    alternativas: ["Atrás", "Na frente", "Em diagonal", "Ao lado"],
    correta: 2
  },
  {
    texto: "3. O que significa 'En dehors'?",
    alternativas: ["Preparatória", "Para dentro", "Saltar", "Para fora"],
    correta: 4
  },
  {
    texto: "4. Qual dessas alternativas é um salto?",
    alternativas: ["Relevé", "Cambré", "Assemblé", "Plié"],
    correta: 3
  },
  {
    texto: "5. O que é 'Demi plié' ?",
    alternativas: ["Um giro", "Flexão de costas", "Flexão de joelhos", "Esticar as pontas"],
    correta: 3
  },
    {
    texto: "6. O que é 'Sauté' ?",
    alternativas: ["Um posição de braços", "Esticar as pontas", "Um salto", "Caminhar na meia ponta"],
    correta: 3
  },
      {
    texto: "7. O que é 'Relevé' ?",
    alternativas: ["Um salto", "Subir na meia ponta", "Uma reverência", "Um posição de braços"],
    correta: 2
  },
        {
    texto: "8. O que são 'Pantomimas' ?",
      alternativas: ["Piruetas duplas", "1ª posição aberta", "Bailarinas", "Mímicas"],
    correta: 4
  },
          {
    texto: "9. O movimento que desliza o pé pelo chão até a ponta dos dedos se chama: ",
      alternativas: ["Battement tendu", "1ª posição fechada", "Pantomimas", "Galop"],
    correta: 1
  },
            {
    texto: "10. O movimento que lança a perna rápido e desce devagar se chama: ",
      alternativas: ["Battement soutenu", "Grand Plié", "Grand battement", "Echappé"],
    correta: 3
  },

  
];

const quizContainer = document.getElementById('quiz-container');

perguntas.forEach((pergunta, index) => {
  const div = document.createElement('div');
  div.classList.add('pergunta');
  div.innerHTML = `<p>${pergunta.texto}</p>`;
  
  pergunta.alternativas.forEach((alt, i) => {
    div.innerHTML += `
      <label>
        <input type="radio" name="pergunta${index}" value="${i}"> ${alt}
      </label><br>
    `;
  });
  
  quizContainer.appendChild(div);
});

function verificarRespostas() {
  let acertos = 0;

  perguntas.forEach((pergunta, index) => {
    const resposta = document.querySelector(`input[name="pergunta${index}"]:checked`);
    if (resposta && parseInt(resposta.value) === pergunta.correta) {
      acertos++;
    }
  });

  const resultado = document.getElementById('resultado');
  resultado.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
}
