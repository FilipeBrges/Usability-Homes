export interface Problem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  correctHeuristicId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  options: string[]; // Heuristic IDs for multiple choice
}

export interface Company {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  hasAlert: boolean;
  problems: Problem[];
}