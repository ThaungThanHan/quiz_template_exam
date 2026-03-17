'use client';

import { QuizSet } from '@/types/quizSet';

interface QuizSelectorProps {
  quizSets: QuizSet[];
  onSelectQuiz: (quizSet: QuizSet) => void;
}

export default function QuizSelector({ quizSets, onSelectQuiz }: QuizSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl text-white">📚</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Quiz</h1>
          <p className="text-lg text-gray-600">Select a topic to begin</p>
        </div>

        {/* Quiz Set Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizSets.map((set) => (
            <button
              key={set.id}
              onClick={() => onSelectQuiz(set)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden text-left focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              {/* Card Top Gradient Bar */}
              <div className={`h-2 bg-gradient-to-r ${set.color}`} />

              <div className="p-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${set.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{set.icon}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {set.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{set.description}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-400">
                    {set.questions.length} questions
                  </span>
                  <span className="text-blue-500 group-hover:translate-x-1 transition-transform duration-200 text-lg">
                    →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
