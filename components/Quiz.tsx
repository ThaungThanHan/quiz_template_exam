'use client';

import { useState, useEffect } from 'react';
import { Question, QuizState } from '@/types/quiz';
import { QuizSet } from '@/types/quizSet';
import { quizSets } from '@/data/quizSets';
import QuizSelector from '@/components/QuizSelector';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuestionCard from '@/components/QuestionCard';
import ResultsScreen from '@/components/ResultsScreen';
import { QuizAudio } from '@/utils/audio';

// Fisher-Yates shuffle to randomize question order
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Quiz() {
  const [selectedQuizSet, setSelectedQuizSet] = useState<QuizSet | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    showResult: false,
    quizCompleted: false
  });

  const [quizStarted, setQuizStarted] = useState(false);

  // Preload audio voices when component mounts
  useEffect(() => {
    const audio = QuizAudio.getInstance();
    audio.preloadVoices();
  }, []);

  const handleSelectQuiz = (quizSet: QuizSet) => {
    setSelectedQuizSet(quizSet);
  };

  const handleStartQuiz = () => {
    if (!selectedQuizSet) return;
    // Shuffle both question order and each question's options
    const shuffled = shuffleArray(selectedQuizSet.questions).map(q => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuestions(shuffled);
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: new Array(shuffled.length).fill(null),
      showResult: false,
      quizCompleted: false
    });
    setQuizStarted(true);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answerIndex;

    const currentQuestion = shuffledQuestions[quizState.currentQuestion];
    const selectedOption = currentQuestion.options[answerIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    const newScore = quizState.score + (isCorrect ? 1 : 0);

    setQuizState(prev => ({
      ...prev,
      answers: newAnswers,
      score: newScore,
      showResult: true
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < shuffledQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        showResult: false
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        quizCompleted: true
      }));
    }
  };

  const handleRestartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResult: false,
      quizCompleted: false
    });
    setQuizStarted(false);
    setSelectedQuizSet(null);
    setShuffledQuestions([]);
  };

  // Step 1: Quiz Selector
  if (!selectedQuizSet) {
    return (
      <QuizSelector
        quizSets={quizSets}
        onSelectQuiz={handleSelectQuiz}
      />
    );
  }

  // Step 2: Welcome Screen
  if (!quizStarted) {
    return (
      <WelcomeScreen
        totalQuestions={selectedQuizSet.questions.length}
        quizSetId={selectedQuizSet.id}
        onStartQuiz={handleStartQuiz}
      />
    );
  }

  // Step 3: Results Screen
  if (quizState.quizCompleted) {
    return (
      <ResultsScreen
        questions={shuffledQuestions}
        answers={quizState.answers}
        score={quizState.score}
        onRestart={handleRestartQuiz}
      />
    );
  }

  // Step 4: Quiz Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-center bg-white rounded-xl shadow-lg p-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Quiz in Progress</h1>
            <p className="text-gray-600">Question {quizState.currentQuestion + 1} of {shuffledQuestions.length}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{quizState.score}</div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={shuffledQuestions[quizState.currentQuestion]}
        currentQuestionNumber={quizState.currentQuestion + 1}
        totalQuestions={shuffledQuestions.length}
        selectedAnswer={quizState.answers[quizState.currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
        showResult={quizState.showResult}
        onNext={handleNextQuestion}
        isLastQuestion={quizState.currentQuestion === shuffledQuestions.length - 1}
      />

      {/* Restart Button (Always visible) */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <button
          onClick={handleRestartQuiz}
          className="text-gray-500 hover:text-gray-700 underline text-sm transition-colors duration-200"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}