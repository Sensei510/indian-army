import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Course {
  id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
}

interface Lesson {
  id: string;
  course_id: string;
  title: string;
  content: string;
  order: number;
}

interface CourseState {
  courses: Course[];
  currentCourse: Course | null;
  lessons: Lesson[];
  loading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
  fetchCourse: (id: string) => Promise<void>;
  fetchLessons: (courseId: string) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  currentCourse: null,
  lessons: [],
  loading: false,
  error: null,

  fetchCourses: async () => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      set({ courses: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchCourse: async (id: string) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      set({ currentCourse: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchLessons: async (courseId: string) => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('course_id', courseId)
        .order('order', { ascending: true });
      
      if (error) throw error;
      set({ lessons: data });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));