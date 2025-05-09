
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mobile menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Nav links
  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  if (!mounted) return null;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'py-4'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-primary">
            <span className="font-mono">&lt;</span>Portfolio<span className="font-mono">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.url} 
                className="nav-link font-mono text-sm"
              >
                <span className="text-primary">{`0${index + 1}.`}</span> {link.name}
              </a>
            ))}
            <Button 
              onClick={toggleTheme} 
              size="icon" 
              variant="outline"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <a href="/resume.pdf" className="btn-primary text-sm font-mono" download aria-label="Download Resume">
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <Button 
              onClick={toggleTheme} 
              size="icon" 
              variant="outline"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              <div className={`w-6 flex flex-col gap-1 transition-all ${menuOpen ? 'transform' : ''}`}>
                <span className={`block h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav 
        className={`fixed bg-background/95 backdrop-blur-md top-[60px] right-0 w-full h-screen transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        role="navigation"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.url} 
              onClick={() => setMenuOpen(false)}
              className="nav-link font-mono text-lg"
            >
              <span className="text-primary">{`0${index + 1}.`}</span> {link.name}
            </a>
          ))}
          <a href="/resume.pdf" className="btn-primary text-lg font-mono mt-8" download>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
