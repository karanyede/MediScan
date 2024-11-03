import React from 'react';
import { PrescriptionData } from '../types';

interface ResultsDisplayProps {
  data: PrescriptionData | null;
  isLoading: boolean;
  error: Error | null;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="text-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-2 text-gray-600">Processing prescription...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg">
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Prescription Analysis</h2>
      <div className="space-y-4">
        <div className="border-b pb-2">
          <h3 className="text-sm font-medium text-gray-500">Extracted Text</h3>
          <p className="mt-1">{data.text}</p>
          <p className="text-sm text-gray-500">
            Confidence: {(data.confidence * 100).toFixed(1)}%
          </p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">Identified Medicines</h3>
          <div className="space-y-2">
            {data.medicines.map((medicine, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded">
                <p className="font-medium">{medicine.name}</p>
                <p className="text-sm text-gray-600">Dosage: {medicine.dosage}</p>
                <p className="text-xs text-gray-500">
                  Confidence: {(medicine.confidence * 100).toFixed(1)}%
                </p>
                {medicine.warnings && medicine.warnings.length > 0 && (
                  <div className="mt-2">
                    {medicine.warnings.map((warning, idx) => (
                      <p key={idx} className="text-xs text-red-600">{warning}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};