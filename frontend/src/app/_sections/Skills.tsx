import SectionCard from '../../components/ui/SectionCard'

const Skills = () => {
  const skillsData = [
    {
      title: "Languages",
      icon: "💻",
      items: ["Java", "Python", "R", "C/C++", "JavaScript/TypeScript", "HTML/CSS", "SQL/NOSQL"]
    },
    {
      title: "Technical Skills",
      icon: "🔧",
      items: [
        "Data Science",
        "Data Analytics/Wrangling",
        "Business Intelligence",
        "Web Scraping/ Data Sourcing",
        "Machine Learning/Deep Learning",
        "Natural Language Processing",
        "Recommendation Engines",
        "LLM Tuning",
        "RAG over document"
      ]
    },
    {
      title: "Frameworks",
      icon: "⚙️",
      items: [
        "Springboot",
        "Django & FastAPI",
        "Nest.js & Express.js",
        "MS SQL/ PostgreSQL",
        "MongoDB/Cassandra",
        "Tensorflow & Pytorch",
        "OpenCV & EasyOCR",
        "LangChain/LangGraph",
        "QdrantDB/Pinecone",
        "AWS/ Azure",
        "Elasticsearch/ OpenSearch",
        "Apache Hadoop Ecosystem"
      ]
    },
    {
      title: "Tools",
      icon: "🛠️",
      items: ["Git & GitHub", "PowerBI", "Tableau", "ELK stack", "MS Excel", "Postman", "Figma"]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      items: ["Problem-Solving", "Teamwork & Collaboration", "Adaptability", "Communication", "Straight forward"]
    }
  ]

  return (
    <section id="skills" className="py-16 px-5 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-3">Skills</h2>
          <p className="text-[#666] text-lg">Technologies and expertise I work with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SectionCard
              key={index}
              title={skill.title}
              icon={<span className="text-xl">{skill.icon}</span>}
              variant={index === 0 ? 'highlighted' : 'default'}
            >
              <div className="flex flex-wrap gap-2 mt-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#007bff]/10 to-[#0056b3]/10 text-sm text-[#007bff] font-medium border border-[#007bff]/20 hover:from-[#007bff]/20 hover:to-[#0056b3]/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

