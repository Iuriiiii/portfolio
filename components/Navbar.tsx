import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'My Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-opencode-dark border-b border-opencode-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-opencode-light uppercase">
              Alexander Casas
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-opencode-light hover:text-accent-blue underline decoration-1 underline-offset-4 px-2 py-1 text-base font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a
              href="/alexander-casas-resume.pdf"
              download
              className="bg-opencode-dark border border-opencode-outline text-opencode-light px-5 py-1 rounded-opencode text-base font-medium hover:bg-opencode-surface transition-colors leading-loose flex items-center gap-2"
            >
              <span className="material-symbols-outlined !text-[20px]">download</span>
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
