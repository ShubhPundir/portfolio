import Timeline from '../../components/ui/Timeline'
import { Experience } from '@/components/projects/types'

const WorkExperience = () => {
  const experiences: Experience[] = [
    {
      title: "Software Engineer Intern",
      company: "MYTL Technologies",
      duration: "Aug 2025 - Present",
      icon: "🚀",
      link: "http://bodhianalytics.in/",
      description: (
        <ul className="list-none space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Worked on the product of BodhiAnalytics and DIAL.ai for improving the call reliability and performance by refactoring the <strong>SIP communication stack</strong> into a production-grade microservice ecosystem using Drachtio and FreeSWITCH, improving call reliability for users.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Enhanced internal <strong>Analytics Engine</strong> by fine-tuning a <strong>BERT-based Intent Classifier</strong>, reducing redundant RAG calls by <strong>40%</strong> and improving intent detection accuracy for inbound knowledge base screening.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Optimized real-time call performance by reducing <strong>SIP latency by 30%</strong> through debugging and streamlining Redis Streams and WebSocket event handling for OpenAI&apos;s Realtime API integration.</span>
          </li>
        </ul>
      )
    },
    {
      title: "Data Engineering Intern",
      company: "VTPL: Vareli Tecsoft Pvt. Ltd.",
      duration: "Jun 2025 - Jul 2025",
      icon: "📊",
      link: "https://www.varelitecsoft.com/",
      description: (
        <ul className="list-none space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Analyzed service call transaction logs and developed a comprehensive dashboard using <strong>Tableau</strong>.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Translated client requirements into actionable specifications, leading to the successful development of multiple concept documents.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#007bff] mt-1">▸</span>
            <span>Developed a <strong>Django-based asset management framework</strong>, integrating <strong>Win32 API</strong> for device registration and software patch management.</span>
          </li>
        </ul>
      )
    },
    {
      title: "Freelancer",
      company: "Self Employed",
      duration: "Jan 2022 - Present",
      icon: "💼",
      link: "https://shubhpundir.github.io/portfolio/",
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
      link: "https://www.wizdigital.ie/",
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
      link: "https://www.entrepreneurshipnetwork.net/",
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
    <section id="work-experience" className="py-16 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
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

