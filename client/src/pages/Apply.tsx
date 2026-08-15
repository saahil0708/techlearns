import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

// Custom Select Component for Premium UI
const CustomSelect = ({ label, options, value, onChange, required }: { label: string, options: {label: string, value: string}[], value: string, onChange: (val: string) => void, required?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => opt.value === value)?.label || "Select an option";

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block font-bebas text-lg tracking-widest text-[#0B1F3A] mb-1">
        {label} {required && '*'}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 rounded-xl border ${isOpen ? 'border-[#8C52FF] ring-2 ring-[#8C52FF]/30' : 'border-gray-200'} bg-white text-gray-800 flex items-center justify-between cursor-pointer transition-all font-medium`}
      >
        <span className={value ? 'text-gray-800' : 'text-gray-400'}>{selectedLabel}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            {options.map((opt) => (
              <div 
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 cursor-pointer hover:bg-[#F8F9FA] transition-colors text-[14px] font-medium ${value === opt.value ? 'bg-[#5B2D91]/5 font-bold text-[#5B2D91]' : 'text-gray-700'}`}
              >
                {opt.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Apply() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [role, setRole] = useState('student');
  const [interest, setInterest] = useState('diagnostic');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to backend here
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col items-center font-sans pt-[90px] lg:pt-[120px] relative overflow-hidden">
      
      {/* Background Enhancements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F3E5F5]/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
      <div className="absolute bottom-1/2 left-0 w-[600px] h-[600px] bg-[#E8EAF6]/60 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8C52FF06_1px,transparent_1px),linear-gradient(to_bottom,#8C52FF06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* MAIN TOP SECTION */}
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row justify-between px-4 sm:px-6 lg:px-8 pb-12 gap-10 lg:gap-12 relative z-10">
        
        {/* LEFT PANEL - CONTACT INFO */}
        <div className="w-full lg:w-5/12 flex flex-col pt-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#5B2D91] font-bebas tracking-widest text-xl mb-4">We're Here.</p>
            
            <h1 className="text-5xl sm:text-6xl font-black font-flexa tracking-tight leading-[1.05] mb-6 text-[#0B1F3A]">
              Get in touch.<br/>
              We respond fast.
            </h1>
            
            <p className="text-lg text-neutral-500 font-medium leading-relaxed mb-10 max-w-md">
              Have questions about placements, scholarships, or which program to choose? Our expert counselors are ready to help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {/* Card 1: Address */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#5B2D91]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#5B2D91]" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] mb-1 font-flexa text-lg">Office Address</h3>
                <p className="text-sm text-neutral-500">Tech District, Sector 4<br/>Bangalore, India</p>
              </div>

              {/* Card 2: Phone */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#5B2D91]/10 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-[#5B2D91]" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] mb-1 font-flexa text-lg">Call Us</h3>
                <p className="text-sm text-neutral-500">+91 88251 97739</p>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#5B2D91]/10 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-[#5B2D91]" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] mb-1 font-flexa text-lg">Email Us</h3>
                <p className="text-sm text-neutral-500">contact@techlearns.com</p>
              </div>

              {/* Card 4: Hours */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#5B2D91]/10 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#5B2D91]" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] mb-1 font-flexa text-lg">Working Hours</h3>
                <p className="text-sm text-neutral-500"><span className="font-semibold text-neutral-700">Mon-Sat: 9AM - 7PM</span><br/>Sunday: Closed</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a href="#" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20b858] text-white font-bebas text-xl tracking-wider rounded-xl shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_25px_rgba(37,211,102,0.4)] transition-all gap-3">
              <svg className="w-6 h-6 -mt-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* RIGHT PANEL - THE FORM */}
        <div className="w-full lg:w-6/12 relative lg:ml-auto max-w-[550px]">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_15px_60px_rgb(91,45,145,0.06)] border border-white p-7 sm:p-10"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold font-flexa text-[#0B1F3A] mb-4">Application Received!</h2>
                <p className="text-gray-500 font-medium">
                  Our career advisors will contact you shortly to schedule your free diagnostic session.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="mb-6">
                  <h2 className="text-[32px] font-black text-[#0B1F3A] mb-1 font-flexa">Send us a message</h2>
                  <p className="text-neutral-500 font-medium">We'll get back to you within 24 hours.</p>
                </div>

                {/* FULL NAME */}
                <div>
                  <label htmlFor="fullName" className="block font-bebas text-lg tracking-widest text-[#0B1F3A] mb-1">
                    Full Name*
                  </label>
                  <input 
                    type="text" 
                    id="fullName" 
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 focus:border-[#8C52FF] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* PHONE NUMBER */}
                  <div>
                    <label htmlFor="phone" className="block font-bebas text-lg tracking-widest text-[#0B1F3A] mb-1">
                      Phone*
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-600 font-bold sm:text-sm">
                        +91
                      </span>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="flex-1 w-full px-4 py-2.5 rounded-r-xl border border-gray-200 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 focus:border-[#8C52FF] transition-all"
                      />
                    </div>
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div>
                    <label htmlFor="email" className="block font-bebas text-lg tracking-widest text-[#0B1F3A] mb-1">
                      Email*
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 focus:border-[#8C52FF] transition-all"
                    />
                  </div>
                </div>

                {/* CUSTOM DROPDOWN: I AM A */}
                <CustomSelect 
                  label="I Am A"
                  required={true}
                  value={role}
                  onChange={setRole}
                  options={[
                    { label: 'Student / Fresher', value: 'student' },
                    { label: 'Working Professional', value: 'professional' },
                    { label: 'Freelancer', value: 'freelancer' }
                  ]}
                />

                {/* CUSTOM DROPDOWN: AREA OF INTEREST */}
                <CustomSelect 
                  label="Area of Interest"
                  required={true}
                  value={interest}
                  onChange={setInterest}
                  options={[
                    { label: 'Book a Free Career Diagnostic', value: 'diagnostic' },
                    { label: 'Full Stack Web Development', value: 'fullstack' },
                    { label: 'Data Science & AI', value: 'datascience' },
                    { label: 'Cyber Security', value: 'cyber' }
                  ]}
                />

                {/* MESSAGE */}
                <div>
                  <label htmlFor="message" className="block font-bebas text-lg tracking-widest text-[#0B1F3A] mb-1">
                    Message*
                  </label>
                  <textarea 
                    id="message" 
                    rows={3}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 focus:border-[#8C52FF] transition-all resize-y"
                  ></textarea>
                </div>

                {/* RADIO BUTTONS */}
                <div className="pt-1 pb-2">
                  <label className="block font-bebas text-lg tracking-widest text-[#0B1F3A] mb-2">
                    Are you looking for placement guarantee?
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center justify-center px-6 py-2 border border-[#5B2D91] rounded-xl cursor-pointer bg-[#5B2D91]/5 hover:bg-[#5B2D91]/10 transition-colors">
                      <input type="radio" name="placement" value="yes" className="w-4 h-4 text-[#5B2D91] focus:ring-[#5B2D91] border-gray-300" defaultChecked />
                      <span className="ml-2 text-sm font-bold text-[#5B2D91]">Yes</span>
                    </label>
                    <label className="flex items-center justify-center px-6 py-2 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="placement" value="no" className="w-4 h-4 text-[#5B2D91] focus:ring-[#5B2D91] border-gray-300" />
                      <span className="ml-2 text-sm font-bold text-gray-600">No</span>
                    </label>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <button 
                  type="submit"
                  className="w-full py-3.5 bg-[#4A166A] hover:bg-[#381050] active:scale-[0.98] text-white font-bebas text-2xl tracking-widest uppercase rounded-xl shadow-[0_8px_20px_rgba(74,22,106,0.25)] hover:shadow-[0_12px_25px_rgba(74,22,106,0.35)] transition-all flex items-center justify-center mt-3"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* FULL WIDTH BOTTOM MAP SECTION */}
      <div className="w-full relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-white/50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.6382024!3d12.939741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzIzLjEiTiA3N8KwMzgnMTcuNSJF!5e0!3m2!1sen!2sin!4v1625574768393!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Office Location"
            className="grayscale-[20%]"
          ></iframe>
        </div>
      </div>

    </div>
  );
}
