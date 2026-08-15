import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ContactUsButton() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [selectedState, setSelectedState] = useState('');
  const [isStateOpen, setIsStateOpen] = useState(false);
  
  const [selectedCity, setSelectedCity] = useState('');
  const [isCityOpen, setIsCityOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-[100] perspective-[200px]">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#8C52FF] hover:bg-[#7a41ec] text-white font-bold py-6 px-3 rounded-l-xl shadow-2xl border border-r-0 border-white/20 transition-all duration-300 origin-right [transform:perspective(200px)_rotateY(-12deg)] hover:[transform:perspective(200px)_rotateY(0deg)] flex items-center justify-center group"
        >
          <span
            style={{ writingMode: 'vertical-rl' }}
            className="rotate-180 tracking-[0.2em] font-flexa text-sm uppercase group-hover:scale-105 transition-transform font-bold"
          >
            Contact Us
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[101]"
            />
            <motion.div
              initial={{ x: '100%', y: '-50%', opacity: 0 }}
              animate={{ x: 0, y: '-50%', opacity: 1 }}
              exit={{ x: '100%', y: '-50%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ top: '50%' }}
              className="fixed right-4 sm:right-6 w-[460px] max-h-[85vh] max-w-[calc(100vw-2rem)] bg-white z-[102] shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col font-sans rounded-2xl overflow-hidden"
            >
              <div className="p-5 bg-gradient-to-r from-[#5B2D91] to-[#8C52FF] text-white flex justify-between items-center relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="font-bebas text-xl tracking-wider mb-0.5">Get in Touch</h3>
                  <p className="text-purple-100 text-[12px] font-medium">We'd love to hear from you!</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors relative z-10"
                >
                  <X size={16} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-grow flex flex-col gap-6 bg-[#FAFAFA]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] text-[#4A4A4A] mb-1.5">First Name*</label>
                    <input type="text" className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A045A1] focus:border-[#A045A1] transition-all text-[14px] text-gray-700 placeholder-gray-400" placeholder="First Name" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#4A4A4A] mb-1.5">Last Name*</label>
                    <input type="text" className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A045A1] focus:border-[#A045A1] transition-all text-[14px] text-gray-700 placeholder-gray-400" placeholder="Last Name" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#4A4A4A] mb-1.5">Mobile*</label>
                    <input type="tel" className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A045A1] focus:border-[#A045A1] transition-all text-[14px] text-gray-700 placeholder-gray-400" placeholder="Mobile Number" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#4A4A4A] mb-1.5">Email*</label>
                    <input type="email" className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#A045A1] focus:border-[#A045A1] transition-all text-[14px] text-gray-700 placeholder-gray-400" placeholder="Email Address" />
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#4A4A4A] mb-1.5">State/UT*</label>
                    <div className="relative">
                      <div 
                        onClick={() => { setIsStateOpen(!isStateOpen); setIsCityOpen(false); }}
                        className={`w-full px-3 py-2.5 bg-white border ${isStateOpen ? 'border-[#8C52FF] ring-1 ring-[#8C52FF]' : 'border-gray-300'} rounded-md cursor-pointer flex justify-between items-center transition-all`}
                      >
                        <span className={`text-[14px] ${selectedState ? 'text-gray-700' : 'text-gray-400'}`}>
                          {selectedState || 'Select State'}
                        </span>
                        <ChevronDown size={18} className={`text-black transition-transform duration-300 ${isStateOpen ? 'rotate-180' : ''}`} />
                      </div>
                      
                      <AnimatePresence>
                        {isStateOpen && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsStateOpen(false)}></div>
                            <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-100 rounded-md shadow-[0_-10px_40px_rgba(0,0,0,0.12)] z-20 overflow-hidden"
                            >
                              {[
                                {label: 'Maharashtra', val: 'Maharashtra'}, 
                                {label: 'Karnataka', val: 'Karnataka'}, 
                                {label: 'Delhi', val: 'Delhi'}
                              ].map(state => (
                                <div 
                                  key={state.val}
                                  onClick={() => { setSelectedState(state.val); setIsStateOpen(false); }}
                                  className="px-3 py-2.5 text-[14px] text-gray-700 hover:bg-[#F5F0FF] hover:text-[#5B2D91] font-medium cursor-pointer transition-colors"
                                >
                                  {state.label}
                                </div>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] text-[#4A4A4A] mb-1.5">City*</label>
                    <div className="relative">
                      <div 
                        onClick={() => { setIsCityOpen(!isCityOpen); setIsStateOpen(false); }}
                        className={`w-full px-3 py-2.5 bg-white border ${isCityOpen ? 'border-[#8C52FF] ring-1 ring-[#8C52FF]' : 'border-gray-300'} rounded-md cursor-pointer flex justify-between items-center transition-all`}
                      >
                        <span className={`text-[14px] ${selectedCity ? 'text-gray-700' : 'text-gray-400'}`}>
                          {selectedCity || 'Select City'}
                        </span>
                        <ChevronDown size={18} className={`text-black transition-transform duration-300 ${isCityOpen ? 'rotate-180' : ''}`} />
                      </div>
                      
                      <AnimatePresence>
                        {isCityOpen && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsCityOpen(false)}></div>
                            <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-100 rounded-md shadow-[0_-10px_40px_rgba(0,0,0,0.12)] z-20 overflow-hidden"
                            >
                              {[
                                {label: 'Mumbai', val: 'Mumbai'}, 
                                {label: 'Bengaluru', val: 'Bengaluru'}, 
                                {label: 'New Delhi', val: 'New Delhi'}
                              ].map(city => (
                                <div 
                                  key={city.val}
                                  onClick={() => { setSelectedCity(city.val); setIsCityOpen(false); }}
                                  className="px-3 py-2.5 text-[14px] text-gray-700 hover:bg-[#F5F0FF] hover:text-[#5B2D91] font-medium cursor-pointer transition-colors"
                                >
                                  {city.label}
                                </div>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 bg-[#181818] hover:bg-[#3a3a3a] text-white font-bebas rounded-md shadow-sm transition-colors flex items-center justify-center mt-auto text-[22px] tracking-[0.1em] uppercase">
                  SUBMIT
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
