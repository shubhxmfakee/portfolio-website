
import { useEffect, useState } from 'react';
import { Building, GraduationCap, Calendar } from 'lucide-react';

// Define work experience data
const workExperience = [
  {
    title: "Senior Data Engineer",
    company: "Tech Innovations Inc",
    duration: "Jan 2022 - Present",
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
    description: [
      "Specialized in Machine Learning and Big Data Analytics",
      "Thesis: 'Optimizing ETL Processes in Distributed Computing Environments'"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    duration: "2011 - 2015",
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
      className="py-20"
      aria-labelledby="experience-title"
    >
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
            <Building className="mr-3 text-primary" size={24} />
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
                <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(100,255,218,0.5)]"></div>
                
                <div className="bg-card rounded-lg p-6 border border-accent/20 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{job.title}</h4>
                    <div className="flex items-center text-secondary text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <p className="text-primary mb-3">{job.company}</p>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-secondary">{item}</span>
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
                <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(100,255,218,0.5)]"></div>
                
                <div className="bg-card rounded-lg p-6 border border-accent/20 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                    <div className="flex items-center text-secondary text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  <p className="text-primary mb-3">{edu.institution}</p>
                  <ul className="space-y-2">
                    {edu.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-secondary">{item}</span>
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
