import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Book, Medal, Users, Brain } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';
import { mockBranches } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/flagged/photo-1560177776-295b9cd779de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJteXxlbnwwfHwwfHx8MA%3D%3D')"
          }}
        />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Prepare For Your <span className="text-yellow-400">Military Career</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Comprehensive resources and training to help you excel in military entrance exams and prepare for a successful career in the armed forces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/exam-prep">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                  Explore Practice Tests
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Why Choose MilitaryPrep?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive resources and tools to help you succeed in your military entrance exams and prepare for your future career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card hoverable className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-army-100 rounded-full flex items-center justify-center">
                    <Book className="w-8 h-8 text-army-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Comprehensive Resources</h3>
                <p className="text-gray-600">
                  Access detailed study materials covering all aspects of military exams and career requirements.
                </p>
              </CardBody>
            </Card>

            <Card hoverable className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-army-100 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-army-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Realistic Practice Tests</h3>
                <p className="text-gray-600">
                  Take timed, realistic mock exams to simulate the actual test environment and track your progress.
                </p>
              </CardBody>
            </Card>

            <Card hoverable className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-army-100 rounded-full flex items-center justify-center">
                    <Medal className="w-8 h-8 text-army-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Expert Guidance</h3>
                <p className="text-gray-600">
                  Learn from materials created by military veterans and professional educators with years of experience.
                </p>
              </CardBody>
            </Card>

            <Card hoverable className="text-center">
              <CardBody>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-army-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-army-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Community Support</h3>
                <p className="text-gray-600">
                  Connect with fellow aspirants and veterans to share experiences and get valuable insights.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Military Branches Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Explore Military Branches</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn about different military branches, their missions, requirements, and career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable className="h-full">
              <CardBody className="flex flex-col h-full">
                <div className="aspect-video overflow-hidden mb-4 rounded-md">
                  <img
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/indian-army-145207207-16x9_0.png?VersionId=2T5mtY73nyT7WtVYbzGl2W9.Aqh6V_iL"
                    alt="Indian Army"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Indian Army</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  The Indian Army is the land-based branch of the Indian Armed Forces. It is the largest component of the Indian military forces...
                </p>
                <Link 
                  to="/branches/army" 
                  className="inline-flex items-center text-army-600 font-medium hover:text-army-700"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardBody>
            </Card>

            <Card hoverable className="h-full">
              <CardBody className="flex flex-col h-full">
                <div className="aspect-video overflow-hidden mb-4 rounded-md">
                  <img
                    src="https://images.pexels.com/photos/76971/fighter-jet-fighter-aircraft-f-16-falcon-aircraft-76971.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Indian Air Force"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Indian Air Force</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  The Indian Air Force (IAF) is the air arm of the Indian Armed Forces. Its primary mission is to secure Indian airspace...
                </p>
                <Link 
                  to="/branches/airforce" 
                  className="inline-flex items-center text-army-600 font-medium hover:text-army-700"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardBody>
            </Card>

            <Card hoverable className="h-full">
              <CardBody className="flex flex-col h-full">
                <div className="aspect-video overflow-hidden mb-4 rounded-md">
                  <img
                    src="https://i0.wp.com/iadnews.in/wp-content/uploads/2021/12/indian-navy-1.jpg?fit=1024%2C683&ssl=1"
                    alt="Indian Navy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy-900">Indian Navy</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  The Indian Navy is the naval branch of the Indian Armed Forces. It plays a crucial role in securing India's maritime borders...
                </p>
                <Link 
                  to="/branches/navy" 
                  className="inline-flex items-center text-army-600 font-medium hover:text-army-700"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardBody>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link to="/careers">
              <Button variant="outline">
                View All Military Branches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E4D2B] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Military Journey?</h2>
            <p className="text-lg mb-8 text-white text-opacity-90">
              Create your free account today and get access to practice tests, study materials, and personalized progress tracking.
            </p>
            <Link to="/register">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-yellow-400 text-navy-900 hover:bg-yellow-300 font-bold px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-yellow-500"
              >
                Sign Up For Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from candidates who successfully prepared for their military careers with MilitaryPrep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Michael Johnson</h4>
                    <p className="text-sm text-gray-500">U.S. Army</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "MilitaryPrep was instrumental in helping me achieve my dream of joining the Army. The practice tests were incredibly similar to the actual exam, and the study guides were comprehensive and easy to follow."
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">Sarah Martinez</h4>
                    <p className="text-sm text-gray-500">U.S. Air Force</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I had tried other preparation resources, but none were as thorough as MilitaryPrep. The personalized study plan and progress tracking helped me focus on the areas where I needed the most improvement."
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                      alt="User Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">David Wilson</h4>
                    <p className="text-sm text-gray-500">U.S. Navy</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As someone with no military background, I was intimidated by the prospect of taking the entrance exams. MilitaryPrep broke everything down into manageable sections and gave me the confidence I needed to succeed."
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;