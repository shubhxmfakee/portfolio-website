
import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  
  // Update year automatically
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 border-t border-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-secondary">&copy; {year} Your Name. All Rights Reserved.</p>
          </div>
          
          <div className="text-sm text-secondary">
            <p className="font-mono">Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
