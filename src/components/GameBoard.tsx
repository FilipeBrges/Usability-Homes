import React from 'react';
import { motion } from 'framer-motion';
import CompanyBuilding from './CompanyBuilding';
import { useGameStore } from '../store/gameStore';

const GameBoard: React.FC = () => {
  const { companies, selectCompany } = useGameStore();

  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Selecione uma Empresa para Ajudar</h2>
      
      <div className="company-grid">
        {companies.map((company) => (
          <CompanyBuilding
            key={company.id}
            company={company}
            onClick={() => selectCompany(company.id)}
          />
        ))}
      </div>
      
      <div className="mt-6 bg-primary-50 p-4 rounded-lg border border-primary-100">
        <p className="text-gray-700">
          <span className="font-semibold">Dica:</span> Fique atento às empresas que mostram sinais de alerta. 
          Elas precisam da sua expertise em usabilidade imediatamente!
        </p>
      </div>
    </motion.div>
  );
};

export default GameBoard;