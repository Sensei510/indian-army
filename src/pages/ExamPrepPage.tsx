import React, { useState } from 'react';
import { Book, Brain, CheckCircle, Filter } from 'lucide-react';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Button from '../components/common/Button';
import { mockQuestions } from '../data/mockData';
import { QuestionCategory, QuestionDifficulty } from '../types';
import { Link } from 'react-router-dom';

const ExamPrepPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuestionDifficulty | 'all'>('all');
  
  // Filter questions based on selected filters
  const filteredQuestions = mockQuestions.filter(question => {
    if (selectedCategory !== 'all' && question.category !== selectedCategory) {
      return false;
    }
    if (selectedDifficulty !== 'all' && question.difficulty !== selectedDifficulty) {
      return false;
    }
    return true;
  });

  // Group questions by category
  const questionsByCategory = filteredQuestions.reduce((acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = [];
    }
    acc[question.category].push(question);
    return acc;
  }, {} as Record<QuestionCategory, typeof mockQuestions>);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Exam Preparation Center</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prepare for your military entrance exams with our comprehensive practice tests, study materials, and progress tracking.
          </p>
        </div>

        {/* Quiz Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card hoverable className="h-full">
            <CardBody className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-army-100 rounded-full flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-army-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">Practice Quiz</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Take a timed quiz with questions tailored to your preparation needs. Track your progress and identify areas for improvement.
              </p>
              <Link to="/exam-prep/quiz" className="mt-auto">
                <Button variant="primary" fullWidth>
                  Start Quiz
                </Button>
              </Link>
            </CardBody>
          </Card>

          <Card hoverable className="h-full">
            <CardBody className="flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-army-100 rounded-full flex items-center justify-center mr-4">
                  <Book className="w-6 h-6 text-army-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">Study Materials</h3>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Access comprehensive study guides, flashcards, and learning resources to help you master the material.
              </p>
              <Link to="/exam-prep/study" className="mt-auto">
                <Button variant="primary" fullWidth>
                  Browse Materials
                </Button>
              </Link>
            </CardBody>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader className="border-b">
            <div className="flex items-center">
              <Filter className="w-5 h-5 mr-2 text-gray-500" />
              <h3 className="text-lg font-semibold text-navy-900">Filter Questions</h3>
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-army-500 focus:ring focus:ring-army-500 focus:ring-opacity-50"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as QuestionCategory | 'all')}
                >
                  <option value="all">All Categories</option>
                  {Object.values(QuestionCategory).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-army-500 focus:ring focus:ring-army-500 focus:ring-opacity-50"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as QuestionDifficulty | 'all')}
                >
                  <option value="all">All Difficulties</option>
                  {Object.values(QuestionDifficulty).map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Question Preview by Category */}
        {Object.keys(questionsByCategory).length > 0 ? (
          Object.entries(questionsByCategory).map(([category, questions]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">{category}</h3>
              <div className="grid grid-cols-1 gap-4">
                {questions.map((question) => (
                  <Card key={question.id} hoverable>
                    <CardBody>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <CheckCircle className="w-5 h-5 text-army-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 mb-2">{question.text}</p>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                              question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            } uppercase font-medium`}>
                              {question.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No questions match your selected filters. Try adjusting your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamPrepPage;