
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, User, Briefcase, Code, PenTool, Send, Menu, X } from 'lucide-react';
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

  // Nav links with icons
  const navLinks = [
    { name: 'About', url: '#about', icon: <User size={16} /> },
    { name: 'Experience', url: '#experience', icon: <Briefcase size={16} /> },
    { name: 'Skills', url: '#skills', icon: <Code size={16} /> },
    { name: 'Projects', url: '#projects', icon: <PenTool size={16} /> },
    { name: 'Contact', url: '#contact', icon: <Send size={16} /> },
  ];

  if (!mounted) return null;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-bg shadow-soft py-2' : 'py-4'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-primary hover:text-primary/80 transition-all duration-300 group">
            <span className="font-mono">&lt;</span>
            <span className="group-hover:animate-pulse-soft">Portfolio</span>
            <span className="font-mono">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                className="nav-link text-sm group"
              >
                <span className="icon-hover text-primary">{link.icon}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
              </a>
            ))}
            <Button 
              onClick={toggleTheme} 
              size="icon" 
              variant="outline"
              className="hover:shadow-glow hover:border-primary/50 transition-all duration-300"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? 
                <Sun className="h-4 w-4 hover:animate-spin-slow" /> : 
                <Moon className="h-4 w-4 hover:animate-spin-slow" />}
            </Button>
            <a 
              href="/resume.pdf" 
              className="btn-primary text-sm font-mono group" 
              download 
              aria-label="Download Resume"
            >
              Resume
              <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">→</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <Button 
              onClick={toggleTheme} 
              size="icon" 
              variant="outline"
              className="hover:shadow-glow hover:border-primary/50 transition-all duration-300"
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
              {menuOpen ? (
                <X className="h-6 w-6 text-primary animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 text-primary animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav 
        className={`fixed glass-bg top-[60px] right-0 w-full h-screen transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        role="navigation"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              onClick={() => setMenuOpen(false)}
              className="nav-link text-lg flex gap-3 hover:translate-y-[-2px] transition-all duration-300"
            >
              <span className="text-primary">{link.icon}</span>
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            className="btn-primary text-lg font-mono mt-8 hover:translate-y-[-2px]" 
            download
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
