
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ResumeButton from './ResumeButton';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="min-h-screen flex flex-col justify-center pt-20"
      id="home"
      aria-label="Introduction"
    >
      <div className="section-container">
        <div className="max-w-3xl">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-primary font-mono mb-5">Hi, my name is</p>
          </div>
          
          <div className={`transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lightestSlate mb-4">
              Your Name.
            </h1>
          </div>
          
          <div className={`transition-opacity duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate mb-6">
              I build data-driven solutions.
            </h2>
          </div>
          
          <div className={`transition-opacity duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-secondary mb-8 max-w-xl text-lg">
              I'm a software developer, data engineer, and data analyst with 4 years of experience. 
              I specialize in building high-performance data solutions and applications for enterprises 
              and businesses.
            </p>
          </div>
          
          <div className={`transition-opacity duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <ResumeButton />
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
