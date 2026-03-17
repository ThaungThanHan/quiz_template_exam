import { QuizSet } from '@/types/quizSet';
import { mockQuestions } from './questions';
import { mockQuestions as aseanStudyQuestions } from './asean-study';
import { mockQuestions as eeGlobalQuestions } from './ee-global';

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
];
