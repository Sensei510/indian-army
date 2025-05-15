import React, { useState } from 'react';
import { mockBranches } from '../data/mockData';
import Card, { CardBody } from '../components/common/Card';
import { ChevronRight, Shield } from 'lucide-react';

// Indian Army branch logos/images
const indianArmyImages = {
  army: "https://upload.wikimedia.org/wikipedia/commons/4/41/Emblem_of_the_Indian_Army.svg", // Indian Army
  navy: "https://upload.wikimedia.org/wikipedia/commons/0/09/Crest_of_the_Indian_Navy.svg", // Indian Navy
  airForce: "https://upload.wikimedia.org/wikipedia/commons/3/32/Indian_Air_Force_crest.svg", // Indian Air Force
  coastGuard: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Emblem_of_Indian_Coast_Guard.svg", // Indian Coast Guard
  default: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg", // National Emblem
};

// Function to get the appropriate Indian Army image based on branch name
const getIndianArmyImage = (branchName: string): string => {
  const branchNameLower = branchName.toLowerCase();
  
  if (branchNameLower.includes('army')) {
    return indianArmyImages.army;
  } else if (branchNameLower.includes('navy')) {
    return indianArmyImages.navy;
  } else if (branchNameLower.includes('air force')) {
    return indianArmyImages.airForce;
  } else if (branchNameLower.includes('coast guard')) {
    return indianArmyImages.coastGuard;
  } else {
    return indianArmyImages.default;
  }
};

const CareersPage: React.FC = () => {
  // State to track image loading errors
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  // Handle image error
  const handleImageError = (branchId: string) => {
    setImageErrors(prev => ({...prev, [branchId]: true}));
  };

  console.log('mockBranches:', mockBranches); // Debug to check branch data

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Indian Military Careers</h1>
          <p className="text-gray-600">
            Explore career opportunities across different Indian military branches and find the path that's right for you.
          </p>
        </div>

        <div className="space-y-8">
          {mockBranches.map((branch) => {
            const imageSrc = getIndianArmyImage(branch.name);
            console.log(`Branch: ${branch.name}, Image: ${imageSrc}`); // Debug log
            
            return (
              <Card key={branch.id} hoverable>
                <CardBody className="flex items-start space-x-6 p-6">
                  <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                    {!imageErrors[branch.id] ? (
                      <img 
                        src={imageSrc}
                        alt={`Indian ${branch.name} Logo`} 
                        className="w-16 h-16 object-contain"
                        onError={() => handleImageError(branch.id)}
                      />
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;