import Timeline from '../../components/ui/Timeline'

const WorkExperience = () => {
  const experiences = [
    {
      title: "Freelancer",
      company: "Self Employed",
      duration: "Jan 2022 - Present",
      icon: "💼",
      description: (
        <ul className="list-none space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Scraped/Crawled data for multiple clients producing tangible and meaningful <strong>business insights</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Developed <strong>ETL data pipelines</strong> for text preprocessing for <strong>Big Data</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Developed <strong>Real Time Dashboards</strong> onto <strong>Full-Stack applications</strong> from <strong>IOT Sensors</strong>, <strong>Distributed Management Services</strong>, etc.</span>
          </li>
        </ul>
      )
    },
    {
      title: "Machine Learning Engineer",
      company: "WDS: Wiz Digital Services",
      duration: "Jan 2024 - May 2024",
      icon: "🤖",
      description: (
        <ul className="list-none space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Implemented <strong>NLU and NLP</strong> techniques on multiple clientele dataset to encrypt and safeguard sensitive information with an accuracy of <strong>92%</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Collaborated with cross functional teams to integrate <strong>privacy-preserving techniques</strong> seamlessly into legacy and existing systems.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Deployed end to end <strong>chatbot services</strong> and fine tuned open source <strong>LLMs</strong> to drive customer satisfaction close to <strong>75%</strong>.</span>
          </li>
        </ul>
      )
    },
    {
      title: "Junior Java Developer Intern",
      company: "TEN: The Entrepreneurship Network",
      duration: "Sep 2021 - Nov 2021",
      icon: "☕",
      description: (
        <ul className="list-none space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Analyzed requirements and planned <strong>SRS</strong> for multi-media organizations.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Implemented <strong>REST APIs</strong> and optimized database queries for payment gateways via <strong>RazorPay</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Worked on performance improvements and bug fixes resolving to a <strong>20% improvement</strong> in backend lags.</span>
          </li>
        </ul>
      )
    }
  ]

  return (
    <section id="experience" className="py-16 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-3">Work Experience</h2>
          <p className="text-[#666] text-lg">Professional journey and key achievements</p>
        </div>
        
        <div className="relative">
          <Timeline items={experiences} />
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

