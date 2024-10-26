'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserir perguntas
    await queryInterface.bulkInsert('Questions', [
      { id: 1, text: 'Como você prefere enfrentar um inimigo?', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, text: 'O que você considera sua melhor qualidade?', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, text: 'Quanto tempo você consegue lutar sem se cansar?', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, text: 'Você possui alguma habilidade especial?', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, text: 'Qual é o seu elemento de chakra preferido?', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, text: 'Qual é o seu papel em uma equipe?', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, text: 'Como você lida com desafios difíceis?', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, text: 'O que motiva você a lutar?', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, text: 'Como você descreveria sua personalidade?', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, text: 'Qual é a sua abordagem em relação às regras?', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, text: 'Como você reage diante do perigo?', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, text: 'Qual é o seu tipo de missão favorito?', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, text: 'O que você valoriza mais em seus amigos?', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, text: 'Qual é a sua comida favorita?', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, text: 'Como você lida com o fracasso?', createdAt: new Date(), updatedAt: new Date() },
      { id: 16, text: 'Qual técnica você gostaria de dominar?', createdAt: new Date(), updatedAt: new Date() },
      { id: 17, text: 'Qual é o seu animal favorito?', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, text: 'O que você faz no seu tempo livre?', createdAt: new Date(), updatedAt: new Date() },
      { id: 19, text: 'Qual é o seu maior medo?', createdAt: new Date(), updatedAt: new Date() },
      { id: 20, text: 'Como você define sucesso?', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Inserir opções
    await queryInterface.bulkInsert('Options', [
      // Opções para a Pergunta 1
      { text: 'Usando técnicas poderosas de Ninjutsu.', value: 'ninjutsu', weight: 2, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Lutando corpo a corpo com Taijutsu.', value: 'taijutsu', weight: 2, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Confundindo-o com Genjutsu.', value: 'genjutsu', weight: 2, questionId: 1, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 2
      { text: 'Inteligência estratégica.', value: 'intelligence', weight: 2, questionId: 2, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Força física.', value: 'strength', weight: 2, questionId: 2, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Velocidade e agilidade.', value: 'speed', weight: 2, questionId: 2, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 3
      { text: 'Posso lutar por horas.', value: 'stamina', weight: 2, questionId: 3, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Tenho energia moderada.', value: 'stamina', weight: 1, questionId: 3, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Prefiro lutas rápidas.', value: 'stamina', weight: 0, questionId: 3, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 4
      { text: 'Sim, tenho um poder único.', value: 'special', weight: 2, questionId: 4, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Não, mas compenso com treinamento.', value: 'special', weight: 0, questionId: 4, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 5
      { text: 'Fogo.', value: 'ninjutsu', weight: 2, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Água.', value: 'genjutsu', weight: 2, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Terra.', value: 'strength', weight: 2, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Vento.', value: 'speed', weight: 2, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Raio.', value: 'taijutsu', weight: 2, questionId: 5, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 6
      { text: 'Líder estratégico.', value: 'intelligence', weight: 2, questionId: 6, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Combatente de linha de frente.', value: 'strength', weight: 2, questionId: 6, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Suporte tático.', value: 'genjutsu', weight: 2, questionId: 6, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 7
      { text: 'Enfrento de cabeça erguida.', value: 'strength', weight: 2, questionId: 7, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Penso em uma estratégia.', value: 'intelligence', weight: 2, questionId: 7, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Procuro apoio dos meus aliados.', value: 'stamina', weight: 2, questionId: 7, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 8
      { text: 'Proteger aqueles que amo.', value: 'special', weight: 2, questionId: 8, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Alcançar meus objetivos pessoais.', value: 'intelligence', weight: 2, questionId: 8, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Demonstrar minha força.', value: 'strength', weight: 2, questionId: 8, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 9
      { text: 'Calmo e calculista.', value: 'intelligence', weight: 2, questionId: 9, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Energético e impulsivo.', value: 'stamina', weight: 2, questionId: 9, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Determinado e sério.', value: 'strength', weight: 2, questionId: 9, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 10
      { text: 'Sigo as regras à risca.', value: 'genjutsu', weight: 2, questionId: 10, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Quebro as regras quando necessário.', value: 'special', weight: 2, questionId: 10, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Crio minhas próprias regras.', value: 'ninjutsu', weight: 2, questionId: 10, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 11
      { text: 'Avanço sem hesitação.', value: 'speed', weight: 2, questionId: 11, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Analiso a situação primeiro.', value: 'intelligence', weight: 2, questionId: 11, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Protejo meus companheiros.', value: 'stamina', weight: 2, questionId: 11, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 12
      { text: 'Missões de espionagem.', value: 'genjutsu', weight: 2, questionId: 12, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Missões de combate direto.', value: 'taijutsu', weight: 2, questionId: 12, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Missões de proteção.', value: 'special', weight: 2, questionId: 12, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 13
      { text: 'Lealdade.', value: 'stamina', weight: 2, questionId: 13, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Inteligência.', value: 'intelligence', weight: 2, questionId: 13, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Força.', value: 'strength', weight: 2, questionId: 13, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 14
      { text: 'Lamen.', value: 'speed', weight: 2, questionId: 14, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Churrasco.', value: 'strength', weight: 2, questionId: 14, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Doces.', value: 'special', weight: 2, questionId: 14, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 15
      { text: 'Aprendo com meus erros.', value: 'intelligence', weight: 2, questionId: 15, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Fico frustrado, mas sigo em frente.', value: 'stamina', weight: 2, questionId: 15, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Não aceito o fracasso.', value: 'strength', weight: 2, questionId: 15, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 16
      { text: 'Rasengan.', value: 'ninjutsu', weight: 2, questionId: 16, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Chidori.', value: 'taijutsu', weight: 2, questionId: 16, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Kage Bunshin no Jutsu.', value: 'special', weight: 2, questionId: 16, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 17
      { text: 'Raposa.', value: 'special', weight: 2, questionId: 17, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Cobra.', value: 'genjutsu', weight: 2, questionId: 17, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Sapo.', value: 'ninjutsu', weight: 2, questionId: 17, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 18
      { text: 'Treino intensamente.', value: 'strength', weight: 2, questionId: 18, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Leio livros.', value: 'intelligence', weight: 2, questionId: 18, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Passo tempo com amigos.', value: 'stamina', weight: 2, questionId: 18, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 19
      { text: 'Perder alguém querido.', value: 'special', weight: 2, questionId: 19, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Falhar em proteger minha vila.', value: 'stamina', weight: 2, questionId: 19, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Não alcançar meus objetivos.', value: 'intelligence', weight: 2, questionId: 19, createdAt: new Date(), updatedAt: new Date() },

      // Opções para a Pergunta 20
      { text: 'Ser reconhecido por todos.', value: 'special', weight: 2, questionId: 20, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Atingir meus objetivos pessoais.', value: 'intelligence', weight: 2, questionId: 20, createdAt: new Date(), updatedAt: new Date() },
      { text: 'Trazer paz ao mundo.', value: 'genjutsu', weight: 2, questionId: 20, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Options', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
