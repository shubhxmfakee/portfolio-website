
import { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ChevronRight } from 'lucide-react';

// Define skill categories
const skillsData = [
  {
    category: "Cloud Platforms",
    skills: [
      "AWS", "Azure", "Azure Data Factory", "Google Cloud", "Terraform", 
      "Docker", "Kubernetes", "CloudFormation", "Serverless"
    ]
  },
  {
    category: "Programming",
    skills: [
      "Python", "SQL/PL-SQL", "R", "JavaScript", "TypeScript", "Java", 
      "Bash", "PowerShell", "Go", "C#"
    ]
  },
  {
    category: "Data & Analytics",
    skills: [
      "PowerBI", "Tableau", "Data Warehousing", "ETL/ELT Pipelines", 
      "SQL Server", "PostgreSQL", "Oracle", "MySQL", "MongoDB", "Redshift"
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Google Analytics", "IBM Maximo", "Databricks", "Snowflake", "Airflow",
      "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack"
    ]
  },
  {
    category: "AI & Machine Learning",
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
                  className={`px-4 py-2 rounded-md transition-all text-sm font-medium relative
                    ${activeTab === category.category 
                      ? 'text-primary bg-accent shadow-[0_0_10px_rgba(100,255,218,0.3)] border border-primary/30' 
                      : 'text-secondary hover:text-primary hover:bg-accent/50'
                    }`}
                >
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
                      className="flex items-center py-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ChevronRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
