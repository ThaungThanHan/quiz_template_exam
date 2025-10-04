'use client';

import { Question, QuestionResult } from '@/types/quiz';

interface ResultsScreenProps {
  questions: Question[];
  answers: (number | null)[];
  score: number;
  onRestart: () => void;
}

export default function ResultsScreen({ questions, answers, score, onRestart }: ResultsScreenProps) {
  const totalQuestions = questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return { message: "Excellent! 🏆", color: "text-green-600", bg: "bg-green-50" };
    if (percentage >= 80) return { message: "Great job! 🎉", color: "text-blue-600", bg: "bg-blue-50" };
    if (percentage >= 70) return { message: "Good work! 👍", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (percentage >= 60) return { message: "Not bad! 📚", color: "text-orange-600", bg: "bg-orange-50" };
    return { message: "Keep practicing! 💪", color: "text-red-600", bg: "bg-red-50" };
  };

  const scoreMessage = getScoreMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
          <div className={`inline-block px-6 py-3 rounded-2xl ${scoreMessage.bg} border`}>
            <p className={`text-2xl font-bold ${scoreMessage.color}`}>
              {scoreMessage.message}
            </p>
          </div>
        </div>

        {/* Score Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-800 mb-2">
              {score}/{totalQuestions}
            </div>
            <div className="text-2xl text-gray-600 mb-4">
              {percentage}% Correct
            </div>
            
            {/* Score Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <div className="text-2xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-green-700">Correct</div>
              </div>
              <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
                <div className="text-sm text-red-700">Incorrect</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
                <div className="text-sm text-blue-700">Total</div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Review */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Question Review</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer !== null && question.options[userAnswer] === question.answer;
              const wasAnswered = userAnswer !== null;
              
              return (
                <div 
                  key={question.id} 
                  className={`p-4 rounded-xl border ${
                    !wasAnswered 
                      ? 'bg-gray-50 border-gray-200'
                      : isCorrect 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <span className="text-xl">
                        {!wasAnswered ? '⏭️' : isCorrect ? '✅' : '❌'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">
                        Q{index + 1}: {question.question}
                      </p>
                      <div className="text-sm text-gray-600">
                        {!wasAnswered ? (
                          <span className="text-gray-500">Not answered</span>
                        ) : (
                          <>
                            <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                              Your answer: {question.options[userAnswer]}
                            </span>
                            {!isCorrect && (
                              <div className="text-green-700 mt-1">
                                Correct answer: {question.answer}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
}