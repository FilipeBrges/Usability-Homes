import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { DollarSign, RotateCcw } from 'lucide-react';

const Scoreboard: React.FC = () => {
  const { score, resetGame } = useGameStore();
  
  return (
    <motion.div 
      className="bg-white rounded-xl p-4 flex justify-between items-center mb-4 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="flex items-center">
        <div className="bg-success-50 p-2 rounded-full mr-3">
          <DollarSign size={24} className="text-success-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Taxa de Consultoria</p>
          <p className="text-2xl font-bold text-success-700">R$ {score.toLocaleString()}</p>
        </div>
      </div>
      
      <motion.button
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg flex items-center font-medium transition-colors"
        onClick={resetGame}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RotateCcw size={18} className="mr-1" /> Reiniciar Jogo
      </motion.button>
    </motion.div>
  );
};

export default Scoreboard;