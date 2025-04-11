
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StoryContent from '@/components/story/StoryContent';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto py-8 md:py-12 px-4">
        <StoryContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
