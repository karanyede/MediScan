import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageUploader } from '../components/ImageUploader';
import { ResultsDisplay } from '../components/ResultsDisplay';
import { PrescriptionData } from '../types';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const OCRPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [results, setResults] = useState<PrescriptionData | null>(null);

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      // In a real implementation, you would send this to your backend
      // For demo purposes, we'll simulate a response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockResult: PrescriptionData = {
        id: '123',
        text: 'Sample prescription text extracted from image',
        confidence: 0.89,
        medicines: [
          {
            name: 'Amoxicillin',
            dosage: '500mg twice daily',
            confidence: 0.95,
            warnings: ['Take with food']
          }
        ],
        timestamp: new Date().toISOString()
      };

      setResults(mockResult);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to process image'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow py-8">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Upload Your Prescription
          </h1>
          
          <div className="space-y-8">
            <ImageUploader onImageUpload={handleImageUpload} />
            <ResultsDisplay
              data={results}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OCRPage;