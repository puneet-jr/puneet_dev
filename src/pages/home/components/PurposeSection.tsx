import { useEffect, useRef, useState } from 'react';

const PurposeSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'REST API Specialist',
      desc: 'Built REST APIs for workspaces, projects, tasks, comments, reviews, bookings, and background job workflows.',
    },
    {
      icon: 'ri-shield-keyhole-line',
      title: 'Auth & Security',
      desc: 'Comfortable with JWT authentication, role-based access control, input validation, Redis caching, and BullMQ.',
    },
    {
      icon: 'ri-database-2-line',
      title: 'Database Proficient',
      desc: 'Worked with MySQL, PostgreSQL, MongoDB, Redis, Docker, Jest, and Supertest across multiple production projects.',
    },
  ];

  return (
    <section id="purpose" className="py-16 sm:py-28 bg-white w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Header */}
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-terracotta text-xs font-medium tracking-[3px] uppercase font-sans">About Me</span>
              <div className="h-px w-12 bg-terracotta" />
            </div>
            <h2 className="font-serif text-charcoal text-3xl sm:text-5xl font-bold leading-tight max-w-xl mx-auto">
              Driven by Backend<br />
              <span className="italic text-terracotta">Excellence &amp; Craft</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mb-14 sm:mb-24">
            {/* Left: Image */}
            <div className="relative">
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20developer%20workspace%20with%20multiple%20monitors%20showing%20code%20and%20design%20interfaces%2C%20clean%20minimalist%20desk%20setup%2C%20warm%20ambient%20lighting%2C%20professional%20software%20development%20environment%2C%20elegant%20tech%20workspace%20with%20plants%20and%20coffee%2C%20cozy%20but%20productive%20atmosphere%2C%20muted%20warm%20tones%20beige%20and%20terracotta%20accents&width=600&height=480&seq=purpose-img-001&orientation=landscape"
                  alt="Developer workspace"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-beige rounded-2xl px-5 sm:px-8 py-4 sm:py-6 w-44 sm:w-56">
                <p className="font-serif text-charcoal text-xl sm:text-2xl font-bold">VIT</p>
                <p className="text-warmgray text-xs sm:text-sm font-sans mt-1">Computer Science<br />Student · Vellore</p>
              </div>
              <div className="absolute top-0 left-0 w-1.5 h-24 bg-terracotta rounded-full" />
            </div>

            {/* Right: Bio */}
            <div className="mt-8 md:mt-0">
              <h3 className="font-serif text-charcoal text-2xl sm:text-3xl font-semibold mb-5 leading-snug">
                Hi, I&apos;m Maddipati Puneet Janakiram — a backend developer who cares about building things right.
              </h3>
              <div className="space-y-4 text-warmgray text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  I&apos;m a <strong className="text-charcoal">Computer Science student at VIT, Vellore</strong> with hands-on backend internship and project experience. I&apos;m focused on building reliable APIs, authentication systems, and data-heavy services.
                </p>
                <p>
                  My core stack is <strong className="text-charcoal">TypeScript, Node.js, Express, SQL, and Redis</strong>. I&apos;ve built REST APIs for workspaces, projects, tasks, comments, reviews, bookings, and background job workflows.
                </p>
                <p>
                  I&apos;m interested in <em>scalable backend architecture, clean API design, and production-oriented engineering practices</em> — and I&apos;m currently looking for backend engineering opportunities, internships, or collaborations.
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
                {['TypeScript', 'Node.js', 'Express', 'SQL', 'Redis', 'JWT', 'BullMQ', 'Docker', 'PostgreSQL', 'MongoDB'].map((tag) => (
                  <span key={tag} className="bg-beige text-warmgray text-xs font-medium px-3 sm:px-4 py-1.5 rounded-full font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
            {highlights.map((v, i) => (
              <div
                key={v.title}
                className="bg-beige rounded-2xl p-6 sm:p-8 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-terracotta/10 rounded-xl mb-4 sm:mb-5">
                  <i className={`${v.icon} text-terracotta text-xl`} />
                </div>
                <h4 className="font-serif text-charcoal text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{v.title}</h4>
                <p className="text-warmgray text-sm leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
