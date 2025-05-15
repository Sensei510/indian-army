import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <Shield className="w-8 h-8 text-army-500" />
              <span className="ml-2 text-xl font-bold text-white">MilitaryPrep</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Dedicated to helping aspiring military personnel prepare for service through education,
              training resources, and career guidance.
            </p>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-army-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-army-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm hover:text-army-400 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-army-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/training" className="text-sm hover:text-army-400 transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-sm hover:text-army-400 transition-colors">
                  Equipment Guide
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-sm hover:text-army-400 transition-colors">
                  Service Branches
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="text-sm hover:text-army-400 transition-colors">
                  Recruitment Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm hover:text-army-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm hover:text-army-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm hover:text-army-400 transition-colors">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-army-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-army-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Social Media */}
        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-army-500 mr-2" />
                <a 
                  href="mailto:info@militaryprep.com" 
                  className="text-sm hover:text-army-400 transition-colors"
                  aria-label="Email us"
                >
                  info@militaryprep.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-army-500 mr-2" />
                <a 
                  href="tel:+1-800-555-0100" 
                  className="text-sm hover:text-army-400 transition-colors"
                  aria-label="Call us"
                >
                  1-800-555-0100
                </a>
              </div>
            </div>
            <div className="flex justify-start md:justify-end space-x-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MilitaryPrep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;