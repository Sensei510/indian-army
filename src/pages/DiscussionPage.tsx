import React from 'react';
import { MessageSquare, Users, ThumbsUp, Eye } from 'lucide-react';
import Card, { CardHeader, CardBody } from '../components/common/Card';
import Button from '../components/common/Button';

const DiscussionPage: React.FC = () => {
  const discussions = [
    {
      id: 1,
      title: 'Tips for NDA Mathematics preparation',
      author: 'Rajesh Kumar',
      replies: 24,
      views: 156,
      likes: 45,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      title: 'Physical Training routine for military fitness',
      author: 'Amit Singh',
      replies: 18,
      views: 98,
      likes: 32,
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      title: 'Current Affairs discussion for CDS exam',
      author: 'Priya Sharma',
      replies: 31,
      views: 203,
      likes: 67,
      timestamp: '6 hours ago'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy-900 mb-2">Discussion Forum</h1>
            <p className="text-gray-600">
              Connect with fellow aspirants and share your knowledge
            </p>
          </div>
          <Button variant="primary" leftIcon={<MessageSquare className="w-4 h-4" />}>
            New Discussion
          </Button>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion) => (
            <Card key={discussion.id} hoverable>
              <CardBody className="p-6">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="mr-4">{discussion.author}</span>
                      <span>{discussion.timestamp}</span>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center text-gray-600">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Eye className="w-4 h-4 mr-1" />
                        <span>{discussion.views} views</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Discussion
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;