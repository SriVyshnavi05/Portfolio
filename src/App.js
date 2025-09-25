import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Eduation';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import WelcomeCard from './components/WelcomeCard';
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome card after initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
    }, 1000); // Increased delay for better UX
    
    return () => clearTimeout(timer);
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <div className="loader-spinner"></div>
        </div>
      ) : (
        <>
          <AnimatePresence mode="wait">
            {showWelcome && (
              <WelcomeCard onClose={handleCloseWelcome} />
            )}
             
          </AnimatePresence>
          
          <Navbar />
          <Home/>

          <main className={showWelcome ? 'blur-background' : ''}>
           
            <About/>
            <Education/>
            <Portfolio />
            <Contact />
            <Footer />
          </main>
          
        </>
      )}
    </div>
  );
}

export default App;