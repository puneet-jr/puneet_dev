import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    category: 'Node.js & Express',
    icon: 'ri-nodejs-line',
    accent: '#F4E4E0',
    items: ['RESTful API Design', 'Express.js Framework', 'Middleware Architecture', 'Route Handlers', 'Error Handling', 'MVC Patterns'],
    desc: 'Building production-grade server-side applications with clean, maintainable Node.js and Express architecture.',
  },
  {
    category: 'TypeScript',
    icon: 'ri-code-s-slash-line',
    accent: '#E3EFE8',
    items: ['Type-safe Development', 'Interfaces & Generics', 'Strict Mode', 'Decorators', 'Module System', 'Advanced Types'],
    desc: 'Writing type-safe, self-documenting backend code that scales with confidence and minimal runtime errors.',
  },
  {
    category: 'Databases',
    icon: 'ri-database-2-line',
    accent: '#EDE8F5',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis Caching', 'Schema Design', 'Query Optimization'],
    desc: 'Proficient in both relational and NoSQL databases — designing efficient schemas and writing optimized queries.',
  },
  {
    category: 'Auth & Security',
    icon: 'ri-shield-keyhole-line',
    accent: '#FFF4E8',
    items: ['JWT Authentication', 'Role-Based Access Control', 'Input Validation', 'Rate Limiting', 'Password Hashing', 'Secure Headers'],
    desc: 'Implementing robust authentication flows and access control systems with security-first thinking.',
  },
  {
    category: 'Background Jobs',
    icon: 'ri-timer-line',
    accent: '#E8F5F5',
    items: ['BullMQ', 'Redis Queues', 'Job Scheduling', 'Retry Logic', 'Worker Processes', 'Event-Driven Design'],
    desc: 'Designing reliable background job systems for async processing, notifications, and workflow automation.',
  },
  {
    category: 'Testing & DevOps',
    icon: 'ri-test-tube-line',
    accent: '#F0F4E8',
    items: ['Jest', 'Supertest', 'Unit Testing', 'Integration Tests', 'Docker', 'CI/CD Pipelines'],
    desc: 'Ensuring code quality and reliable deployments through thorough testing and containerized environments.',
  },
];

const KeyFeaturesSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="key-features" className="py-16 sm:py-28 w-full" style={{ background: '#FAF9F7' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>

          {/* Header */}
          <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <p className="text-terracotta text-xs font-medium tracking-[3px] uppercase font-sans mb-3">What I Work With</p>
              <h2 className="font-serif text-charcoal text-3xl sm:text-5xl font-bold leading-tight">
                Key Features &amp;<br />
                <span className="italic text-terracotta">Tech Stack</span>
              </h2>
            </div>
            <p className="text-warmgray text-sm sm:text-base max-w-xs md:text-right font-sans leading-relaxed">
              A focused backend skill set built through real internship experience and hands-on project work.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.category}
                className="rounded-2xl p-6 sm:p-8 transition-all duration-500 group hover:-translate-y-1 cursor-default"
                style={{
                  background: skill.accent,
                  transitionDelay: visible ? `${i * 80}ms` : '0ms',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
                    <i className={`${skill.icon} text-terracotta text-xl`} />
                  </div>
                  <span className="text-xs text-warmgray font-sans font-medium bg-white/60 px-3 py-1 rounded-full">
                    {skill.items.length} skills
                  </span>
                </div>

                <h3 className="font-serif text-charcoal text-lg sm:text-xl font-bold mb-2">{skill.category}</h3>
                <p className="text-warmgray text-sm font-sans leading-relaxed mb-4 sm:mb-6">{skill.desc}</p>

                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0" />
                      <span className="text-sm text-warmgray font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
