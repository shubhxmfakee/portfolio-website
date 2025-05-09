
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ResumeButtonProps {
  className?: string;
}

const ResumeButton = ({ className = '' }: ResumeButtonProps) => {
  return (
    <a
      href="/resume.pdf"
      download
      className={`btn-primary flex items-center gap-2 ${className}`}
      aria-label="Download Resume"
    >
      Download Resume <ArrowRight className="h-4 w-4" />
    </a>
  );
};

export default ResumeButton;
