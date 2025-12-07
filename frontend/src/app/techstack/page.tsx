import Navbar from '@/components/Navbar'
import TechStackCategory from '@/components/techstack/TechStackCategory'

export default function TechStackPage() {
  const techStackData = [
    {
      title: "Languages",
      icon: "💻",
      items: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      items: [
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "NestJS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nestjs.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ]
    },
    {
      title: "Cloud",
      icon: "☁️",
      items: [
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      items: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" },
        { name: "Cassandra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original-wordmark.svg" }
      ]
    },
    {
      title: "AI Technologies",
      icon: "🤖",
      items: [
        { name: "RAG", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "ML/DL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Langchain", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Chatbots", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
        title: "Tools & Softwares",
        icon: "🛠️",
        items: [
            { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Tableau", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tableau.svg" },
            { name: "PowerBI", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg" },
            { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "ELK Stack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg"}
        ]
    }
  ]

  return (
    <>
      <Navbar />
      <section className="min-h-screen py-20 px-5 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#333] mb-4">Tech Stack</h1>
            <p className="text-[#666] text-xl max-w-2xl mx-auto">
              Technologies and tools I have worked with throughout my career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStackData.map((category, index) => (
              <TechStackCategory
                key={index}
                title={category.title}
                icon={category.icon}
                items={category.items}
                variant={index === 0 ? 'highlighted' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

