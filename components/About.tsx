'use client';

export default function About() {
  return (
    <section id="about" className="py-24 bg-opencode-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-base font-bold text-opencode-light uppercase tracking-wider mb-12">
          About
        </h2>
        
        <div className="space-y-16">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-[38px] font-bold text-opencode-light mb-6 leading-[1.5]">
              Crafting Scalable Solutions with Precision & Security
            </h3>
            <p className="text-base font-normal text-opencode-gray leading-[1.5]">
              I&apos;m a seasoned Full-Stack Tech Lead with over 17 years of experience in the software industry. 
              From a self-taught childhood programmer to leading development teams, I specialize in building 
              high-performance, secure, and scalable applications across diverse business domains, 
              including fintech and process automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
            <div>
              <h4 className="text-base font-bold text-opencode-light uppercase tracking-tight mb-4">
                Frontend Development
              </h4>
              <p className="text-base font-normal text-opencode-gray leading-[1.5]">
                React, Next.js, React Native, TypeScript, Tailwind CSS
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-bold text-opencode-light uppercase tracking-tight mb-4">
                Backend Development
              </h4>
              <p className="text-base font-normal text-opencode-gray leading-[1.5]">
                Node.js, TypeScript, NestJS, Laravel, Python
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-opencode-light uppercase tracking-tight mb-4">
                Database & Storage
              </h4>
              <p className="text-base font-normal text-opencode-gray leading-[1.5]">
                PostgreSQL, MongoDB, MySQL, Redis, Firebase
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-opencode-light uppercase tracking-tight mb-4">
                DevOps & Security
              </h4>
              <p className="text-base font-normal text-opencode-gray leading-[1.5]">
                AWS, Vercel, Docker, CI/CD, PCI DSS & ISO 27001 Compliance
              </p>
            </div>

            <div>
              <h4 className="text-base font-bold text-opencode-light uppercase tracking-tight mb-4">
                System Development
              </h4>
              <p className="text-base font-normal text-opencode-gray leading-[1.5]">
                C, FreeBasic, FASM (Intel x86/x64), Win32 API, Automation, Messaging, Sockets, Memory Management
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-[38px] font-bold text-opencode-light mb-6 leading-[1.5]">
              Building healthy relationships and environments
            </h3>
            <p className="text-base font-normal text-opencode-gray leading-[1.5] mb-4">
              Throughout my tenure as a leader of multidisciplinary teams, I have understood and learned that human talent and camaraderie are essential for the healthy and efficient growth of a business and its projects.
            </p>
            <p className="text-base font-normal text-opencode-gray leading-[1.5] mb-4">
              Interacting with all team members regularly, kindly, and energetically increases communication, reduces the fear of asking questions, and improves the overall quality of the team&apos;s work.
            </p>
            <p className="text-base font-normal text-opencode-gray leading-[1.5]">
              That is why, whenever I lead a team, I make it a habit to communicate my full availability, ensuring they know that questions are not a nuisance but a stepping stone to competence and independence, and that mistakes are not met with punishment or reproach, but are accepted as a necessary path toward personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
