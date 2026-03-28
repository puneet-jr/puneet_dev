import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    metric: '100%',
    title: 'Type-Safe Code',
    desc: 'Every project is built in TypeScript with strict mode — meaning fewer runtime errors, better IDE support, and code that\'s easy to refactor and maintain.',
    icon: 'ri-code-s-slash-line',
  },
  {
    metric: 'REST',
    title: 'Clean API Design',
    desc: 'Well-structured, documented RESTful APIs with consistent naming, proper status codes, and clear error messages that any frontend team can easily consume.',
    icon: 'ri-links-line',
  },
  {
    metric: 'JWT',
    title: 'Secure by Default',
    desc: 'Authentication built with JWT, role-based access control, input validation, and Redis-backed session management — security is never an afterthought.',
    icon: 'ri-shield-keyhole-line',
  },
  {
    metric: '∞',
    title: 'Scalable Architecture',
    desc: 'Backend systems designed from day one to scale — from async queues with BullMQ to Redis caching layers and database indexing strategies that hold up under load.',
    icon: 'ri-expand-up-down-line',
  },
  {
    metric: 'Tested',
    title: 'Production-Ready',
    desc: 'Unit and integration tests with Jest and Supertest across every critical path. Nothing ships untested — from auth flows to edge cases and error handling.',
    icon: 'ri-test-tube-line',
  },
  {
    metric: 'Docker',
    title: 'Containerized Delivery',
    desc: 'Services delivered containerized with Docker for consistent, reproducible environments across development, staging, and production deployments.',
    icon: 'ri-stack-line',
  },
];

const BenefitsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="py-16 sm:py-28 w-full bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>

          {/* Header */}
          <div className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-terracotta text-xs font-medium tracking-[3px] uppercase font-sans mb-4">Why Work With Me</p>
            <h2 className="font-serif text-white text-3xl sm:text-5xl font-bold leading-tight">
              What I <span className="italic text-terracotta">Offer</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base font-sans mt-4 sm:mt-5 max-w-lg mx-auto leading-relaxed">
              Beyond writing code — delivering backend systems that are secure, tested, and built to last.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="border border-white/10 rounded-2xl p-6 sm:p-8 group hover:border-terracotta/40 transition-all duration-300 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, border-color 0.3s ease`,
                }}
              >
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-terracotta leading-none">{benefit.metric}</p>
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-xl group-hover:border-terracotta/40 transition-colors duration-300">
                    <i className={`${benefit.icon} text-white/40 text-lg group-hover:text-terracotta transition-colors duration-300`} />
                  </div>
                </div>
                <h3 className="font-serif text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-white/40 text-sm font-sans leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`mt-14 sm:mt-20 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-6 bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-12 py-6 sm:py-8 w-full sm:w-auto">
              <div className="text-center sm:text-left">
                <p className="font-serif text-white text-lg sm:text-xl font-semibold">Looking to discuss a project or internship?</p>
                <p className="text-white/40 text-sm font-sans mt-1">Reach out via LinkedIn, GitHub, or email.</p>
              </div>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap hover:bg-[#b5603e] transition-all duration-300 flex-shrink-0"
              >
                Get In Touch
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-sm" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
