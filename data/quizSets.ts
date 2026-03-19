import { QuizSet } from '@/types/quizSet';
import { mockQuestions } from './questions';
import { mockQuestions as aseanStudyQuestions } from './asean-study';
import { mockQuestions as eeGlobalQuestions } from './ee-global';
import { mockQuestions as eeFinalQuestions } from './ee-final';
import { mockQuestions as eeItQuestions } from './ee-it';
import { mockQuestions as eeDtbiQuestions } from './ee-dtbi';

export const quizSets: QuizSet[] = [
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    description: `${mockQuestions.length} questions on global citizenship, ASEAN, world leaders & current affairs (2025–2026)`,
    icon: '🌍',
    color: 'from-blue-500 to-purple-600',
    questions: mockQuestions,
  },
  {
    id: 'asean-study',
    title: 'ASEAN Study PDF',
    description: `${aseanStudyQuestions.length} questions on ASEAN fundamentals, member states, history & regional affairs`,
    icon: '📖',
    color: 'from-emerald-500 to-teal-600',
    questions: aseanStudyQuestions,
  },
  {
    id: 'ee-global',
    title: 'EE-Global',
    description: `${eeGlobalQuestions.length} questions on the UN, SDGs, global news events & world culture (2022–2024)`,
    icon: '🏛️',
    color: 'from-orange-500 to-amber-600',
    questions: eeGlobalQuestions,
  },
  {
    id: 'ee-global-final',
    title: 'EE-Global Final',
    description: `${eeFinalQuestions.length} questions on UN history, specialized agencies, and 2023-2024 global events.`,
    icon: '🏆',
    color: 'from-red-500 to-pink-600',
    questions: eeFinalQuestions,
  },
  {
    id: 'ee-it',
    title: 'EE-IT',
    description: `${eeItQuestions.length} questions on computer systems, data science, digital literacy & emerging technologies.`,
    icon: '💻',
    color: 'from-blue-600 to-cyan-500',
    questions: eeItQuestions,
  },
  {
    id: 'ee-dtbi',
    title: 'EE-DTBI',
    description: `${eeDtbiQuestions.length} questions on business analytics, branding, digital business models & data governance.`,
    icon: '📊',
    color: 'from-purple-600 to-indigo-500',
    questions: eeDtbiQuestions,
  },
];
