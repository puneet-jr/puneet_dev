import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Purpose', href: '#purpose' },
  { label: 'Tech Stack', href: '#key-features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'What I Offer', href: '#benefits' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#E8E6E2]' : 'bg-transparent'
      }`}
      style={{ transitionProperty: 'background-color, border-color, box-shadow' }}
    >
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className={`font-serif font-semibold text-lg tracking-tight cursor-pointer whitespace-nowrap transition-colors duration-300 ${
            scrolled ? 'text-charcoal' : 'text-white'
          }`}
        >
          Maddipati Puneet Janakiram
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-terracotta ${
                  scrolled ? 'text-warmgray' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${__BASE_PATH__}RESUME.pdf`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-terracotta text-terracotta text-sm font-medium px-5 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-terracotta hover:text-white"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 bg-terracotta text-white text-sm font-medium px-5 py-2 rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-[#b5603e]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-300 ${
            scrolled ? 'text-charcoal' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-xl`} />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E6E2] px-8 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-warmgray cursor-pointer whitespace-nowrap hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`${__BASE_PATH__}RESUME.pdf`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-warmgray cursor-pointer whitespace-nowrap hover:text-terracotta transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
