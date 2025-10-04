'use client';

import { mockQuestions } from '@/data/questions';
import Link from 'next/link';

export default function AnswersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              ← Back to Quiz
            </Link>
            <h1 className="text-4xl font-bold text-gray-800">
              Quiz Answer Key
            </h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
          <p className="text-xl text-gray-600">
            All {mockQuestions.length} questions with correct answers
          </p>
        </div>

        {/* Questions Grid */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {mockQuestions.map((question, index) => (
            <div key={question.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              {/* Question Header */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
                    {question.question}
                  </h3>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2 mb-4 ml-11">
                {question.options.map((option, optionIndex) => (
                  <div 
                    key={optionIndex}
                    className={`p-3 rounded-lg text-sm transition-all ${
                      option === question.answer
                        ? 'bg-green-50 border-2 border-green-300 text-green-800 font-semibold'
                        : 'bg-gray-50 border border-gray-200 text-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-xs">
                        {String.fromCharCode(65 + optionIndex)}.
                      </span>
                      <span>{option}</span>
                      {option === question.answer && (
                        <span className="ml-auto text-green-600">✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Correct Answer Highlight */}
              <div className="bg-green-100 border border-green-300 rounded-lg p-3 ml-11">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600 font-bold text-sm">CORRECT ANSWER:</span>
                  <span className="text-green-800 font-semibold">{question.answer}</span>
                </div>
                {question.explanation && (
                  <p className="text-green-700 text-xs mt-2 opacity-80">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600">{mockQuestions.length}</div>
              <div className="text-sm text-blue-700">Total Questions</div>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600">{mockQuestions.length}</div>
              <div className="text-sm text-green-700">Answers Provided</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-purple-700">Coverage</div>
            </div>
          </div>
          
          <div className="mt-6">
            <Link 
              href="/"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Take the Quiz
            </Link>
          </div>
        </div>

        {/* Print Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.print()}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            🖨️ Print Answer Key
          </button>
        </div>
      </div>
    </div>
  );
}