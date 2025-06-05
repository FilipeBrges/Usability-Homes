import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { heuristics } from '../data/heuristics';
import { AlertTriangle, Building } from 'lucide-react';
import Timer from './Timer';

const ProblemScreen: React.FC = () => {
  const { 
    currentProblem, 
    submitAnswer, 
    decrementTimer,
    timeRemaining,
    companies, 
    activeCompanyId 
  } = useGameStore();
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const currentCompany = companies.find(c => c.id === activeCompanyId);
  
  useEffect(() => {
    timerRef.current = setInterval(() => {
      decrementTimer();
    }, 1000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [decrementTimer]);
  
  if (!currentProblem || !currentCompany) {
    return null;
  }
  
  const heuristicOptions = currentProblem.options.map(id => 
    heuristics.find(h => h.id === id)
  ).filter(Boolean);
  
  const difficultyInfo = {
    easy: { label: 'Fácil', color: 'bg-success-500' },
    medium: { label: 'Médio', color: 'bg-warning-500' },
    hard: { label: 'Difícil', color: 'bg-error-500' }
  };
  
  const difficulty = difficultyInfo[currentProblem.difficulty];
  
  return (
    <motion.div 
      className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-primary-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Building size={24} className="text-white mr-2" />
          <h2 className="text-xl font-bold text-white">{currentCompany.name}</h2>
        </div>
        <div className={`${difficulty.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
          <AlertTriangle size={16} className="mr-1" />
          Problema {difficulty.label}
        </div>
      </div>
      
      <div className="relative">
        <Timer timeRemaining={timeRemaining} totalTime={
          currentProblem.difficulty === 'easy' ? 20 :
          currentProblem.difficulty === 'medium' ? 10 : 5
        } />
      </div>
      
      <div className="p-6">
        {currentProblem.difficulty === 'easy' && (
          <>
            <h3 className="text-xl font-bold mb-2">{currentProblem.title}</h3>
            <p className="text-gray-700 mb-4">{currentProblem.description}</p>
          </>
        )}
        {currentProblem.difficulty === 'medium' && (
          <h3 className="text-xl font-bold mb-6">{currentProblem.title}</h3>
        )}
        {/* Para difícil, não mostra nada */}
        <div className="bg-gray-100 rounded-lg h-64 mb-6 flex items-center justify-center border-2 border-dashed border-gray-300">
          <img
            src={currentProblem.imagePath}
            alt="Imagem do problema"
            className="max-h-60 max-w-full object-contain"
          />
        </div>
        <h4 className="text-lg font-semibold mb-3">Qual Heurística de Nielsen está sendo violada?</h4>
        <div className="space-y-3">
          {heuristicOptions.map(heuristic => heuristic && (
            <motion.button
              key={heuristic.id}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-colors"
              onClick={() => submitAnswer(heuristic.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">{heuristic.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemScreen;