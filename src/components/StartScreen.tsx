import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { Building2, Lightbulb } from 'lucide-react';

const StartScreen: React.FC = () => {
  const { startGame } = useGameStore();

  return (
    <motion.div 
      className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary-800 p-8 flex justify-center items-center">
        <Building2 size={48} className="text-white mr-4" />
        <h1 className="text-4xl font-bold text-white">Consultoria de Usabilidade</h1>
        <Lightbulb size={48} className="text-accent-400 ml-4" />
      </div>
      
      <div className="p-8">
        <p className="text-lg mb-6 text-gray-700">
          Bem-vindo à Consultoria de Usabilidade! Neste jogo, você será um consultor de usabilidade 
          ajudando empresas a resolver seus problemas de usabilidade. Identifique a Heurística de Nielsen 
          correta que cada problema viola e ganhe dinheiro para sua consultoria!
        </p>
        
        <div className="bg-primary-50 p-4 rounded-lg mb-6 border border-primary-200">
          <h2 className="text-xl font-semibold text-primary-800 mb-2">Como Jogar:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Empresas com problemas de usabilidade mostrarão alertas</li>
            <li>Clique em uma empresa para ver seu problema</li>
            <li>Selecione a Heurística de Nielsen correta que o problema viola</li>
            <li>Ganhe pontos baseados na dificuldade e rapidez da resposta</li>
            <li>Construa sua reputação como o especialista definitivo em usabilidade!</li>
          </ul>
        </div>
        
        <motion.button
          className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg text-xl shadow-md transition-colors"
          onClick={startGame}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Começar Jogo
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StartScreen;