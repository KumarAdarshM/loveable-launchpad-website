
import { useState } from 'react';
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Financial Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization and reporting capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "E-Commerce Store",
    category: "Online Shopping",
    description: "A fully responsive e-commerce platform with integrated payment processing and inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 3,
    title: "Health & Fitness App",
    category: "Mobile Web App",
    description: "A cross-platform fitness application allowing users to track workouts, nutrition, and personal progress.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "GraphQL"],
  }
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-agency-gray">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-agency-blue">Our Portfolio</h2>
          <p>Explore some of our recent work and successful projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300",
                "hover:shadow-xl opacity-0"
              )}
              style={{ 
                animationName: 'fade-in', 
                animationDuration: '0.5s', 
                animationDelay: `${index * 0.15 + 0.2}s`, 
                animationFillMode: 'forwards' 
              }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div 
                className="aspect-[4/3] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <div className={cn(
                  "absolute inset-0 bg-agency-blue/80 flex flex-col justify-end p-6 text-white",
                  "transition-opacity duration-300",
                  activeProject === project.id || activeProject === null ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                )}>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 bg-white/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-agency-blue">{project.title}</h3>
                <p className="text-sm text-agency-darkGray">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
