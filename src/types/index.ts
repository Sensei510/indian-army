// User related types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profileImg?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

// Exam related types
export interface Question {
  id: string;
  text: string;
  category: QuestionCategory;
  difficulty: QuestionDifficulty;
  options: QuestionOption[];
  explanation: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export enum QuestionCategory {
  GENERAL_KNOWLEDGE = 'General Knowledge',
  PHYSICAL_FITNESS = 'Physical Fitness',
  TACTICAL = 'Tactical',
  LEADERSHIP = 'Leadership',
  TECHNICAL = 'Technical'
}

export enum QuestionDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export interface ExamResult {
  id: string;
  userId: string;
  score: number;
  totalQuestions: number;
  timeTaken: number; // in seconds
  answeredQuestions: AnsweredQuestion[];
  createdAt: Date;
}

export interface AnsweredQuestion {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
  timeSpent: number; // in seconds
}

// Military information types
export interface MilitaryBranch {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  websiteUrl: string;
  requirements: string;
  ranks: MilitaryRank[];
}

export interface MilitaryRank {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  imageUrl: string;
  payGrade: string;
}

// Study material types
export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  category: QuestionCategory;
  content: string;
  attachments?: StudyAttachment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface StudyAttachment {
  id: string;
  title: string;
  fileUrl: string;
  fileType: string;
}

// Application tracking
export interface Application {
  id: string;
  userId: string;
  branchId: string;
  status: ApplicationStatus;
  submittedAt: Date;
  updatedAt: Date;
  notes?: string;
}

export enum ApplicationStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  INTERVIEW_SCHEDULED = 'interview_scheduled',
  MEDICAL_CHECK = 'medical_check',
  BACKGROUND_CHECK = 'background_check',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}