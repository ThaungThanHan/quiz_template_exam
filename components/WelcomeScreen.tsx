'use client';

import { QuizAudio } from '@/utils/audio';
import Link from 'next/link';

interface WelcomeScreenProps {
  totalQuestions: number;
  onStartQuiz: () => void;
}

export default function WelcomeScreen({ totalQuestions, onStartQuiz }: WelcomeScreenProps) {
  const audio = QuizAudio.getInstance();

  const testCorrectSound = () => {
    audio.playCorrectSound();
  };

  const testIncorrectSound = () => {
    audio.playIncorrectSound();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
        {/* Logo/Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl text-white">🧠</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Home remedy Quiz for friends!
          </h1>
          <p className="text-xl text-gray-600">
            Test your knowledge with {totalQuestions} questions
          </p>
        </div>

        {/* Quiz Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">{totalQuestions}</div>
            <div className="text-sm text-blue-700">Questions</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">∞</div>
            <div className="text-sm text-purple-700">No Time Limit</div>
          </div>
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <div className="text-2xl font-bold text-green-600">100%</div>
            <div className="text-sm text-green-700">Max Score</div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>Read each question carefully</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>Select the best answer from the options provided</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>You'll hear audio feedback for each answer</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>Your final score will be shown at the end</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500">•</span>
              <span>You can retake the quiz anytime</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg w-full md:w-auto"
          >
            Start Quiz 🚀
          </button>
          <Link
            href="/answers"
            className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 hover:scale-105 shadow-lg w-full md:w-auto text-center"
          >
            View Answer Key 📋
          </Link>
        </div>
      </div>
    </div>
  );
}