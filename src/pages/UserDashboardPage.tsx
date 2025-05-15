import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  BookOpen, 
  FileText, 
  Calendar, 
  Clock, 
  Award, 
  User,
  ChevronRight
} from 'lucide-react';
import Card, { CardHeader, CardBody, CardFooter } from '../components/common/Card';
import Button from '../components/common/Button';
import { useAuth } from '../context/AuthContext';

const UserDashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock data for the dashboard
  const mockExamStats = {
    totalExams: 12,
    avgScore: 78,
    bestScore: 92,
    completedToday: 1,
    streak: 4
  };

  const mockRecentExams = [
    { id: 'e1', name: 'General Knowledge Quiz', score: 85, date: '2023-08-15', questions: 20 },
    { id: 'e2', name: 'Physical Fitness Assessment', score: 70, date: '2023-08-10', questions: 15 },
    { id: 'e3', name: 'Leadership Principles', score: 90, date: '2023-08-05', questions: 10 }
  ];

  const mockRecommendedMaterials = [
    { id: 'sm1', name: 'Military Ranks and Hierarchy', category: 'General Knowledge', progress: 75 },
    { id: 'sm2', name: 'Physical Fitness Training Guide', category: 'Physical Fitness', progress: 30 },
    { id: 'sm3', name: 'Leadership Principles', category: 'Leadership', progress: 50 }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-navy-900 mb-2">
          Welcome Back, {user?.firstName || 'User'}
        </h1>
        <p className="text-gray-600">
          Track your progress, take practice tests, and prepare for your military career.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardBody className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Exams Taken</p>
              <p className="text-2xl font-semibold">{mockExamStats.totalExams}</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <BarChart2 className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Score</p>
              <p className="text-2xl font-semibold">{mockExamStats.avgScore}%</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Best Score</p>
              <p className="text-2xl font-semibold">{mockExamStats.bestScore}%</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Daily Streak</p>
              <p className="text-2xl font-semibold">{mockExamStats.streak} days</p>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recent Exams */}
          <Card>
            <CardHeader className="border-b border-gray-200">
              <h2 className="text-lg font-semibold text-navy-900">Recent Exams</h2>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                {mockRecentExams.map((exam) => (
                  <div key={exam.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{exam.name}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(exam.date).toLocaleDateString()} • {exam.questions} questions
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-semibold ${
                          exam.score >= 80 ? 'text-green-600' : 
                          exam.score >= 60 ? 'text-yellow-600' : 
                          'text-red-600'
                        }`}>
                          {exam.score}%
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
            <CardFooter className="border-t border-gray-200">
              <Link 
                to="/dashboard/history" 
                className="text-army-600 hover:text-army-700 text-sm font-medium flex items-center"
              >
                View All Exam History
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </CardFooter>
          </Card>

          {/* Progress Overview */}
          <Card>
            <CardHeader className="border-b border-gray-200">
              <h2 className="text-lg font-semibold text-navy-900">Category Performance</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">General Knowledge</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Physical Fitness</span>
                    <span className="text-sm font-medium text-gray-700">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Leadership</span>
                    <span className="text-sm font-medium text-gray-700">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Tactical</span>
                    <span className="text-sm font-medium text-gray-700">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Technical</span>
                    <span className="text-sm font-medium text-gray-700">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* User Profile Card */}
          <Card>
            <CardBody>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-navy-100 flex items-center justify-center mb-4">
                  <User className="w-10 h-10 text-navy-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-1">
                  {user?.firstName} {user?.lastName}
                </h3>
                <p className="text-gray-500 mb-4">{user?.email}</p>
                <div className="w-full">
                  <Link to="/dashboard/profile">
                    <Button variant="outline" fullWidth>
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader className="border-b border-gray-200">
              <h2 className="text-lg font-semibold text-navy-900">Quick Actions</h2>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                <Link to="/exam-prep/quiz" className="flex items-center p-4 hover:bg-gray-50">
                  <div className="w-10 h-10 rounded-full bg-army-100 flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-army-600" />
                  </div>
                  <span className="font-medium text-gray-900">Take a Practice Test</span>
                </Link>
                
                <Link to="/exam-prep/study" className="flex items-center p-4 hover:bg-gray-50">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">Browse Study Materials</span>
                </Link>
                
                <Link to="/dashboard/schedule" className="flex items-center p-4 hover:bg-gray-50">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">Study Schedule</span>
                </Link>
              </div>
            </CardBody>
          </Card>

          {/* Recommended Study Materials */}
          <Card>
            <CardHeader className="border-b border-gray-200">
              <h2 className="text-lg font-semibold text-navy-900">Recommended Materials</h2>
            </CardHeader>
            <CardBody className="p-0">
              <div className="divide-y divide-gray-200">
                {mockRecommendedMaterials.map((material) => (
                  <Link
                    key={material.id}
                    to={`/exam-prep/study/${material.id}`}
                    className="block p-4 hover:bg-gray-50"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">{material.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{material.category}</p>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                      <div
                        className="bg-army-600 h-1.5 rounded-full"
                        style={{ width: `${material.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 text-right">{material.progress}% complete</p>
                  </Link>
                ))}
              </div>
            </CardBody>
            <CardFooter className="border-t border-gray-200">
              <Link
                to="/exam-prep/study"
                className="text-army-600 hover:text-army-700 text-sm font-medium flex items-center"
              >
                Browse All Study Materials
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;