import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientLine from '../components/GradientLine';
import { Mail, MapPin, Globe, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    services: [],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Strategy & SEO',
    'Branding & Identity',
    'Web Design & UI/UX',
    'Custom Web Development',
    'Digital Growth Marketing'
  ];

  const handleServiceToggle = (service) => {
    if (formData.services.includes(service)) {
      setFormData({ ...formData, services: formData.services.filter(s => s !== service) });
    } else {
      setFormData({ ...formData, services: [...formData.services, service] });
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a brief message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#070709] text-white min-h-screen">
      <Navbar theme="dark" />

      <section className="pt-36 pb-24 md:pt-48 md:pb-32 relative">
        {/* Background wave topography visual overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Headline & Info */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF007F] uppercase block mb-4">
                LET'S TALK
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                Got a project in<br />
                mind? Let’s draw<br />
                the line together<span className="text-[#FF007F]">.</span>
              </h1>
              <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                Tell us about your goals and we’ll map out the best way to get there.
              </p>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF007F]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">EMAIL US</div>
                    <a href="mailto:hello@blackline-creative.com" className="text-base font-bold text-white hover:text-[#FF007F] transition-colors">
                      hello@blackline-creative.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FFE66D]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">STUDIO LOCATION</div>
                    <div className="text-base font-bold text-white">Chicago, IL &bull; Remote</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#00B4D8]">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">OFFICIAL DOMAIN</div>
                    <div className="text-base font-bold text-white">blackline-creative.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-neutral-900/90 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-20 h-20 bg-[#FF007F]/20 text-[#FF007F] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8">
                    Thank you for reaching out. We have received your project details and will be in touch within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', company: '', services: [], message: '' }); }}
                    className="btn-primary dark-btn"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-neutral-300 mb-2">
                      FULL NAME *
                    </label>
                    <input 
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-neutral-950 border rounded-2xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#FF007F]'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-neutral-300 mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input 
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-neutral-950 border rounded-2xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#FF007F]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-neutral-300 mb-2">
                      COMPANY / ORGANIZATION
                    </label>
                    <input 
                      type="text"
                      placeholder="Acme Corp (Optional)"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-950 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-[#FF007F] transition-colors"
                    />
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-neutral-300 mb-3">
                      WHAT CAN WE HELP YOU WITH?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => {
                        const selected = formData.services.includes(s);
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => handleServiceToggle(s)}
                            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all ${
                              selected 
                                ? 'bg-[#FF007F] text-white' 
                                : 'bg-neutral-950 text-neutral-400 border border-white/10 hover:border-white/30'
                            }`}
                          >
                            {selected ? `✓ ${s}` : `+ ${s}`}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-neutral-300 mb-2">
                      MESSAGE *
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project, timing, and objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full bg-neutral-950 border rounded-2xl p-5 text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#FF007F]'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-gradient w-full py-4 text-sm font-bold flex items-center justify-center gap-2">
                    SEND MESSAGE <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer theme="dark" />
    </div>
  );
}
