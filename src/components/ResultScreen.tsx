import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { heuristics } from '../data/heuristics';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

const ResultScreen: React.FC = () => {
  const { 
    currentProblem, 
    isAnswerCorrect, 
    userAnswer, 
    continueAfterResult,
    companies,
    activeCompanyId
  } = useGameStore();
  
  if (!currentProblem) return null;
  
  const currentCompany = companies.find(c => c.id === activeCompanyId);
  
  const correctHeuristic = heuristics.find(h => h.id === currentProblem.correctHeuristicId);
  
  const selectedHeuristic = userAnswer ? 
    heuristics.find(h => h.id === userAnswer) : null;
  
  return (
    <motion.div 
      className="w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`p-6 ${isAnswerCorrect ? 'bg-success-500' : 'bg-error-500'} text-white`}>
        <div className="flex items-center">
          {isAnswerCorrect ? (
            <>
              <CheckCircle size={32} className="mr-3" />
              <h2 className="text-2xl font-bold">Solução Correta!</h2>
            </>
          ) : (
            <>
              <XCircle size={32} className="mr-3" />
              <h2 className="text-2xl font-bold">Não Foi Dessa Vez</h2>
            </>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{currentCompany?.name}: {currentProblem.title}</h3>
        <p className="text-gray-700 mb-6">{currentProblem.description}</p>
        
        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mb-6">
          <h4 className="font-semibold text-primary-800 mb-2">A Heurística Correta:</h4>
          <div className="font-medium text-primary-900">{correctHeuristic?.name}</div>
          <p className="mt-2 text-gray-700 text-sm">{correctHeuristic?.description}</p>
        </div>
        
        {!isAnswerCorrect && selectedHeuristic && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
            <h4 className="font-semibold text-gray-700 mb-2">Sua Seleção:</h4>
            <div className="font-medium text-gray-800">{selectedHeuristic?.name}</div>
          </div>
        )}
        
        <motion.button
          className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center shadow-md"
          onClick={continueAfterResult}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continuar <ArrowRight className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultScreen;