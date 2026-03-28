import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Requirements & API Design',
    icon: 'ri-file-list-3-line',
    desc: 'I start by thoroughly understanding the system requirements — who the users are, what data flows exist, and what the API needs to do. I design clear API contracts, define endpoints, request/response schemas, and authentication strategies before writing code.',

    deliverable: 'API Contract & ERD Document',
  },
  {
    number: '02',
    title: 'Database Schema Design',
    icon: 'ri-database-2-line',
    desc: 'With the API design confirmed, I design normalized database schemas with the right relationships and indexes. I choose the right database for the job — MySQL/PostgreSQL for relational data, MongoDB for document-based models, Redis for caching layers.',
    
    deliverable: 'Schema Migrations & Seed Scripts',
  },
  {
    number: '03',
    title: 'Implementation & Integration',
    icon: 'ri-code-s-slash-line',
    desc: 'I build the API layer in TypeScript with Node.js and Express — implementing business logic, JWT authentication, role-based access control, input validation, Redis caching, and BullMQ background jobs. Every module is clean, typed, and follows consistent patterns.',
   
    deliverable: 'Fully Functional REST API',
  },
  {
    number: '04',
    title: 'Testing & Deployment',
    icon: 'ri-test-tube-line',
    desc: 'No code ships without tests. I write unit and integration tests using Jest and Supertest, covering critical paths, edge cases, and auth flows. The service is then containerized with Docker and deployed with confidence, with logs and error monitoring in place.',
    
    deliverable: 'Tested, Dockerized & Deployed API',
  },
];

const HowItWorksSection = () => {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const images = [
    'https://readdy.ai/api/search-image?query=professional%20business%20strategy%20meeting%20with%20whiteboard%20notes%20and%20sticky%20notes%2C%20modern%20bright%20office%20environment%2C%20collaborative%20planning%20session%2C%20warm%20neutral%20tones%2C%20people%20discussing%20project%20roadmap%2C%20clean%20minimalist%20workspace%2C%20professional%20team%20collaboration%2C%20soft%20natural%20lighting&width=560&height=400&seq=step-img-001&orientation=landscape',
    'https://readdy.ai/api/search-image?query=database%20schema%20diagram%20on%20whiteboard%20with%20entity%20relationship%20tables%20and%20arrows%2C%20developer%20planning%20database%20structure%2C%20clean%20minimal%20workspace%2C%20warm%20beige%20and%20terracotta%20tones%2C%20focused%20technical%20design%20session%2C%20professional%20engineering%20environment&width=560&height=400&seq=step-img-002&orientation=landscape',
    'https://readdy.ai/api/search-image?query=software%20developer%20coding%20on%20dual%20monitors%20showing%20code%20editor%20with%20Node.js%20TypeScript%20backend%20code%2C%20modern%20minimal%20workspace%2C%20focused%20development%20session%2C%20warm%20desk%20lamp%20lighting%2C%20clean%20and%20organized%20developer%20setup%2C%20professional%20coding%20environment%20with%20dark%20theme%20IDE%2C%20cozy%20and%20productive&width=560&height=400&seq=step-img-003&orientation=landscape',
    'https://readdy.ai/api/search-image?query=software%20testing%20dashboard%20on%20laptop%20showing%20passing%20Jest%20test%20suite%20green%20checkmarks%2C%20modern%20office%20setting%2C%20Docker%20container%20deployment%20interface%2C%20clean%20professional%20developer%20workspace%2C%20warm%20ambient%20lighting%2C%20successful%20CI%20CD%20pipeline%20visualization&width=560&height=400&seq=step-img-004&orientation=landscape',
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-28 bg-white w-full">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>

          {/* Header */}
          <div className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-terracotta text-xs font-medium tracking-[3px] uppercase font-sans mb-4">The Process</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-5xl font-bold leading-tight">
              How It <span className="italic text-terracotta">Works</span>
            </h2>
            <p className="text-warmgray text-sm sm:text-base font-sans mt-4 sm:mt-5 max-w-lg mx-auto leading-relaxed">
              A structured, production-focused engineering process — from API design to deployment.
            </p>
          </div>

          {/* Step Tabs */}
          <div className={`flex gap-2 sm:gap-3 justify-start sm:justify-center mb-10 sm:mb-14 overflow-x-auto pb-2 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium font-sans cursor-pointer whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeStep === i ? 'bg-terracotta text-white' : 'bg-beige text-warmgray hover:bg-[#EDE9E3]'
                }`}
              >
                <span className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold ${
                  activeStep === i ? 'bg-white/20 text-white' : 'bg-terracotta/20 text-terracotta'
                }`}>
                  {s.number.slice(1)}
                </span>
                {s.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Active Step Card */}
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${activeStep === i ? 'block' : 'hidden'}`}
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <span className="font-serif text-5xl sm:text-7xl font-bold text-terracotta/20 leading-none">{step.number}</span>
                    <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center bg-terracotta/10 rounded-2xl">
                      <i className={`${step.icon} text-terracotta text-xl sm:text-2xl`} />
                    </div>
                  </div>
                  <h3 className="font-serif text-charcoal text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">{step.title}</h3>
                  <p className="text-warmgray text-sm sm:text-base font-sans leading-relaxed mb-6 sm:mb-8">{step.desc}</p>

                  <div className="flex gap-4 sm:gap-6 flex-col sm:flex-row">
                    <div className="bg-beige rounded-xl px-5 sm:px-6 py-3 sm:py-4">
                      <p className="text-xs text-warmgray font-sans uppercase tracking-widest mb-1">Duration</p>
                    </div>
                    <div className="bg-beige rounded-xl px-5 sm:px-6 py-3 sm:py-4 flex-1">
                      <p className="text-xs text-warmgray font-sans uppercase tracking-widest mb-1">Deliverable</p>
                      <p className="font-serif text-charcoal font-semibold text-sm">{step.deliverable}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="relative h-[240px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden mt-4 md:mt-0">
                  <img
                    src={images[i]}
                    alt={step.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    <span className="text-terracotta font-sans font-semibold text-xs sm:text-sm">Step {step.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-3 mt-10 sm:mt-12">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`cursor-pointer transition-all duration-300 rounded-full ${
                  activeStep === i ? 'w-8 h-2 bg-terracotta' : 'w-2 h-2 bg-terracotta/30 hover:bg-terracotta/50'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
