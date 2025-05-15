import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Assessment {
  id: string;
  title: string;
  description: string;
  time_limit: number;
  questions: Question[];
}

interface Question {
  id: string;
  text: string;
  options: string[];
  correct_answer: string;
}

interface AssessmentResult {
  id: string;
  user_id: string;
  assessment_id: string;
  score: number;
  completed_at: string;
  answers: Record<string, string>;
}

interface AssessmentState {
  assessments: Assessment[];
  currentAssessment: Assessment | null;
  results: AssessmentResult[];
  loading: boolean;
  error: string | null;
  fetchAssessments: () => Promise<void>;
  fetchAssessment: (id: string) => Promise<void>;
  submitAssessment: (assessmentId: string, answers: Record<string, string>) => Promise<void>;
  fetchResults: () => Promise<void>;
}

export const useAssessmentStore = create<AssessmentState>((set) => ({
  assessments: [],
  currentAssessment: null,
  results: [],
  loading: false,
  error: null,

  fetchAssessments: async () => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('assessments')
        .select('*');
      
      if (error) throw error;
      set({ assessments: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchAssessment: async (id: string) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('assessments')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      set({ currentAssessment: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  submitAssessment: async (assessmentId: string, answers: Record<string, string>) => {
    try {
      set({ loading: true, error: null });
      const { data: assessment } = await supabase
        .from('assessments')
        .select('questions')
        .eq('id', assessmentId)
        .single();

      if (!assessment) throw new Error('Assessment not found');

      const score = calculateScore(assessment.questions, answers);

      const { error } = await supabase
        .from('assessment_results')
        .insert({
          assessment_id: assessmentId,
          answers,
          score,
          completed_at: new Date().toISOString(),
        });

      if (error) throw error;
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchResults: async () => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('assessment_results')
        .select('*')
        .order('completed_at', { ascending: false });
      
      if (error) throw error;
      set({ results: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

function calculateScore(questions: Question[], answers: Record<string, string>): number {
  let correct = 0;
  questions.forEach((question) => {
    if (answers[question.id] === question.correct_answer) {
      correct++;
    }
  });
  return (correct / questions.length) * 100;
}