import { ExamType } from '../types/exam';

export const examTypes: ExamType[] = [
  {
    id: 'nda',
    name: 'National Defence Academy',
    shortName: 'NDA',
    description: 'The National Defence Academy (NDA) is the joint defence service training institute of the Indian Armed Forces. The NDA examination is conducted by UPSC twice a year.',
    eligibility: 'Unmarried male candidates who have passed 10+2 or equivalent examination. Age limit: 16.5-19.5 years.',
    examPattern: 'Written examination followed by SSB interview. Written exam consists of Mathematics (300 marks) and General Ability Test (600 marks).',
    syllabus: [
      'Mathematics: Algebra, Matrices, Calculus, Trigonometry, Analytical Geometry',
      'General Ability Test: English, General Knowledge, Current Affairs, Elementary Mathematics',
      'SSB Interview: Officer Intelligence Rating tests, Picture Perception tests, Group Testing, Interview'
    ],
    importantDates: {
      registration: '2025-06-15',
      exam: '2025-09-04',
      results: '2025-10-15'
    }
  },
  {
    id: 'cds',
    name: 'Combined Defence Services',
    shortName: 'CDS',
    description: 'The Combined Defence Services Examination is conducted by UPSC for recruitment into the Indian Military Academy, Indian Naval Academy, Air Force Academy, and Officers Training Academy.',
    eligibility: 'Graduates for IMA/INA/AFA, Final year students can also apply. Age limit varies by academy.',
    examPattern: 'Written examination followed by SSB interview. Subjects include English, General Knowledge, and Elementary Mathematics.',
    syllabus: [
      'English: Comprehension, Grammar, Vocabulary, Usage',
      'General Knowledge: History, Geography, Politics, Economics, Science',
      'Elementary Mathematics: Arithmetic, Algebra, Geometry, Trigonometry'
    ],
    importantDates: {
      registration: '2025-07-20',
      exam: '2025-11-10',
      results: '2025-12-15'
    }
  },
  {
    id: 'afcat',
    name: 'Air Force Common Admission Test',
    shortName: 'AFCAT',
    description: 'AFCAT is conducted by the Indian Air Force for recruitment of commissioned officers in various branches.',
    eligibility: 'Graduates with minimum 60% marks. Age limit: 20-24 years for flying branch, 20-26 years for other branches.',
    examPattern: 'Computer-based test followed by SSB interview. Test includes General Awareness, Verbal Ability, Numerical Ability, and Reasoning.',
    syllabus: [
      'General Awareness: Current Affairs, Defence, History, Sports, Geography',
      'Verbal Ability: English Grammar, Vocabulary, Comprehension',
      'Numerical Ability: Basic Mathematics, Data Interpretation',
      'Reasoning and Military Aptitude: Verbal/Non-verbal Reasoning, Spatial Ability'
    ],
    importantDates: {
      registration: '2025-08-01',
      exam: '2025-12-05',
      results: '2026-01-15'
    }
  }
];