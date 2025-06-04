
import { useGameStore } from './store/gameStore';
import StartScreen from './components/StartScreen';
import InstructionsDialog from './components/InstructionsDialog';
import GameBoard from './components/GameBoard';
import ProblemScreen from './components/ProblemScreen';
import ResultScreen from './components/ResultScreen';
import Scoreboard from './components/Scoreboard';

function App() {
  const { gamePhase } = useGameStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-500  via-primary-900 to-gray-600 font-outfit flex flex-col items-center justify-center p-4">
      {gamePhase === 'start' && <StartScreen />}
      {gamePhase === 'instructions' && <InstructionsDialog />}
      {gamePhase === 'playing' && (
        <div className="w-full max-w-6xl">
          <Scoreboard />
          <GameBoard />
        </div>
      )}
      {gamePhase === 'problem' && <ProblemScreen />}
      {gamePhase === 'result' && <ResultScreen />}
    </div>
  );
}

export default App;