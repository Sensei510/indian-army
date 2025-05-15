import React from 'react';
import { Clock, Award, BarChart2, CheckCircle } from 'lucide-react';
import Card, { CardHeader, CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const MockTestsPage: React.FC = () => {
  const mockTests = [
    {
      id: 1,
      title: 'NDA Full Mock Test',
      duration: '2 hours',
      questions: 120,
      difficulty: 'Medium',
      attempts: 245
    },
    {
      id: 2,
      title: 'Mathematics Sectional Test',
      duration: '45 minutes',
      questions: 40,
      difficulty: 'Hard',
      attempts: 178
    },
    {
      id: 3,
      title: 'General Knowledge Quiz',
      duration: '30 minutes',
      questions: 50,
      difficulty: 'Easy',
      attempts: 312
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Mock Tests</h1>
          <p className="text-gray-600">
            Practice with our comprehensive mock tests designed to simulate actual exam conditions
          </p>
        </div>

        <div className="grid gap-6">
          {mockTests.map((test) => (
            <Card key={test.id} hoverable>
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {test.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {test.duration}
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {test.questions} questions
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {test.difficulty}
                      </div>
                      <div className="flex items-center">
                        <BarChart2 className="w-4 h-4 mr-1" />
                        {test.attempts} attempts
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/mock-tests/${test.id}`}>
                      <Button variant="primary">Start Test</Button>
                    </Link>
                    <Button variant="outline">View Syllabus</Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTestsPage;