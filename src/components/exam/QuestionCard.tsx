import React, { useState } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../common/Card';
import Button from '../common/Button';
import { Question, QuestionOption } from '../../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, optionId: string, isCorrect: boolean) => void;
  onNext: () => void;
  showExplanation: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  onNext,
  showExplanation,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption || isAnswered) return;
    
    const option = question.options.find(opt => opt.id === selectedOption);
    if (option) {
      onAnswer(question.id, selectedOption, option.isCorrect);
      setIsAnswered(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    onNext();
  };

  const getDifficultyColor = () => {
    switch (question.difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{question.category}</h3>
          <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor()} uppercase font-medium`}>
            {question.difficulty}
          </span>
        </div>
      </CardHeader>
      
      <CardBody>
        <p className="text-lg font-medium text-gray-800 mb-6">{question.text}</p>
        
        <div className="space-y-3">
          {question.options.map((option) => {
            let optionClass = 'p-3 border rounded-md transition-colors cursor-pointer';
            
            if (isAnswered) {
              if (option.isCorrect) {
                optionClass += ' bg-green-100 border-green-300';
              } else if (selectedOption === option.id && !option.isCorrect) {
                optionClass += ' bg-red-100 border-red-300';
              } else {
                optionClass += ' border-gray-200';
              }
            } else {
              optionClass += selectedOption === option.id
                ? ' bg-army-50 border-army-300'
                : ' hover:bg-gray-50 border-gray-200';
            }

            return (
              <div
                key={option.id}
                className={optionClass}
                onClick={() => handleOptionSelect(option.id)}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className={`w-5 h-5 rounded-full border ${
                      selectedOption === option.id 
                        ? 'border-army-500 bg-army-500' 
                        : 'border-gray-300'
                    } flex items-center justify-center`}>
                      {selectedOption === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{option.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {isAnswered && showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h4 className="font-medium text-blue-800 mb-2">Explanation</h4>
            <p className="text-blue-700 text-sm">{question.explanation}</p>
          </div>
        )}
      </CardBody>
      
      <CardFooter className="flex justify-between">
        {!isAnswered ? (
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNext}>Next Question</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;