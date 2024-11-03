import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Developers</h3>
            <div className="space-y-1">
              <p className="hover:text-blue-200 transition-colors cursor-pointer">Karan Yede</p>
              <p className="hover:text-blue-200 transition-colors cursor-pointer">Piyush Talwekar</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="animate-bounce">
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmM2OTBjMzBkOGNiOWU1ZjQ5ZDM4ZWM5ZWJjYjM4ZTJkYzRlMzg2YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3oKIPic2TYh5KTkcw0/giphy.gif"
                alt="AI Animation"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
            <div className="text-sm text-blue-200">
              © {new Date().getFullYear()} OCR Project
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;