
import { useEffect, useState } from 'react';
import { ArrowRight, Download, Send } from 'lucide-react';
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
      className="min-h-screen flex flex-col justify-center pt-20 relative"
      id="home"
      aria-label="Introduction"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-70 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl opacity-70 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      
      <div className="section-container">
        <div className="max-w-3xl relative">
          <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-primary font-mono mb-5 flex items-center">
              <span className="inline-block w-6 h-px bg-primary mr-2"></span>
              Hi, my name is
            </p>
          </div>
          
          <div className={`transition-opacity duration-500 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lightestSlate mb-4">
              Your Name.
            </h1>
          </div>
          
          <div className={`transition-opacity duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate mb-6">
              I build <span className="typing-container">data-driven solutions.</span>
            </h2>
          </div>
          
          <div className={`transition-opacity duration-500 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-secondary mb-12 max-w-xl text-lg">
              I'm a software developer, data engineer, and data analyst with 4 years of experience. 
              I specialize in building high-performance data solutions and applications for enterprises 
              and businesses.
            </p>
          </div>
          
          <div className={`transition-opacity duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-20`}>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary group">
                View My Work <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <ResumeButton />
              <a href="#contact" className="btn-primary group">
                Get In Touch <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Scroll indicator with increased spacing */}
          <div className={`hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 flex-col items-center transition-opacity duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-primary text-sm font-mono mb-2">Scroll Down</span>
            <div className="w-px h-10 bg-primary/50 relative">
              <div className="w-1.5 h-1.5 rounded-full bg-primary absolute -left-[2px] animate-bounce-subtle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
