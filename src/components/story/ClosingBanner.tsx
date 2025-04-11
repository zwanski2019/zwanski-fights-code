
import React from 'react';

const ClosingBanner: React.FC = () => {
  return (
    <div className="relative mt-16 rounded-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" 
        alt="Tunisian sunrise" 
        className="w-full h-64 md:h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Every line of code is a step forward
        </h2>
        <p className="text-xl text-white/80 mb-6">
          #ZwanskiFightsOn | Built with PHP & Persistence
        </p>
      </div>
    </div>
  );
};

export default ClosingBanner;
