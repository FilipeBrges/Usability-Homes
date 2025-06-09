import { create } from 'zustand';
import { companiesData } from '../data/companies';
import { heuristics } from '../data/heuristics';
import { Problem } from '../types';

type GamePhase = 'start' | 'instructions' | 'playing' | 'problem' | 'result';

interface GameState {
  gamePhase: GamePhase;
  score: number;
  activeCompanyId: string | null;
  currentProblem: Problem | null;
  timeRemaining: number;
  isTimerRunning: boolean;
  userAnswer: string | null;
  isAnswerCorrect: boolean | null;
  companies: typeof companiesData;

  startGame: () => void;
  showInstructions: () => void;
  startPlaying: () => void;
  triggerRandomProblem: () => void;
  selectCompany: (companyId: string) => void;
  submitAnswer: (heuristicId: string) => void;
  continueAfterResult: () => void;
  resetGame: () => void;
  decrementTimer: () => void;
  stopTimer: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  gamePhase: 'start',
  score: 0,
  activeCompanyId: null,
  currentProblem: null,
  timeRemaining: 0,
  isTimerRunning: false,
  userAnswer: null,
  isAnswerCorrect: null,
  companies: [...companiesData],

  startGame: () => set({ gamePhase: 'instructions' }),
  
  showInstructions: () => set({ gamePhase: 'instructions' }),
  
  startPlaying: () => {
    set({ gamePhase: 'playing' });
    setTimeout(() => get().triggerRandomProblem(), 3000);
  },
  
  triggerRandomProblem: () => {
    const { companies } = get();
    
    // Get random company
    const randomIndex = Math.floor(Math.random() * companies.length);
    const randomCompany = companies[randomIndex];
    
    // Set active company
    set({ 
      activeCompanyId: randomCompany.id,
      companies: companies.map(company => 
        company.id === randomCompany.id 
          ? { ...company, hasAlert: true } 
          : company
      )
    });
  },
  
  selectCompany: (companyId: string) => {
    const { companies } = get();
    const company = companies.find(c => c.id === companyId);
    
    if (company && company.hasAlert) {
      // Pick a random problem from the company
      const randomProblemIndex = Math.floor(Math.random() * company.problems.length);
      const problem = company.problems[randomProblemIndex];
      
      // Set the timer based on difficulty
      let timeLimit = 45;
      if (problem.difficulty === 'medium') timeLimit = 35;
      if (problem.difficulty === 'hard') timeLimit = 25;
      
      set({ 
        gamePhase: 'problem', 
        currentProblem: problem,
        timeRemaining: timeLimit,
        isTimerRunning: true,
        companies: companies.map(c => 
          c.id === companyId ? { ...c, hasAlert: false } : c
        )
      });
    }
  },
  
  submitAnswer: (heuristicId: string) => {
    const { currentProblem, timeRemaining } = get();
    get().stopTimer();
    
    if (!currentProblem) return;
    
    const isCorrect = heuristicId === currentProblem.correctHeuristicId;
    let pointsEarned = 0;
    
    if (isCorrect) {
      // Points based on difficulty and remaining time
      const basePoints = 
        currentProblem.difficulty === 'easy' ? 100 :
        currentProblem.difficulty === 'medium' ? 200 : 300;
        
      const timeBonus = Math.floor(timeRemaining * 10);
      pointsEarned = basePoints + timeBonus;
      
      set(state => ({ 
        score: state.score + pointsEarned,
        isAnswerCorrect: true,
      }));
    } else {
      set({ isAnswerCorrect: false });
    }
    
    set({
      gamePhase: 'result',
      userAnswer: heuristicId,
    });
  },
  
  continueAfterResult: () => {
    set({ 
      gamePhase: 'playing',
      currentProblem: null,
      userAnswer: null,
      isAnswerCorrect: null
    });
    
    // Trigger a new problem after a delay
    setTimeout(() => get().triggerRandomProblem(), 3000);
  },
  
  resetGame: () => set({
    gamePhase: 'start',
    score: 0,
    activeCompanyId: null,
    currentProblem: null,
    timeRemaining: 0,
    isTimerRunning: false,
    userAnswer: null,
    isAnswerCorrect: null,
    companies: [...companiesData]
  }),
  
  decrementTimer: () => {
    const { timeRemaining, isTimerRunning, submitAnswer } = get();
    
    if (isTimerRunning && timeRemaining > 0) {
      set({ timeRemaining: timeRemaining - 1 });
    } else if (isTimerRunning && timeRemaining <= 0) {
      // Time's up - auto submit a blank answer
      submitAnswer('');
    }
  },
  
  stopTimer: () => set({ isTimerRunning: false })
}));