import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { ChevronRight, AlertTriangle, Clock, DollarSign } from 'lucide-react';

const InstructionsDialog: React.FC = () => {
  const { startPlaying } = useGameStore();
  const [currentStep, setCurrentStep] = useState(0);
  
  const instructions = [
    {
      title: "Bem-vindo à Consultoria de Usabilidade!",
      text: "Você é um consultor de usabilidade de alto nível encarregado de ajudar empresas a corrigir seus problemas de usabilidade. As empresas entrarão em contato quando tiverem problemas com seus sites ou aplicativos.",
      icon: <AlertTriangle size={32} className="text-accent-500" />
    },
    {
      title: "Identificar Problemas",
      text: "Quando uma empresa tiver um problema, ela mostrará um alerta. Clique no prédio da empresa para examinar seu problema de usabilidade e fornecer seu conselho especializado.",
      icon: <AlertTriangle size={32} className="text-accent-500" />
    },
    {
      title: "Aplicar as Heurísticas de Nielsen",
      text: "Para cada problema, você precisará identificar qual das 10 Heurísticas de Usabilidade de Nielsen está sendo violada. Escolha a opção correta para resolver o problema.",
      icon: <Clock size={32} className="text-primary-500" />
    },
    {
      title: "Contra o Relógio",
      text: "Você terá tempo limitado para identificar cada problema - 20 segundos para problemas fáceis, 10 para médios e apenas 5 para difíceis. Quanto mais rápido você responder, mais pontos ganhará!",
      icon: <Clock size={32} className="text-primary-500" />
    },
    {
      title: "Ganhe sua Consultoria",
      text: "Para cada problema resolvido corretamente, sua consultoria ganhará dinheiro. Problemas mais difíceis e soluções mais rápidas pagam melhor!",
      icon: <DollarSign size={32} className="text-success-500" />
    }
  ];
  
  const nextStep = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      startPlaying();
    }
  };

  const instruction = instructions[currentStep];
  
  return (
    <motion.div 
      className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-primary-800 p-6">
        <h2 className="text-2xl font-bold text-white">Como Jogar</h2>
        <div className="flex mt-4">
          {instructions.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 rounded-full flex-1 mx-1 ${
                index === currentStep ? 'bg-accent-500' : 
                index < currentStep ? 'bg-primary-400' : 'bg-primary-600'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center mb-4">
          {instruction.icon}
          <h3 className="text-xl font-semibold ml-3 text-gray-800">{instruction.title}</h3>
        </div>
        
        <p className="text-lg mb-8 text-gray-700">{instruction.text}</p>
        
        <motion.button
          className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg text-xl flex items-center justify-center shadow-md"
          onClick={nextStep}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentStep < instructions.length - 1 ? 'Próximo' : 'Começar a Jogar'}
          <ChevronRight className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InstructionsDialog;