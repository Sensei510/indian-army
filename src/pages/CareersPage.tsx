import React from 'react';
import { mockBranches } from '../data/mockData';
import Card, { CardBody } from '../components/common/Card';
import { Shield, ChevronRight } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Military Careers</h1>
          <p className="text-gray-600">
            Explore career opportunities across different military branches and find the path that's right for you.
          </p>
        </div>

        <div className="space-y-8">
          {mockBranches.map((branch) => (
            <Card key={branch.id} hoverable>
              <CardBody className="flex items-start space-x-6 p-6">
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                  {branch.logoUrl ? (
                    <img src={branch.logoUrl} alt={`${branch.name} Logo`} className="w-16 h-16" />
                  ) : (
                    <Shield className="w-12 h-12 text-army-600" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-navy-900 mb-2">{branch.name}</h2>
                  <p className="text-gray-600 mb-4">{branch.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h3 className="font-medium text-navy-900 mb-2">Requirements:</h3>
                    <p className="text-gray-600 text-sm">{branch.requirements}</p>
                  </div>
                  
                  <a 
                    href={branch.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-army-600 hover:text-army-700 font-medium"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;