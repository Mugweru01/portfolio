
export default function Portfolio() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of project one.",
      image: "/images/project1.jpg",
      demoLink: "#",
      repoLink: "#"
    },
    {
      title: "Project Two",
      description: "A brief description of project two.",
      image: "/images/project2.jpg",
      demoLink: "#",
      repoLink: "#"
    }
    // Add more projects as needed
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="border rounded overflow-hidden shadow hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="space-x-2">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}