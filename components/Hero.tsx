'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';

const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState(text);

  const scramble = useCallback((targetText: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((_prev) =>
        targetText
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            if (char === ' ' || char === '-') return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = scramble(text);
    return cleanup;
  }, [text, scramble]);

  return <span className="inline-block min-w-[12ch]">{displayText}</span>;
};

const words = [
  'Scalable',
  'Earnable',
  'Robust',
  'Secure',
  'High-performance',
  'Resilient',
  'Elastic',
];

const steps = [
  {
    label: 'Contact',
    icon: (active: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-colors duration-500 ${active ? 'text-accent-blue' : 'text-opencode-gray'}`}
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Communicate',
    icon: (active: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-colors duration-500 ${active ? 'text-accent-blue' : 'text-opencode-gray'}`}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: 'Build',
    icon: (active: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-500 ${active ? 'text-accent-blue scale-110' : 'text-opencode-gray'}`}
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: 'Win',
    icon: (active: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-500 ${active ? 'text-accent-blue scale-110' : 'text-opencode-gray'}`}
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) return;

    const totalDuration = 6000; // 6 seconds total for the full 100% bar
    const intervalTime = 30;
    const increment = (intervalTime / totalDuration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [progress >= 100]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // Separate effect to handle step changes based on progress
  useEffect(() => {
    // 0-33.33% -> Step 0, 33.33-66.66% -> Step 1, 66.66-99.9% -> Step 2, >99.9% -> Step 3
    // Using 33.34 to ensure clean divisions
    let newStepIndex = 0;
    if (progress >= 66.66) {
      newStepIndex = 2;
    } else if (progress >= 33.33) {
      newStepIndex = 1;
    }
    
    // Step 3 is special (the "Win" state), it shows briefly at the very end or 
    // we can treat it as the final phase. 
    // If we want 4 equal-ish states, we divide by 25. 
    // If you want exactly those 3 transition points:
    if (progress >= 95) { // Threshold to show the final "Win" state before reset
      newStepIndex = 3;
    }
    
    setStepIndex(newStepIndex);
  }, [progress]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-opencode-dark overflow-hidden">
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-4xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side: Code Card (Terminal Style) */}
          <div className="order-2 lg:order-1">
            <div className="bg-opencode-surface border border-opencode-outline rounded-opencode overflow-hidden shadow-2xl">
              <div className="bg-opencode-dark px-4 py-2 border-b border-opencode-border flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-danger-red"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-warning-orange"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-success-green"></div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-opencode-gray">engineer.ts</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <pre>
                  <code>
                    <span className="text-accent-blue">const</span>{' '}
                    <span className="text-opencode-light">engineer</span> = {'{'}{'\n'}
                    {'  '}name: <span className="text-code-string">&quot;Alexander&quot;</span>,{'\n'}
                    {'  '}lastName: <span className="text-code-string">&quot;Casas&quot;</span>,{'\n'}
                    {'  '}hardWorker: <span className="text-warning-orange">true</span>,{'\n'}
                    {'  '}quickLearner: <span className="text-warning-orange">true</span>,{'\n'}
                    {'  '}status: <span className="text-code-string">&quot;waiting_for_your_message&quot;</span>{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Right side: Title and Text */}
          <div className="order-1 lg:order-2 text-center lg:text-right">
            <h1 className="text-3xl md:text-[38px] font-bold leading-[1.5] text-opencode-light uppercase tracking-tight">
              Building<br />
              <span className="text-accent-blue">
                <ScrambleText text={words[index]} />
              </span><br />
              Projects
            </h1>
            <p className="mt-6 text-base font-normal text-opencode-gray leading-[1.5] max-w-md ml-auto">
              I transform your vision into a real product with clean code and pixel-perfect design. Let&apos;s create together!
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-opencode-light text-opencode-dark px-6 py-2 rounded-opencode font-medium text-base hover:bg-opencode-gray transition-colors uppercase tracking-wider"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Section at the Bottom */}
      <div className="w-full max-w-lg mx-auto px-6 mb-12">
        <div className="flex justify-between items-end mb-4 px-2">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center">
              {step.icon(i === stepIndex)}
            </div>
          ))}
        </div>
        
        {/* Loading Line Container */}
        <div className="h-[2px] w-full bg-opencode-light/10 relative">
          {/* Continuous Single Progress Bar */}
          <div 
            className="absolute top-0 left-0 h-full bg-opencode-light transition-all duration-30 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic Text */}
        <div className="mt-4 text-center h-6">
          <span className="text-opencode-light font-mono text-sm uppercase tracking-[0.2em]">
            <ScrambleText text={steps[stepIndex].label} />
          </span>
        </div>
      </div>
      
      {/* Decorative vertical lines / grid hint */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-px bg-opencode-light absolute left-1/4"></div>
        <div className="h-full w-px bg-opencode-light absolute left-1/2"></div>
        <div className="h-full w-px bg-opencode-light absolute left-3/4"></div>
      </div>
    </section>
  );
}
