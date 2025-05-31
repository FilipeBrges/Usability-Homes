import { Company } from '../types';

export const companiesData: Company[] = [
  {
    id: 'tech-innovate',
    name: 'TechInova',
    description: 'Uma empresa líder em tecnologia especializada em soluções de software inovadoras.',
    imagePath: '/images/tech-company.png',
    hasAlert: false,
    problems: [
      {
        id: 'tech-1',
        title: 'Mensagem de Erro Confusa',
        description: 'O software da empresa exibe códigos de erro complexos sem explicar o que deu errado ou como resolver.',
        imagePath: '/images/tech-problem-1.png',
        correctHeuristicId: '9',
        difficulty: 'easy',
        options: ['9', '1', '4', '3']
      },
      {
        id: 'tech-2',
        title: 'Navegação Complexa',
        description: 'O painel da empresa tem muitos menus ocultos e exige que os usuários memorizem onde estão recursos específicos.',
        imagePath: '/images/tech-problem-2.png',
        correctHeuristicId: '6',
        difficulty: 'medium',
        options: ['6', '7', '8', '4']
      },
      {
        id: 'tech-3',
        title: 'Sem Opção de Desfazer',
        description: 'Usuários não podem desfazer ações no software, levando a mudanças permanentes sem confirmação.',
        imagePath: '/images/tech-problem-3.png',
        correctHeuristicId: '3',
        difficulty: 'hard',
        options: ['3', '5', '1', '2']
      }
    ]
  },
  {
    id: 'food-delivery',
    name: 'Delivery Já',
    description: 'Um serviço de entrega de comida conectando restaurantes com clientes.',
    imagePath: '/images/food-company.png',
    hasAlert: false,
    problems: [
      {
        id: 'food-1',
        title: 'Taxas Ocultas',
        description: 'Taxas de entrega e serviço só são mostradas na etapa final do checkout, surpreendendo os usuários.',
        imagePath: '/images/food-problem-1.png',
        correctHeuristicId: '1',
        difficulty: 'easy',
        options: ['1', '2', '4', '5']
      },
      {
        id: 'food-2',
        title: 'Ícones Confusos',
        description: 'O aplicativo usa ícones personalizados que não seguem padrões comuns, dificultando o entendimento de suas funções.',
        imagePath: '/images/food-problem-2.png',
        correctHeuristicId: '4',
        difficulty: 'medium',
        options: ['4', '2', '8', '6']
      },
      {
        id: 'food-3',
        title: 'Sem Confirmação',
        description: 'Pedidos são feitos imediatamente quando um método de pagamento é selecionado, sem etapa de revisão ou confirmação.',
        imagePath: '/images/food-problem-3.png',
        correctHeuristicId: '5',
        difficulty: 'hard',
        options: ['5', '3', '9', '1']
      }
    ]
  },
  {
    id: 'health-clinic',
    name: 'Clínica Saúde+',
    description: 'Um provedor de saúde oferecendo serviços médicos e agendamento de consultas.',
    imagePath: '/images/health-company.png',
    hasAlert: false,
    problems: [
      {
        id: 'health-1',
        title: 'Formulários Complexos',
        description: 'Formulários de registro de pacientes pedem informações excessivas de uma vez só, sem indicadores de progresso.',
        imagePath: '/images/health-problem-1.png',
        correctHeuristicId: '8',
        difficulty: 'easy',
        options: ['8', '7', '5', '10']
      },
      {
        id: 'health-2',
        title: 'Linguagem Técnica',
        description: 'O site usa terminologia médica complexa sem explicações para os pacientes.',
        imagePath: '/images/health-problem-2.png',
        correctHeuristicId: '2',
        difficulty: 'medium',
        options: ['2', '10', '6', '9']
      },
      {
        id: 'health-3',
        title: 'Sem Seção de Ajuda',
        description: 'O portal do paciente não possui documentação de ajuda ou seção de FAQ para problemas comuns.',
        imagePath: '/images/health-problem-3.png',
        correctHeuristicId: '10',
        difficulty: 'hard',
        options: ['10', '9', '3', '7']
      }
    ]
  },
  {
    id: 'online-shop',
    name: 'CompraCerta',
    description: 'Uma plataforma de e-commerce vendendo diversos produtos de consumo.',
    imagePath: '/images/shop-company.png',
    hasAlert: false,
    problems: [
      {
        id: 'shop-1',
        title: 'Registro Obrigatório',
        description: 'Usuários precisam criar uma conta antes de poder navegar pelos produtos ou ver preços.',
        imagePath: '/images/shop-problem-1.png',
        correctHeuristicId: '7',
        difficulty: 'easy',
        options: ['7', '3', '8', '5']
      },
      {
        id: 'shop-2',
        title: 'Erros de Busca',
        description: 'A função de busca retorna "Nenhum resultado" para pequenos erros de digitação em vez de sugerir alternativas.',
        imagePath: '/images/shop-problem-2.png',
        correctHeuristicId: '9',
        difficulty: 'medium',
        options: ['9', '6', '5', '10']
      },
      {
        id: 'shop-3',
        title: 'Sem Indicador de Carregamento',
        description: 'Ao filtrar produtos, não há indicação de que a página está carregando novos resultados.',
        imagePath: '/images/shop-problem-3.png',
        correctHeuristicId: '1',
        difficulty: 'hard',
        options: ['1', '4', '2', '7']
      }
    ]
  },
  {
    id: 'travel-agency',
    name: 'Viagens Brasil',
    description: 'Uma agência de viagens oferecendo pacotes de férias e serviços de reserva.',
    imagePath: '/images/travel-company.png',
    hasAlert: false,
    problems: [
      {
        id: 'travel-1',
        title: 'Layout Inconsistente',
        description: 'Cada página do processo de reserva tem um layout diferente e posicionamento de botões distinto.',
        imagePath: '/images/travel-problem-1.png',
        correctHeuristicId: '4',
        difficulty: 'easy',
        options: ['4', '8', '1', '6']
      },
      {
        id: 'travel-2',
        title: 'Política de Cancelamento Oculta',
        description: 'Informações sobre taxas de cancelamento estão escondidas nos termos e condições.',
        imagePath: '/images/travel-problem-2.png',
        correctHeuristicId: '2',
        difficulty: 'medium',
        options: ['2', '5', '10', '3']
      },
      {
        id: 'travel-3',
        title: 'Sem Atalhos',
        description: 'Viajantes frequentes precisam passar pelo mesmo processo longo de reserva cada vez, sem preferências salvas.',
        imagePath: '/images/travel-problem-3.png',
        correctHeuristicId: '7',
        difficulty: 'hard',
        options: ['7', '6', '4', '8']
      }
    ]
  },
  {
    id: 'edu-platform',
    name: 'EduBrasil',
    description: 'Uma plataforma educacional online oferecendo cursos e materiais de aprendizagem.',
    imagePath: '/images/edu-company.png',
    hasAlert: false,
    problems: [
      {
        id: 'edu-1',
        title: 'Sem Acompanhamento de Progresso',
        description: 'Estudantes não conseguem ver seu progresso geral no curso ou próximos passos recomendados.',
        imagePath: '/images/edu-problem-1.png',
        correctHeuristicId: '1',
        difficulty: 'easy',
        options: ['1', '6', '8', '10']
      },
      {
        id: 'edu-2',
        title: 'Preso nas Aulas',
        description: 'Uma vez que uma aula começa, não há como sair ou pausar sem perder todo o progresso.',
        imagePath: '/images/edu-problem-2.png',
        correctHeuristicId: '3',
        difficulty: 'medium',
        options: ['3', '5', '7', '9']
      },
      {
        id: 'edu-3',
        title: 'Painel Sobrecarregado',
        description: 'O painel do aluno exibe informações excessivas e conteúdo promocional, obscurecendo materiais importantes do curso.',
        imagePath: '/images/edu-problem-3.png',
        correctHeuristicId: '8',
        difficulty: 'hard',
        options: ['8', '4', '2', '6']
      }
    ]
  }
];