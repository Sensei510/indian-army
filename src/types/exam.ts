export interface ExamType {
  id: string;
  name: string;
  shortName: string;
  description: string;
  eligibility: string;
  examPattern: string;
  syllabus: string[];
  importantDates: {
    registration: string;
    exam: string;
    results: string;
  };
}

export interface Question {
  id: string;
  examType: string;
  subject: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questionText: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  marks: number;
}

export interface MockTest {
  id: string;
  examType: string;
  title: string;
  duration: number; // in minutes
  totalMarks: number;
  questions: Question[];
  instructions: string[];
}

export interface UserProgress {
  userId: string;
  examType: string;
  completedTopics: string[];
  testScores: {
    testId: string;
    score: number;
    date: string;
  }[];
  studyTime: number; // in minutes
  strengthAreas: string[];
  weakAreas: string[];
}