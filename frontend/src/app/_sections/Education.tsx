import SectionCard from '../../components/ui/SectionCard'

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology in Computer Science",
      subtitle: "The Northcap University",
      period: "2022 - 2026",
      achievement: "CGPA: 8.98",
      icon: "🎓"
    },
    {
      title: "ISC: Grade 12th",
      subtitle: "Sri Sri Academy",
      period: "2020 - 2022",
      achievement: "Percentage: 90.0%",
      icon: "📚"
    },
    {
      title: "ICSE: Grade 10th",
      subtitle: "Sri Sri Academy",
      period: "2020",
      achievement: "Percentage: 94.7%",
      icon: "📖"
    }
  ]

  return (
    <section id="education" className="py-16 px-5 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-3">Education</h2>
          <p className="text-[#666] text-lg">Academic journey and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <SectionCard
              key={index}
              title={edu.title}
              subtitle={`${edu.subtitle} • ${edu.period}`}
              icon={<span className="text-xl">{edu.icon}</span>}
              variant={index === 0 ? 'highlighted' : 'default'}
            >
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#007bff]/10 to-[#0056b3]/10 rounded-lg">
                  <span className="text-[#007bff] font-semibold text-sm">{edu.achievement}</span>
                </div>
              </div>
            </SectionCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

