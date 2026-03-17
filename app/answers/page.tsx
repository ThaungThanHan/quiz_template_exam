import { Suspense } from 'react';
import AnswersPage from '@/components/AnswersPage';

export default function Answers() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AnswersPage />
    </Suspense>
  );
}