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
    <section id="projects" className="py-5 px-5 text-center">
      <h2>Projects</h2>
      <div className="flex justify-center gap-5 flex-wrap">
        {projects.map((project, index) => (
          <div key={index} className="w-[300px] p-5 border border-[#ddd] rounded-[10px] text-left text-[#333]">
            <h3 className="mb-[10px]">{project.title}</h3>
            <p>{project.description}</p>
            <Link href={project.link} className="inline-block mt-[10px]">
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

