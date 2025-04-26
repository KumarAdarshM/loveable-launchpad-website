
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import logo from '../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Loveable Dev" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className={cn(
                  "text-agency-blue hover:text-agency-purple transition-colors",
                  isActive('/') && 'text-agency-purple font-medium'
                )}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={cn(
                  "text-agency-blue hover:text-agency-purple transition-colors",
                  isActive('/about') && 'text-agency-purple font-medium'
                )}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={cn(
                  "text-agency-blue hover:text-agency-purple transition-colors",
                  isActive('/projects') && 'text-agency-purple font-medium'
                )}
              >
                Projects
              </Link>
            </li>
            <li>
              <a href="#contact" className="btn btn-primary">
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-agency-blue p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-y-0 right-0 z-50 w-full bg-white transform transition-transform duration-300 ease-in-out md:hidden',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Loveable Dev" className="h-8" />
              </Link>
              <button 
                className="text-agency-blue p-2" 
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-grow">
              <ul className="flex flex-col space-y-6 text-lg">
                <li>
                  <Link
                    to="/"
                    className={cn(
                      "text-agency-blue hover:text-agency-purple transition-colors",
                      isActive('/') && 'text-agency-purple font-medium'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={cn(
                      "text-agency-blue hover:text-agency-purple transition-colors",
                      isActive('/about') && 'text-agency-purple font-medium'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className={cn(
                      "text-agency-blue hover:text-agency-purple transition-colors",
                      isActive('/projects') && 'text-agency-purple font-medium'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="btn btn-primary block text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
