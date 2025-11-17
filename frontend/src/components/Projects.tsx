import Link from 'next/link'

interface Project {
  title: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    title: "MediRecord",
    description:
      "A one stop spot for structured medical record system. AI powered prescription queries and results for both patients and doctors.",
    link: "/allprojects",
  },
  {
    title: "FIND-DB",
    description:
      "A java based Wide Column Database system made from scratch. Efficient search with B+Trees, Sharding and Replication.",
    link: "/allprojects",
  },
  {
    title: "Waveform based Music Recommendation System",
    description:
      "Managaing Big Data for both musics and users. Waveform and linguistical analysis hybridized with user preference for personalized recommendations",
    link: "/allprojects",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-5 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-3">Featured Projects</h2>
          <p className="text-[#666] text-lg">Explore some of my recent work and innovations</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#007bff]/20 hover:-translate-y-1 flex flex-col"
            >
              {/* Card Header with Gradient Accent */}
              <div className="h-1 bg-gradient-to-r from-[#007bff] via-[#0056b3] to-[#007bff]"></div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Project Icon/Emoji Placeholder */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#007bff] to-[#0056b3] flex items-center justify-center text-white text-xl font-bold shadow-md">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-[#333] mb-3 group-hover:text-[#007bff] transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-[#666] leading-relaxed mb-6 flex-grow text-sm">
                  {project.description}
                </p>

                {/* View More Link */}
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#007bff] font-semibold hover:text-[#0056b3] transition-all duration-200 group/link"
                >
                  <span>View More</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-10">
          <Link
            href="/allprojects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#007bff] text-white font-semibold rounded-lg hover:bg-[#0056b3] transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          >
            <span>View All Projects</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects

