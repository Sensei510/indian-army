import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, BarChart2 } from 'lucide-react';
import Card, { CardHeader, CardBody, CardFooter } from '../common/Card';
import Button from '../common/Button';
import { ExamResult, Question } from '../../types';

interface QuizSummaryProps {
  result: ExamResult;
  questions: Question[];
  onRetake: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ result, questions, onRetake }) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const calculatePercentage = (score: number, total: number): number => {
    return Math.round((score / total) * 100);
  };

  const getScoreColor = (percentage: number): string => {
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const scorePercentage = calculatePercentage(result.score, result.totalQuestions);
  const scoreColorClass = getScoreColor(scorePercentage);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-800">Quiz Summary</h2>
      </CardHeader>
      
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-600 mb-2">Your Score</h3>
            <div className={`text-4xl font-bold ${scoreColorClass}`}>
              {result.score}/{result.totalQuestions}
            </div>
            <div className={`text-xl font-semibold ${scoreColorClass}`}>
              {scorePercentage}%
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
              <div className="text-sm font-medium text-gray-600">Correct</div>
              <div className="text-2xl font-bold text-green-600">{result.score}</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-red-50 rounded-lg">
              <XCircle className="w-8 h-8 text-red-500 mb-2" />
              <div className="text-sm font-medium text-gray-600">Incorrect</div>
              <div className="text-2xl font-bold text-red-600">
                {result.totalQuestions - result.score}
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
              <Clock className="w-8 h-8 text-blue-500 mb-2" />
              <div className="text-sm font-medium text-gray-600">Time Taken</div>
              <div className="text-lg font-bold text-blue-600">
                {formatTime(result.timeTaken)}
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-purple-50 rounded-lg">
              <BarChart2 className="w-8 h-8 text-purple-500 mb-2" />
              <div className="text-sm font-medium text-gray-600">Avg. Time</div>
              <div className="text-lg font-bold text-purple-600">
                {formatTime(Math.round(result.timeTaken / result.totalQuestions))}
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Question Review</h3>
        
        <div className="space-y-4">
          {result.answeredQuestions.map((answered, index) => {
            const question = questions.find(q => q.id === answered.questionId);
            if (!question) return null;
            
            const selectedOption = question.options.find(
              opt => opt.id === answered.selectedOptionId
            );
            const correctOption = question.options.find(opt => opt.isCorrect);
            
            return (
              <div 
                key={answered.questionId} 
                className="p-4 border rounded-md"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    {answered.isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{`${index + 1}. ${question.text}`}</p>
                    
                    <div className="mt-2 text-sm">
                      <p>
                        <span className="text-gray-600">Your answer: </span>
                        <span className={answered.isCorrect ? 'text-green-600' : 'text-red-600'}>
                          {selectedOption?.text || 'No answer selected'}
                        </span>
                      </p>
                      
                      {!answered.isCorrect && (
                        <p className="text-green-600 mt-1">
                          <span className="text-gray-600">Correct answer: </span>
                          {correctOption?.text}
                        </p>
                      )}
                    </div>
                    
                    <p className="mt-2 text-xs text-gray-500">
                      Time spent: {formatTime(answered.timeSpent)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardBody>
      
      <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
        <Button variant="primary" onClick={onRetake}>
          Take Another Quiz
        </Button>
        
        <Link to="/dashboard">
          <Button variant="outline">Return to Dashboard</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuizSummary;