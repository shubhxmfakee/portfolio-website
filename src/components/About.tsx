
import { useEffect, useState } from 'react';
import { Database, Cloud, PieChart, Brain, BarChart, FileCode } from 'lucide-react';

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

  // Define skill items with icons
  const skillItems = [
    { text: "Data Engineering Pipelines", icon: <Database size={18} /> },
    { text: "Cloud Architecture (AWS/Azure)", icon: <Cloud size={18} /> },
    { text: "Data Visualization & Analytics", icon: <PieChart size={18} /> },
    { text: "Machine Learning Applications", icon: <Brain size={18} /> },
    { text: "Business Intelligence", icon: <BarChart size={18} /> },
    { text: "SQL/NoSQL Database Design", icon: <FileCode size={18} /> }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative"
      aria-labelledby="about-title"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-50"></div>

      <div className="section-container">
        <h2 
          id="about-title" 
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About Me
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
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {skillItems.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center group" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-primary mr-2 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="group-hover:text-foreground transition-colors duration-300">{item.text}</span>
                </li>
              ))}
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
              <div className="relative aspect-square rounded-md overflow-hidden hover-card-glow">
                <div className="w-full h-full bg-card flex items-center justify-center text-primary p-4 relative">
                  {/* Replace with actual image when available */}
                  <div className="absolute inset-0 bg-gradient-subtle from-primary/5 to-secondary/5 opacity-30"></div>
                  <div className="relative z-10 border-2 border-primary/30 p-8 rounded-md">
                    <p className="text-center font-medium">Your Professional Photo</p>
                  </div>
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
