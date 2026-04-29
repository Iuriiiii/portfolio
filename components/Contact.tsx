'use client';

import Script from 'next/script';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-opencode-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-base font-bold text-opencode-light uppercase tracking-wider mb-12">
          Contact
        </h2>
        
        <div className="max-w-2xl mb-12">
          <h3 className="text-2xl md:text-[38px] font-bold text-opencode-light mb-6 leading-[1.5]">
            Let&apos;s Build Something Together
          </h3>
          <p className="text-base font-normal text-opencode-gray leading-[1.5]">
            Ready to start a new project or just want to say hi? Schedule a 30-minute discovery call with me using the calendar below.
          </p>
        </div>

        <div className="bg-opencode-surface border border-opencode-outline rounded-opencode overflow-hidden shadow-2xl">
          <div className="bg-opencode-dark px-4 py-2 border-b border-opencode-border flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-danger-red"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-warning-orange"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-success-green"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-opencode-gray">calendly.widget</span>
          </div>
          <div className="p-0">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/alexandercasasnqn/30min" 
              style={{ minWidth: '320px', height: '700px' }}
            />
            <Script 
              type="text/javascript" 
              src="https://assets.calendly.com/assets/external/widget.js" 
              strategy="afterInteractive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
