import React from 'react';
import { Shield } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-6">
          <Shield className="mx-auto h-12 w-12 text-army-600" />
          <h2 className="mt-4 text-3xl font-bold text-navy-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your personalized military preparation dashboard
          </p>
        </div>
        
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;