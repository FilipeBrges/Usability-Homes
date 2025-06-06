import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Building, Building2, Home, School, ShoppingBag } from 'lucide-react';
import { Company } from '../types';

interface CompanyBuildingProps {
  company: Company;
  onClick: () => void;
}

const CompanyBuilding: React.FC<CompanyBuildingProps> = ({ company, onClick }) => {
  const getCompanyIcon = () => {
    switch (company.id) {
      case 'tech-innovate':
        return <Building size={40} className="text-primary-600" />;
      case 'food-delivery':
        return <ShoppingBag size={40} className="text-accent-600" />;
      case 'health-clinic':
        return <Home size={40} className="text-success-500" />;
      case 'online-shop':
        return <ShoppingBag size={40} className="text-primary-400" />;
      case 'travel-agency':
        return <Building2 size={40} className="text-secondary-500" />;
      case 'edu-platform':
        return <School size={40} className="text-warning-500" />;
      default:
        return <Building size={40} className="text-primary-600" />;
    }
  };
  
  const getBgColor = () => {
    switch (company.id) {
      case 'tech-innovate':
        return 'bg-primary-100';
      case 'food-delivery':
        return 'bg-accent-100';
      case 'health-clinic':
        return 'bg-success-50';
      case 'online-shop':
        return 'bg-primary-50';
      case 'travel-agency':
        return 'bg-secondary-100';
      case 'edu-platform':
        return 'bg-warning-50';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <motion.div
      className={`${getBgColor()} rounded-lg p-4 flex flex-col items-center justify-center h-40 relative ${
        company.hasAlert ? 'cursor-pointer alert-animation' : 'cursor-not-allowed opacity-50'
      }`}
      whileHover={company.hasAlert ? { scale: 1.05, y: -5 } : {}}
      whileTap={company.hasAlert ? { scale: 0.95 } : {}}
      onClick={company.hasAlert ? onClick : undefined}
    >
      {company.hasAlert && (
        <motion.div 
          className="absolute -top-2 -right-2 bg-accent-500 text-white p-1 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 10 
          }}
        >
          <AlertCircle size={24} />
        </motion.div>
      )}
      
      <div className="mb-3">
        {getCompanyIcon()}
      </div>
      
      <h3 className="font-bold text-center">{company.name}</h3>
      
      {company.hasAlert && (
        <p className="text-sm mt-2 text-accent-700 font-medium text-center">
          Precisa de ajuda!
        </p>
      )}
    </motion.div>
  );
};

export default CompanyBuilding;