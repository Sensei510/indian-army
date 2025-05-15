import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/exam/QuestionCard';
import QuizSummary from '../components/exam/QuizSummary';
import { mockQuestions } from '../data/mockData';
import { ExamResult, AnsweredQuestion } from '../types';

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [quizStartTime, setQuizStartTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);
  const navigate = useNavigate();

  // Shuffle and take a subset of questions for the quiz
  const [quizQuestions] = useState(() => {
    const shuffled = [...mockQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); // Take 5 random questions for the quiz
  });

  useEffect(() => {
    // Reset question start time when moving to a new question
    setQuestionStartTime(Date.now());
  }, [currentQuestionIndex]);

  const handleAnswer = (questionId: string, optionId: string, isCorrect: boolean) => {
    const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
    
    setAnsweredQuestions([
      ...answeredQuestions,
      {
        questionId,
        selectedOptionId: optionId,
        isCorrect,
        timeSpent
      }
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    const totalTimeTaken = Math.floor((Date.now() - quizStartTime) / 1000);
    
    const result: ExamResult = {
      id: Math.random().toString(36).substring(2, 9),
      userId: "current-user", // This would come from auth context in a real app
      score,
      totalQuestions: quizQuestions.length,
      timeTaken: totalTimeTaken,
      answeredQuestions,
      createdAt: new Date()
    };
    
    setExamResult(result);
    setQuizCompleted(true);
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setAnsweredQuestions([]);
    setScore(0);
    setQuizStartTime(Date.now());
    setQuizCompleted(false);
    setExamResult(null);
    
    // Shuffle and take a new subset of questions
    const shuffled = [...mockQuestions].sort(() => 0.5 - Math.random());
    const newQuizQuestions = shuffled.slice(0, 5);
    navigate(0); // Refresh the page to get new questions
  };

  if (quizCompleted && examResult) {
    return (
      <div className="container mx-auto px-4 py-12">
        <QuizSummary 
          result={examResult} 
          questions={quizQuestions} 
          onRetake={handleRetake} 
        />
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-navy-900">
            Practice Quiz
          </h1>
          <div className="text-gray-600">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </div>
        </div>

        <div className="mb-6 bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-army-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>

        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            onNext={handleNext}
            showExplanation={true}
          />
        )}
      </div>
    </div>
  );
};

export default QuizPage;