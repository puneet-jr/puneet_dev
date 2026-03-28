import { useState, useRef, useEffect } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    setStatus('sending');
    try {
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('subject', formData.subject);
      params.append('message', formData.message);

      const res = await fetch('https://readdy.ai/api/form/d6ujcudt4s7j0tv5i4sg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      label: 'Email',
      value: 'puneetjanakiram@gmail.com',
      href: 'mailto:puneetjanakiram@gmail.com',
    },
    {
      icon: 'ri-linkedin-box-line',
      label: 'LinkedIn',
      value: 'linkedin.com/in/maddipati-puneet',
      href: 'https://www.linkedin.com/public-profile/settings',
    },
    {
      icon: 'ri-github-line',
      label: 'GitHub',
      value: 'github.com/puneet-jr',
      href: 'https://github.com/puneet-jr',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-28 w-full" style={{ background: '#FAF9F7' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref}>

          {/* Header */}
          <div className={`text-center mb-12 sm:mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-terracotta text-xs font-medium tracking-[3px] uppercase font-sans mb-4">Get In Touch</p>
            <h2 className="font-serif text-charcoal text-3xl sm:text-5xl font-bold leading-tight">
              Let&apos;s Discuss Projects<br />
              <span className="italic text-terracotta">&amp; Opportunities</span>
            </h2>
            <p className="text-warmgray text-sm sm:text-base font-sans mt-4 sm:mt-5 max-w-lg mx-auto leading-relaxed">
              If you&apos;d like to discuss projects, internships, or collaborations — reach out through LinkedIn, GitHub, or email.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-start transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Left: Info */}
            <div>
              <h3 className="font-serif text-charcoal text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Currently looking for backend engineering opportunities
              </h3>
              <p className="text-warmgray text-sm font-sans leading-relaxed mb-8 sm:mb-10">
                I&apos;m open to full-time backend engineering roles, internships, and interesting collaboration opportunities. Response time is usually within a day.
              </p>

              <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    rel="nofollow"
                    target="_blank"
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-10 sm:w-11 h-10 sm:h-11 flex items-center justify-center bg-terracotta/10 rounded-xl flex-shrink-0 group-hover:bg-terracotta/20 transition-colors duration-300">
                      <i className={`${info.icon} text-terracotta text-base sm:text-lg`} />
                    </div>
                    <div>
                      <p className="text-xs text-warmgray font-sans uppercase tracking-widest mb-0.5">{info.label}</p>
                      <p className="text-charcoal text-sm font-medium font-sans group-hover:text-terracotta transition-colors duration-300 break-all">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability note */}
              <div className="bg-white rounded-2xl px-5 sm:px-6 py-4 sm:py-5 border border-[#E8E6E2]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <p className="font-sans text-sm font-semibold text-charcoal">Open to Opportunities</p>
                </div>
                <p className="text-warmgray text-xs font-sans leading-relaxed">
                  Available for backend engineering roles, internships, and technical collaborations. Based at VIT, Vellore.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8E6E2]">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-50 rounded-full mb-5">
                    <i className="ri-check-line text-green-500 text-3xl" />
                  </div>
                  <h4 className="font-serif text-charcoal text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-warmgray text-sm font-sans">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-terracotta text-sm font-medium font-sans cursor-pointer whitespace-nowrap hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs text-warmgray font-sans uppercase tracking-widest mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border-b-2 border-[#E8E6E2] focus:border-terracotta outline-none py-3 text-sm text-charcoal font-sans bg-transparent transition-colors duration-200 placeholder:text-warmgray/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-warmgray font-sans uppercase tracking-widest mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full border-b-2 border-[#E8E6E2] focus:border-terracotta outline-none py-3 text-sm text-charcoal font-sans bg-transparent transition-colors duration-200 placeholder:text-warmgray/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-warmgray font-sans uppercase tracking-widest mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Job opportunity / Project / Internship"
                      className="w-full border-b-2 border-[#E8E6E2] focus:border-terracotta outline-none py-3 text-sm text-charcoal font-sans bg-transparent transition-colors duration-200 placeholder:text-warmgray/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-warmgray font-sans uppercase tracking-widest mb-2">
                      Message
                      <span className={`ml-2 normal-case tracking-normal ${formData.message.length > 500 ? 'text-red-500' : 'text-warmgray/50'}`}>
                        ({formData.message.length}/500)
                      </span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project..."
                      maxLength={500}
                      className="w-full border-b-2 border-[#E8E6E2] focus:border-terracotta outline-none py-3 text-sm text-charcoal font-sans bg-transparent transition-colors duration-200 resize-none placeholder:text-warmgray/40"
                    />
                    {formData.message.length > 500 && (
                      <p className="text-red-500 text-xs font-sans mt-1">Message cannot exceed 500 characters.</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-sans">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending' || formData.message.length > 500}
                    className="w-full bg-terracotta text-white py-4 rounded-xl text-sm font-medium font-sans cursor-pointer whitespace-nowrap hover:bg-[#b5603e] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <i className="ri-loader-4-line animate-spin text-base" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-send-plane-line text-sm" />
                        </div>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
