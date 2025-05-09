
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="about" 
      className="py-20"
      aria-labelledby="about-title"
    >
      <div className="section-container">
        <h2 
          id="about-title" 
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="heading-number">01.</span> About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className={`md:col-span-3 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-secondary mb-4">
              Hello! I'm a passionate software developer and data professional with 4 years of experience building 
              data-driven solutions. My journey in tech began when I first discovered the power of transforming raw data 
              into actionable insights.
            </p>
            
            <p className="text-secondary mb-4">
              Fast-forward to today, I've had the privilege of working across various domains including 
              <span className="highlight"> finance</span>, <span className="highlight">healthcare</span>, and 
              <span className="highlight"> e-commerce</span>. My focus areas include:
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Data Engineering Pipelines
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Cloud Architecture (AWS/Azure)
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Data Visualization & Analytics
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Machine Learning Applications
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                Business Intelligence
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">▹</span>
                SQL/NoSQL Database Design
              </li>
            </ul>
            
            <p className="text-secondary">
              When I'm not coding, you'll find me exploring new data technologies, contributing to open-source 
              projects, or mentoring aspiring data professionals.
            </p>
          </div>
          
          <div className={`md:col-span-2 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-1 rounded-md bg-gradient-to-r from-primary/30 to-primary/10 opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative aspect-square rounded-md overflow-hidden">
                <div className="w-full h-full bg-lightNavy flex items-center justify-center text-primary">
                  {/* Replace with actual image when available */}
                  <p className="text-center p-4">Your Professional Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
