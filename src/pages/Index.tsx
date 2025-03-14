
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Website</h1>
        <p className="text-xl text-muted-foreground">Please view the HTML version of this portfolio.</p>
        <p className="mt-4 text-muted-foreground">This React component is a placeholder. The main portfolio is built with plain HTML/CSS/JS.</p>
        <a 
          href="/index.html" 
          className="mt-6 inline-block px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
};

export default Index;
