import { useEffect, useState } from 'react';
import { Building, GraduationCap, Calendar, Briefcase, BookOpen, Award, Code, Database, BarChart } from 'lucide-react';

// Define work experience data
const workExperience = [
  {
    title: "Senior Data Engineer",
    company: "Tech Innovations Inc",
    duration: "Jan 2022 - Present",
    icon: <Database size={20} />,
    description: [
      "Led the design and implementation of enterprise-scale ETL pipelines using AWS Glue and Azure Data Factory",
      "Optimized database queries resulting in 40% reduction in processing time across critical workflows",
      "Implemented real-time data processing solutions using Kafka and Spark Streaming"
    ]
  },
  {
    title: "Data Engineer",
    company: "DataSphere Solutions",
    duration: "Mar 2019 - Dec 2021",
    icon: <Code size={20} />,
    description: [
      "Developed and maintained cloud-based data warehousing solutions on AWS Redshift and Snowflake",
      "Built CI/CD pipelines for automated testing and deployment of data infrastructure",
      "Collaborated with data science team to implement machine learning models in production"
    ]
  },
  {
    title: "Data Analyst",
    company: "Analytics First",
    duration: "Jun 2017 - Feb 2019",
    icon: <BarChart size={20} />,
    description: [
      "Created interactive dashboards and reports using Tableau and Power BI",
      "Performed complex SQL queries to extract insights from large datasets",
      "Assisted in the migration from on-premise data storage to cloud-based solutions"
    ]
  }
];

// Define education data
const education = [
  {
    degree: "Master of Science in Data Science",
    institution: "Stanford University",
    duration: "2015 - 2017",
    icon: <BookOpen size={20} />,
    description: [
      "Specialized in Machine Learning and Big Data Analytics",
      "Thesis: 'Optimizing ETL Processes in Distributed Computing Environments'"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    duration: "2011 - 2015",
    icon: <Award size={20} />,
    description: [
      "Focus on Database Systems and Software Engineering",
      "Senior Project: 'Developing Scalable Data Processing Algorithms'"
    ]
  }
];

const Experience = () => {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="experience" 
      className="py-20 relative"
      aria-labelledby="experience-title"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="section-container">
        <h2 
          id="experience-title"
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience & Academics
        </h2>

        {/* Work Experience */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center mb-8">
            <Briefcase className="mr-3 text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>

          <div className="relative pl-6 border-l-2 border-accent/50 ml-3">
            {workExperience.map((job, index) => (
              <div 
                key={index} 
                className="mb-10 relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot"></div>
                
                <div className="bg-card rounded-lg p-6 border border-accent/20 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="text-primary">{job.icon}</span>
                      {job.title}
                    </h4>
                    <div className="flex items-center text-secondary text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <p className="text-primary mb-3">{job.company}</p>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-secondary group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center mb-8">
            <GraduationCap className="mr-3 text-primary" size={24} />
            <h3 className="text-2xl font-semibold">Academics</h3>
          </div>

          <div className="relative pl-6 border-l-2 border-accent/50 ml-3">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="mb-10 relative animate-fade-in-up"
                style={{ animationDelay: `${(index + workExperience.length) * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot"></div>
                
                <div className="bg-card rounded-lg p-6 border border-accent/20 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 group">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="text-primary">{edu.icon}</span>
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-secondary text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  <p className="text-primary mb-3">{edu.institution}</p>
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start group/item">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-secondary group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
