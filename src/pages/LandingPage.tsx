import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentTextIcon, CameraIcon, BeakerIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjg3NzBkYzM5YmZjZWM4ZmM4ZjY4ZjM4ZDM1ZGMyZWM1ZjI5NGFlNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l378c04F2fjeZ7vH2/giphy.gif"
                alt="AI Scanner"
                className="w-24 h-24 rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Prescription OCR Analysis
            </h1>
            <p className="text-xl text-gray-600">
              Transform your prescriptions into structured, digital data using advanced OCR technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <DocumentTextIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Upload Prescription</h2>
              <p className="text-gray-600">
                Simply upload a clear photo of your prescription through our intuitive interface
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <CameraIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">OCR Processing</h2>
              <p className="text-gray-600">
                Our advanced OCR engine analyzes the image and extracts prescription details
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <BeakerIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Structured Results</h2>
              <p className="text-gray-600">
                Get organized results including medicine names, dosages, and important warnings
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li className="hover:text-blue-600 transition-colors">Upload a clear photo of your prescription</li>
              <li className="hover:text-blue-600 transition-colors">Our OCR engine processes the image using Google Cloud Vision technology</li>
              <li className="hover:text-blue-600 transition-colors">Advanced algorithms identify medicines, dosages, and warnings</li>
              <li className="hover:text-blue-600 transition-colors">Review the structured results with confidence scores</li>
              <li className="hover:text-blue-600 transition-colors">Download or share the digital version of your prescription</li>
            </ol>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/ocr')}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors transform hover:scale-105 duration-300 animate-pulse"
            >
              Start Analyzing Your Prescription
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;