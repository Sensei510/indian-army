import React from 'react';
import { Book, Download, Video, FileText } from 'lucide-react';
import Card, { CardHeader, CardBody } from '../components/common/Card';
import Button from '../components/common/Button';

const MaterialsPage: React.FC = () => {
  const materials = [
    {
      id: 1,
      title: 'NDA Mathematics Complete Guide',
      type: 'PDF',
      description: 'Comprehensive study material covering all mathematics topics for NDA examination',
      downloadUrl: '#',
      icon: FileText
    },
    {
      id: 2,
      title: 'General Knowledge Video Series',
      type: 'Video',
      description: 'Video lectures covering current affairs, history, geography, and science',
      downloadUrl: '#',
      icon: Video
    },
    {
      id: 3,
      title: 'Physical Training Guide',
      type: 'PDF',
      description: 'Detailed guide for physical fitness preparation and training routines',
      downloadUrl: '#',
      icon: Book
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Study Materials</h1>
          <p className="text-gray-600">
            Access comprehensive study materials to help you prepare for military entrance exams
          </p>
        </div>

        <div className="grid gap-6">
          {materials.map((material) => (
            <Card key={material.id} hoverable>
              <CardBody className="flex items-start p-6">
                <div className="w-12 h-12 bg-army-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <material.icon className="w-6 h-6 text-army-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{material.description}</p>
                  <Button
                    variant="outline"
                    leftIcon={<Download className="w-4 h-4" />}
                  >
                    Download {material.type}
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

export default MaterialsPage;