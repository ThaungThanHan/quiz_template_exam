export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: (number | null)[];
  showResult: boolean;
  quizCompleted: boolean;
}

export interface QuestionResult {
  questionId: number;
  selectedAnswer: number;
  correctAnswer: string;
  isCorrect: boolean;
}