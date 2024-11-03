export interface PrescriptionData {
  id: string;
  text: string;
  confidence: number;
  medicines: Medicine[];
  timestamp: string;
}

export interface Medicine {
  name: string;
  dosage: string;
  confidence: number;
  warnings?: string[];
}

export interface OCRResult {
  text: string;
  confidence: number;
}