
import { useEffect, useState } from 'react';

// Define skill categories
const skillsData = [
  {
    category: "Cloud Platforms",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 85 },
      { name: "Azure Data Factory", level: 90 },
      { name: "Google Cloud", level: 70 },
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL/PL-SQL", level: 90 },
      { name: "R", level: 80 },
      { name: "JavaScript", level: 75 },
    ]
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "PowerBI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "Data Warehousing", level: 85 },
      { name: "ETL/ELT Pipelines", level: 90 },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Google Analytics", level: 80 },
      { name: "IBM Maximo", level: 75 },
      { name: "Databricks", level: 85 },
      { name: "Snowflake", level: 80 },
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Predictive Analytics", level: 85 },
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="py-20 bg-accent/30"
      aria-labelledby="skills-title"
    >
      <div className="section-container">
        <h2 
          id="skills-title"
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="heading-number">02.</span> Skills & Technologies
        </h2>

        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {skillsData.map((category, index) => (
              <button
                key={category.category}
                className={`px-4 py-2 rounded-md transition-all font-mono text-sm ${
                  activeTab === index 
                    ? 'bg-primary text-background' 
                    : 'hover:bg-accent'
                }`}
                onClick={() => setActiveTab(index)}
                aria-selected={activeTab === index}
                role="tab"
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData[activeTab].skills.map((skill, idx) => (
              <div 
                key={skill.name}
                className={`bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-accent/20 animate-fade-in-up`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                <div className="w-full bg-background rounded-full h-2 mb-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${isVisible ? skill.level : 0}%` }}
                  ></div>
                </div>
                <p className="text-xs text-right text-secondary">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 bg-card rounded-lg p-6 border border-accent/20 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl font-semibold mb-4">Certifications & Credentials</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* AWS Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">AWS</span>
              </div>
              <p className="text-sm font-medium">AWS Certified Solutions Architect</p>
            </div>
            
            {/* Azure Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">AZ</span>
              </div>
              <p className="text-sm font-medium">Azure Data Engineer Associate</p>
            </div>
            
            {/* Python Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">PY</span>
              </div>
              <p className="text-sm font-medium">Python Professional Certification</p>
            </div>
            
            {/* Data Science Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">DS</span>
              </div>
              <p className="text-sm font-medium">Data Science Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
