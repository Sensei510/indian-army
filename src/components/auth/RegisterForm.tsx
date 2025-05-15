import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Input from '../common/Input';
import Button from '../common/Button';
import { useAuth } from '../../context/AuthContext';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const { firstName, lastName, email, password, confirmPassword } = formData;
    
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const { firstName, lastName, email, password } = formData;
        await register(email, password, firstName, lastName);
        navigate('/dashboard');
      } catch (err) {
        // Error is handled by the context
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
          fullWidth
          leftIcon={<User className="w-5 h-5 text-gray-400" />}
          error={errors.firstName}
        />
        
        <Input
          label="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
          fullWidth
          leftIcon={<User className="w-5 h-5 text-gray-400" />}
          error={errors.lastName}
        />
      </div>
      
      <Input
        label="Email Address"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        fullWidth
        leftIcon={<Mail className="w-5 h-5 text-gray-400" />}
        error={errors.email}
      />
      
      <Input
        label="Password"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="••••••••"
        fullWidth
        leftIcon={<Lock className="w-5 h-5 text-gray-400" />}
        error={errors.password}
      />
      
      <Input
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="••••••••"
        fullWidth
        leftIcon={<Lock className="w-5 h-5 text-gray-400" />}
        error={errors.confirmPassword}
      />
      
      <div className="flex items-center mt-4">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 text-army-600 focus:ring-army-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the{' '}
          <Link to="/terms" className="text-army-600 hover:text-army-500">
            Terms and Conditions
          </Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-army-600 hover:text-army-500">
            Privacy Policy
          </Link>
        </label>
      </div>
      
      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}
      
      <div>
        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          isLoading={loading}
          className="mt-4"
        >
          Create Account
        </Button>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-army-600 hover:text-army-500 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;