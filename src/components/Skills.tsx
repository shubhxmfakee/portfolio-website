
import { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChevronRight, Cloud, Code, Database, BarChart, Brain, Award } from 'lucide-react';

// Define skill categories with icons
const skillsData = [
  {
    category: "Cloud Platforms",
    icon: <Cloud size={18} />,
    skills: [
      "AWS", "Azure", "Azure Data Factory", "Google Cloud", "Terraform", 
      "Docker", "Kubernetes", "CloudFormation", "Serverless"
    ]
  },
  {
    category: "Programming",
    icon: <Code size={18} />,
    skills: [
      "Python", "SQL/PL-SQL", "R", "JavaScript", "TypeScript", "Java", 
      "Bash", "PowerShell", "Go", "C#"
    ]
  },
  {
    category: "Data & Analytics",
    icon: <Database size={18} />,
    skills: [
      "PowerBI", "Tableau", "Data Warehousing", "ETL/ELT Pipelines", 
      "SQL Server", "PostgreSQL", "Oracle", "MySQL", "MongoDB", "Redshift"
    ]
  },
  {
    category: "Tools & Platforms",
    icon: <BarChart size={18} />,
    skills: [
      "Google Analytics", "IBM Maximo", "Databricks", "Snowflake", "Airflow",
      "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack"
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain size={18} />,
    skills: [
      "Scikit-learn", "TensorFlow", "Natural Language Processing", "Predictive Analytics",
      "PyTorch", "Computer Vision", "MLOps", "Recommendation Systems", "OpenAI", "Hugging Face"
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Cloud Platforms");

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
      className="py-20 bg-accent/30 relative"
      aria-labelledby="skills-title"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl opacity-50 animate-pulse-soft"></div>
      
      <div className="section-container">
        <h2 
          id="skills-title"
          className={`section-title transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Skills & Technologies
        </h2>

        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Tabs 
            defaultValue="Cloud Platforms" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full flex flex-wrap justify-center mb-10 gap-2 bg-transparent">
              {skillsData.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className={`px-4 py-2 rounded-md transition-all text-sm font-medium relative flex items-center gap-2
                    ${activeTab === category.category 
                      ? 'text-primary bg-accent shadow-[0_0_10px_rgba(100,255,218,0.3)] border border-primary/30' 
                      : 'text-secondary hover:text-primary hover:bg-accent/50'
                    }`}
                >
                  <span className={activeTab === category.category ? 'animate-pulse-soft' : ''}>{category.icon}</span>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Skills content */}
            {skillsData.map((category) => (
              <TabsContent 
                key={category.category} 
                value={category.category}
                className="mt-6 animate-fade-in"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={skill} 
                      className="flex items-center py-2 animate-fade-in-up group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ChevronRight className="h-4 w-4 text-primary mr-2 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className={`mt-16 bg-card rounded-lg p-6 border border-accent/20 transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0 shadow-soft' : 'opacity-0 translate-y-10'
        } hover:shadow-card-hover hover:border-primary/30`}>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="text-primary mr-2" size={20} />
            Certifications & Credentials
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* AWS Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300 hover:shadow-glow group">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">AWS</span>
              </div>
              <p className="text-sm font-medium group-hover:text-primary transition-colors duration-300">AWS Certified Solutions Architect</p>
            </div>
            
            {/* Azure Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300 hover:shadow-glow group">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">AZ</span>
              </div>
              <p className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Azure Data Engineer Associate</p>
            </div>
            
            {/* Python Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300 hover:shadow-glow group">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">PY</span>
              </div>
              <p className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Python Professional Certification</p>
            </div>
            
            {/* Data Science Badge */}
            <div className="p-4 bg-background rounded-md border border-accent/20 flex flex-col items-center justify-center text-center hover:border-primary transition-colors duration-300 hover:shadow-glow group">
              <div className="w-16 h-16 mb-4 bg-accent/50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">DS</span>
              </div>
              <p className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Data Science Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
