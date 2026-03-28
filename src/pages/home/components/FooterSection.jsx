const FooterSection = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Purpose', href: '#purpose' },
    { label: 'Key Features', href: '#key-features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-box-line', href: 'https://www.linkedin.com/public-profile/settings', label: 'LinkedIn' },
    { icon: 'ri-github-line', href: 'https://github.com/puneet-jr', label: 'GitHub' },
    { icon: 'ri-mail-line', href: 'mailto:puneetjanakiram@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="w-full" style={{ background: '#EDE9E3' }}>
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 items-start">

          {/* Brand */}
          <div>
            <p className="font-serif text-charcoal text-xl sm:text-2xl font-bold mb-3">Maddipati Puneet Janakiram</p>
            <p className="text-warmgray text-sm font-sans leading-relaxed mb-5 sm:mb-6 max-w-xs">
              Backend developer building reliable APIs, authentication systems, and data-heavy services with TypeScript, Node.js, Express, SQL, and Redis.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="nofollow"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-[#D4CFC8] rounded-lg text-warmgray hover:text-terracotta hover:border-terracotta/40 transition-all duration-300 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-warmgray font-sans uppercase tracking-widest mb-4 sm:mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-warmgray font-sans cursor-pointer hover:text-terracotta transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs text-warmgray font-sans uppercase tracking-widest mb-4 sm:mb-5">Let&apos;s Connect</p>
            <p className="text-sm text-warmgray font-sans leading-relaxed mb-4 sm:mb-5">
              Looking for backend engineering opportunities, internships, and collaborations. Let&apos;s talk.
            </p>
            <a
              href="mailto:puneetjanakiram@gmail.com"
              className="inline-flex items-center gap-2 bg-terracotta text-white text-sm font-medium px-6 py-2.5 rounded-full cursor-pointer whitespace-nowrap hover:bg-[#b5603e] transition-all duration-300"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-mail-line text-sm" />
              </div>
              Say Hello
            </a>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#D4CFC8]" />

      {/* Lower Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <p className="text-xs text-warmgray font-sans text-center sm:text-left">
          &copy; {new Date().getFullYear()} Maddipati Puneet Janakiram. All rights reserved.
        </p>
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 text-xs text-warmgray font-sans cursor-pointer hover:text-terracotta transition-colors duration-200 whitespace-nowrap"
        >
          Back to top
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-up-line text-xs" />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
