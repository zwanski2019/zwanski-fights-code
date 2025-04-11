
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoryContent from '@/components/story/StoryContent';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 md:py-12">
        <StoryContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
