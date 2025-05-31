import React from 'react';

interface TimerProps {
  timeRemaining: number;
  totalTime: number;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, totalTime }) => {
  const percentage = (timeRemaining / totalTime) * 100;
  
  // Determine color based on time remaining
  const getTimerColor = () => {
    if (percentage > 66) return 'bg-success-500';
    if (percentage > 33) return 'bg-warning-500';
    return 'bg-error-500';
  };
  
  return (
    <div className="w-full h-2 bg-gray-200">
      <div 
        className={`h-full ${getTimerColor()} transition-all duration-200 ease-linear`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default Timer;