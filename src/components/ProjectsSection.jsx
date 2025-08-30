import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    description: "Full Stack E-commerce Website.",
    image: "/projects/ecom.png",
    tags: ["React", "TailwindCSS", "NodeJs", "ExpressJs","MongooDB"],
    demoUrl: "https://ecommerce-frontend-rho-seven.vercel.app",
    githubUrl: "https://github.com/Souhail-Boughrioul/ecommerce_website",
  },
  {
    id: 2,
    title: "Booking Doctor Project",
    description:
      "Building A Booking Doctor Project.",
    image: "/projects/booking_doc.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://booking-doctor-eldg.vercel.app",
    githubUrl: "https://github.com/Souhail-Boughrioul/booking_doctor",
  },
//   {
//     id: 3,
//     title: "E-commerce Platform",
//     description:
//       "Full-featured e-commerce platform with user authentication and payment processing.",
//     image: "/projects/project3.png",
//     tags: ["React", "Node.js", "Stripe"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
];


function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className=" h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform 
                                duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 ">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-color duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a target="_blank" href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-color duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-12 ">
                <a className="cosmic-button w-fit flex items-center pointer-events-auto mx-auto gap-2" href="https://github.com/Souhail-Boughrioul" target="_blank">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>

        </div>
    </section>
  )
}

export default ProjectsSection