const HeroSection = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToWork = (e) => {
    e.preventDefault();
    document.querySelector('#purpose')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2C2C2C 50%, #3a3028 100%)' }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract%20dark%20architectural%20texture%20with%20geometric%20patterns%2C%20sophisticated%20concrete%20wall%20surface%2C%20muted%20charcoal%20tones%2C%20minimalist%20background%20with%20subtle%20depth%2C%20professional%20studio%20atmosphere%2C%20dark%20gray%20gradient%2C%20elegant%20modern%20design%20surface%20with%20fine%20grain%20texture&width=1440&height=900&seq=hero-bg-001&orientation=landscape"
          alt="Hero background"
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent z-[1]" />

      {/* Decorative accents */}
      <div className="absolute top-24 right-[5%] w-64 h-64 rounded-full border border-terracotta/20 z-[1] hidden md:block" />
      <div className="absolute bottom-24 right-[15%] w-32 h-32 rounded-full border border-sage/20 z-[1] hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16 md:pt-0 md:pb-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">

          {/* Left Content */}
          <div className="flex-1 max-w-xl w-full text-center md:text-left">
            <p className="text-terracotta text-xs font-medium tracking-[3px] uppercase mb-5 opacity-0 animate-[fadeInUp_0.6s_ease_0.2s_forwards] font-sans">
              Backend Developer · VIT Vellore
            </p>

            <h1 className="font-serif text-white leading-[1.05] mb-5 opacity-0 animate-[fadeInUp_0.6s_ease_0.4s_forwards]">
              <span className="block text-4xl sm:text-5xl font-bold">Maddipati Puneet</span>
              <span className="block text-4xl sm:text-5xl font-bold">Janakiram</span>
              <span className="block text-lg sm:text-xl font-light text-white/60 mt-3 font-sans tracking-wide">
                Building Reliable APIs &amp; Scalable Backend Systems
              </span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 font-sans opacity-0 animate-[fadeInUp_0.6s_ease_0.6s_forwards]">
              Focused on building reliable APIs, authentication systems, and data-heavy services with TypeScript, Node.js, Express, SQL, and Redis. Currently looking for backend engineering opportunities.
            </p>

            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start opacity-0 animate-[fadeInUp_0.6s_ease_0.8s_forwards]">
              <a
                href="#purpose"
                onClick={handleScrollToWork}
                className="inline-flex items-center gap-2 bg-terracotta text-white px-6 sm:px-7 py-3 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap hover:bg-[#b5603e] transition-all duration-300"
              >
                View My Work
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-sm" />
                </div>
              </a>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 sm:px-7 py-3 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap hover:border-white/80 hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-10 mt-10 pt-8 border-t border-white/10 opacity-0 animate-[fadeInUp_0.6s_ease_1s_forwards]">
              {[
                { value: 'VIT', label: 'Vellore — CS Student' },
                { value: '10+', label: 'APIs Built' },
                { value: 'Open', label: 'to Opportunities' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-terracotta">{stat.value}</p>
                  <p className="text-white/50 text-xs mt-1 font-sans tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Photo */}
          <div className="relative flex-shrink-0 opacity-0 animate-[fadeInRight_0.8s_ease_0.5s_forwards] w-full md:w-auto flex justify-center">
            <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[500px]">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-terracotta/40 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-sage/30 rounded-2xl" />

              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10">
                <img
                  src="https://static.readdy.ai/image/7f238032a05683993a97bc96465f66ed/6264399ba58b43313bcfae58b216122d.png"
                  alt="Maddipati Puneet Janakiram"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white px-4 py-2.5 rounded-xl">
                <p className="font-serif text-charcoal text-xs sm:text-sm font-semibold">Available for Work</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-xs text-warmgray font-sans">Backend Opportunities</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-[fadeIn_1s_ease_1.2s_forwards] hidden md:flex">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
          <div className="w-4 h-4 flex items-center justify-center">
            <i className="ri-arrow-down-line text-white/40 text-sm" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
