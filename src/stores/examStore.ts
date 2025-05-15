import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { Question, MockTest, UserProgress } from '../types/exam';

interface ExamStore {
  questions: Question[];
  currentTest: MockTest | null;
  userProgress: UserProgress | null;
  loading: boolean;
  error: string | null;
  fetchQuestions: (examType: string, subject?: string) => Promise<void>;
  startTest: (examType: string) => Promise<void>;
  submitAnswer: (questionId: string, answerId: string) => Promise<void>;
  updateProgress: (progress: Partial<UserProgress>) => Promise<void>;
}

export const useExamStore = create<ExamStore>((set, get) => ({
  questions: [],
  currentTest: null,
  userProgress: null,
  loading: false,
  error: null,

  fetchQuestions: async (examType: string, subject?: string) => {
    try {
      set({ loading: true, error: null });
      let query = supabase
        .from('questions')
        .select('*')
        .eq('examType', examType);

      if (subject) {
        query = query.eq('subject', subject);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      set({ questions: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  startTest: async (examType: string) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('mock_tests')
        .select('*')
        .eq('examType', examType)
        .single();

      if (error) throw error;
      set({ currentTest: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  submitAnswer: async (questionId: string, answerId: string) => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase
        .from('user_answers')
        .insert({
          questionId,
          answerId,
          userId: supabase.auth.user()?.id
        });

      if (error) throw error;
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateProgress: async (progress: Partial<UserProgress>) => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          userId: supabase.auth.user()?.id,
          ...progress
        });

      if (error) throw error;
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  }
}));