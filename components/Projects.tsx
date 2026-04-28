'use client';

const projects = [
  {
    name: 'MCPBay',
    description: 'Trusted Context Catalogs for AI-Driven Teams. Excellence platform for context management and distribution. Deliver public, 100% auditable contexts for local and private use.',
    link: 'https://mcpbay.io/',
    tags: ['AI', 'MCP', 'Product']
  },
  {
    name: 'easy-mcp-server',
    description: 'A stable, simple and lightweight server for Model Context Protocol (MCP) in TypeScript/Deno. Provides a framework for building MCP servers that enable seamless communication between AI applications and various data sources.',
    link: 'https://github.com/mcpbay/easy-mcp-server',
    tags: ['TypeScript', 'Deno', 'MCP']
  },
  {
    name: 'contexts-manager',
    description: 'Core library for managing and preparing MCP contexts, providing tools for execution, resource management, and AI SDK integration (Vercel AI SDK).',
    link: 'https://github.com/mcpbay/contexts-manager',
    tags: ['TypeScript', 'AI SDK', 'Contexts']
  },
  {
    name: 'TinyML',
    description: 'A lightweight, concise markup language designed to be compiled into HTML. It provides a shorthand syntax for writing HTML structures, reducing verbosity.',
    link: 'https://github.com/Iuriiiii/TinyML',
    tags: ['Compiler', 'Markup', 'TypeScript']
  },
  {
    name: 'TinyML-core',
    description: 'TinyML code parser for NodeJS. Fast and lightweight module to help parse TinyML source code into a structured pattern similar to HTML.',
    link: 'https://github.com/Iuriiiii/TinyML-core',
    tags: ['Node.js', 'Parser', 'Deno']
  },
  {
    name: 'FBImageSearch',
    description: 'A smart ImageSearch engine written on FreeBasic. Designed for efficient image recognition and search operations.',
    link: 'https://github.com/Iuriiiii/FBImageSearch',
    tags: ['FreeBasic', 'ImageSearch', 'Computer Vision']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-opencode-dark">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-base font-bold text-opencode-light uppercase tracking-wider mb-12">
          Projects
        </h2>
        
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.name} className="group">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-opencode-light">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent-blue transition-colors underline decoration-1 underline-offset-8"
                  >
                    {project.name}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[12px] font-medium text-opencode-gray border border-opencode-outline px-2 py-0.5 rounded-opencode uppercase tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-base font-normal text-opencode-gray leading-[1.5] max-w-2xl">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
