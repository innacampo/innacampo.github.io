import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { DNALoader } from './components/DNALoader';
import { ThemeToggle } from './components/ThemeToggle';
import { ChatWidget } from './components/ChatWidget';
import { OrganicBackground } from './components/OrganicBackground';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(
      "%c Calm systems earn trust. ",
      "background: #047857; color: #ffffff; padding: 8px 16px; border-radius: 4px; font-family: monospace; font-size: 14px; font-weight: bold; border: 1px solid #34d399;"
    );
  }, []);

  return (
    <>
      <OrganicBackground />

      {/* Feature A: Bio-Digital DNA Loader */}
      {loading && <DNALoader onComplete={() => setLoading(false)} />}

      {/* Dark Mode Toggle */}
      <ThemeToggle />

      {/* AI Chatbot */}
      <ChatWidget />

      {/* Main Layout: Split Screen Scholar */}
      <div className={`min-h-screen flex flex-col md:flex-row transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Sidebar />
        <ContentArea />
      </div>
    </>
  );
};

export default App;