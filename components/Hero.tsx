'use client';

import { useState, useEffect, useCallback } from 'react';

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

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-opencode-dark overflow-hidden">
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
                  {'  '}name: <span className="text-success-green">&quot;Alexander&quot;</span>,{'\n'}
                  {'  '}lastName: <span className="text-success-green">&quot;Casas&quot;</span>,{'\n'}
                  {'  '}hardWorker: <span className="text-warning-orange">true</span>,{'\n'}
                  {'  '}quickLearner: <span className="text-warning-orange">true</span>,{'\n'}
                  {'  '}status: <span className="text-success-green">&quot;Waiting for your message&quot;</span>{'\n'}
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
      
      {/* Decorative vertical lines / grid hint */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-px bg-opencode-light absolute left-1/4"></div>
        <div className="h-full w-px bg-opencode-light absolute left-1/2"></div>
        <div className="h-full w-px bg-opencode-light absolute left-3/4"></div>
      </div>
    </section>
  );
}
