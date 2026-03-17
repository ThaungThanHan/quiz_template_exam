import { Question } from './quiz';

export interface QuizSet {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string; // gradient "from" color class
  questions: Question[];
}
