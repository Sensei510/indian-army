import React from 'react';
import { Shield, Target, Users, Award } from 'lucide-react';
import Card, { CardBody } from '../components/common/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">About MilitaryPrep</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to helping aspiring military personnel prepare for their service through comprehensive education, training resources, and career guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardBody>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-army-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-army-600" />
                </div>
                <h2 className="text-xl font-semibold text-navy-900">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To provide comprehensive, accessible, and effective preparation resources for individuals pursuing a career in the military, ensuring they enter service with confidence and competence.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-army-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-army-600" />
                </div>
                <h2 className="text-xl font-semibold text-navy-900">Our Values</h2>
              </div>
              <p className="text-gray-600">
                Excellence, integrity, and dedication guide everything we do. We believe in supporting our future service members with the highest quality resources and unwavering commitment.
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-army-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-5 h-5 text-army-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our team includes veterans and military professionals who understand what it takes to succeed.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-army-100 rounded-full flex items-center justify-center mr-4">
                <Award className="w-5 h-5 text-army-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Thousands of successful candidates have prepared for their military careers using our platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Team</h2>
          <p className="text-gray-600 mb-8">
            MilitaryPrep is powered by a dedicated team of veterans, educators, and technology professionals committed to supporting the next generation of military service members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;