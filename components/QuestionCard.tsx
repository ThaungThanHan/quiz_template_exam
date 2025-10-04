'use client';

import { Question } from '@/types/quiz';
import { useState, useEffect } from 'react';
import { QuizAudio } from '@/utils/audio';

interface QuestionCardProps {
  question: Question;
  currentQuestionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showResult: boolean;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function QuestionCard({
  question,
  currentQuestionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  showResult,
  onNext,
  isLastQuestion
}: QuestionCardProps) {
  const audio = QuizAudio.getInstance();

  // Play sound effect when result is shown
  useEffect(() => {
    if (showResult && selectedAnswer !== null) {
      const isCorrect = question.options[selectedAnswer] === question.answer;
      setTimeout(() => {
        if (isCorrect) {
          audio.playCorrectSound();
        } else {
          audio.playIncorrectSound();
        }
      }, 300); // Small delay for better UX
    }
  }, [showResult, selectedAnswer, question.options, question.answer, audio]);
  const getOptionClass = (optionIndex: number) => {
    let baseClass = "w-full p-4 text-left border-2 rounded-xl transition-all duration-200 hover:scale-[1.02] ";
    
    const correctAnswerIndex = question.options.indexOf(question.answer);
    
    if (!showResult) {
      if (selectedAnswer === optionIndex) {
        return baseClass + "border-blue-500 bg-blue-50 text-blue-800 shadow-lg";
      }
      return baseClass + "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
    }
    
    // Show results
    if (optionIndex === correctAnswerIndex) {
      return baseClass + "border-green-500 bg-green-50 text-green-800 shadow-lg";
    }
    
    if (selectedAnswer === optionIndex && optionIndex !== correctAnswerIndex) {
      return baseClass + "border-red-500 bg-red-50 text-red-800 shadow-lg";
    }
    
    return baseClass + "border-gray-200 bg-gray-50 opacity-60";
  };

  const getOptionIcon = (optionIndex: number) => {
    const correctAnswerIndex = question.options.indexOf(question.answer);
    
    if (!showResult) {
      return selectedAnswer === optionIndex ? "●" : "○";
    }
    
    if (optionIndex === correctAnswerIndex) {
      return "✓";
    }
    
    if (selectedAnswer === optionIndex && optionIndex !== correctAnswerIndex) {
      return "✗";
    }
    
    return "○";
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestionNumber} of {totalQuestions}</span>
          <span>{Math.round((currentQuestionNumber / totalQuestions) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => !showResult && onAnswerSelect(index)}
            disabled={showResult}
          >
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold min-w-[24px]">
                {getOptionIcon(index)}
              </span>
              <span className="flex-1 text-lg">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Result Message */}
      {showResult && selectedAnswer !== null && (
        <div className="mb-6">
          <div className={`p-4 rounded-xl ${
            question.options[selectedAnswer] === question.answer 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl">
                {question.options[selectedAnswer] === question.answer ? '🎉' : '😔'}
              </span>
              <span className={`font-bold text-lg ${
                question.options[selectedAnswer] === question.answer ? 'text-green-700' : 'text-red-700'
              }`}>
                {question.options[selectedAnswer] === question.answer ? 'Correct!' : 'Incorrect!'}
              </span>
            </div>
            {question.explanation && (
              <p className="text-gray-700 text-sm mt-2">
                <strong>Explanation:</strong> {question.explanation}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Next Button */}
      {showResult && (
        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            {isLastQuestion ? 'View Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
}