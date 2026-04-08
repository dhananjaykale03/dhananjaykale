import { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Quotes from '@/components/Quotes';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WelcomeScreen from '@/components/WelcomeScreen';
import RotatingCube from '@/components/RotatingCube';
import LeftWireframeCube from '@/components/LeftWireframeCube';
import BottomRotatingCube from '@/components/BottomRotatingCube';
import { useSmoothScroll } from '@/hooks/useScrollReveal';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  
  useSmoothScroll();

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return (
    <div className="min-h-screen">
      <RotatingCube />
      <LeftWireframeCube />
      <BottomRotatingCube />
      
      <BottomNavigation />
      <main>
        <section className="min-h-screen">
          <Hero />
        </section>
        <section className="min-h-screen py-16 md:py-24">
          <About />
        </section>
        <section className="min-h-screen py-16 md:py-24">
          <Experience />
        </section>
        <section className="min-h-screen py-16 md:py-24">
          <Education />
        </section>
        <section className="min-h-screen py-16 md:py-24">
          <Projects />
        </section>
        <section className="py-16 md:py-24">
          <Quotes />
        </section>
        <section className="min-h-screen py-16 md:py-24">
          <Skills />
        </section>
        <section className="py-16 md:py-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
