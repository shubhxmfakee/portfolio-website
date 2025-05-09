import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Define project data
const projectsData = [
  {
    id: 1,
    title: "AI-based Trading Bot",
    description: "Developed a machine learning-powered trading bot that analyzes market patterns and executes trades automatically, achieving 18% better performance than baseline strategies.",
    tags: ["Python", "TensorFlow", "AWS Lambda", "MongoDB"],
    image: "/placeholder.svg",
    links: { demo: "#demo", github: "#github", case: "#case-study" }
  },
  {
    id: 2,
    title: "Personal Finance Dashboard",
    description: "Built a comprehensive PowerBI dashboard for personal finance tracking with automated data ingestion from multiple sources and predictive spending analytics.",
    tags: ["PowerBI", "Python", "Azure Data Factory", "SQL"],
    image: "/placeholder.svg",
    links: { demo: "#demo", github: "#github", case: "#case-study" }
  },
  {
    id: 3,
    title: "Healthcare Analytics Platform",
    description: "Designed and implemented a data warehouse and analytics platform for healthcare providers, enabling real-time insights into patient care and operational metrics.",
    tags: ["AWS", "Snowflake", "Tableau", "Python"],
    image: "/placeholder.svg",
    links: { demo: "#demo", github: "#github", case: "#case-study" }
  },
  {
    id: 4,
    title: "E-commerce Recommendation Engine",
    description: "Created a personalized product recommendation engine using collaborative filtering and NLP techniques, increasing conversion rates by 22%.",
    tags: ["Python", "scikit-learn", "AWS", "PostgreSQL"],
    image: "/placeholder.svg",
    links: { demo: "#demo", github: "#github", case: "#case-study" }
  },
  {
    id: 5,
    title: "Supply Chain Optimization Tool",
    description: "Developed a predictive analytics tool for supply chain optimization, reducing inventory costs by 15% while maintaining service levels.",
    tags: ["Python", "Azure", "PowerBI", "Optimization Algorithms"],
    image: "/placeholder.svg",
    links: { demo: "#demo", github: "#github", case: "#case-study" }
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState(projectsData.slice(0, 3));
  const [otherProjects, setOtherProjects] = useState(projectsData.slice(3));
  const [showAll, setShowAll] = useState(false);

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

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="projects" 
      className="py-20"
      aria-labelledby="projects-title"
    >
      <div className="section-container">
        <h2 
          id="projects-title"
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="heading-number">03.</span> Featured Projects
        </h2>

        {/* Featured Projects */}
        <div>
          {featuredProjects.map((project, idx) => (
            <div 
              key={project.id}
              className={`mb-24 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className={`grid md:grid-cols-12 gap-6 items-center ${
                idx % 2 === 0 ? 'md:text-left' : 'md:text-right md:flex-row-reverse'
              }`}>
                {/* Project Image */}
                <div className={`md:col-span-7 overflow-hidden rounded-lg relative group ${
                  idx % 2 === 0 ? 'md:order-2' : 'md:order-1'
                }`}>
                  <div className="absolute inset-0 bg-primary/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Project Content */}
                <div className={`md:col-span-5 ${
                  idx % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'
                }`}>
                  <p className="font-mono text-primary text-sm mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  
                  <div className="bg-card p-6 rounded-md shadow-lg mb-4">
                    <p className="text-secondary">{project.description}</p>
                  </div>
                  
                  <ul className={`flex flex-wrap gap-3 mb-4 text-xs font-mono ${
                    idx % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}>
                    {project.tags.map((tag) => (
                      <li key={tag} className="text-secondary">{tag}</li>
                    ))}
                  </ul>
                  
                  <div className={`flex gap-4 ${
                    idx % 2 === 0 ? 'justify-end' : 'justify-start'
                  }`}>
                    {project.links.github && (
                      <a href={project.links.github} className="text-secondary hover:text-primary" aria-label="View GitHub repository">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="text-secondary hover:text-primary" aria-label="View live demo">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                    {project.links.case && (
                      <a href={project.links.case} className="text-secondary hover:text-primary" aria-label="View case study">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className={`mt-20 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="section-subtitle text-center mb-12">Other Noteworthy Projects</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <div 
                key={project.id}
                className="bg-card rounded-lg p-6 hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-accent/10 hover:border-primary/30"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a href={project.links.github} className="text-secondary hover:text-primary" aria-label="View GitHub repository">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="text-secondary hover:text-primary" aria-label="View live demo">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4 flex-1">{project.description}</p>
                
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-secondary mt-auto">
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-secondary">{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {!showAll && (
            <div className="flex justify-center mt-12">
              <a
                href="#more-projects"
                className="btn-primary flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAll(true);
                }}
              >
                Show More <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
