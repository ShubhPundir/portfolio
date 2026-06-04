'use client'

const services = [
  {
    title: "AI Agent Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: "Custom autonomous agents and intelligent search engines that streamline operations and eliminate repetitive human workflows.",
    valueProp: "Automate customer support, speed up document analysis, and construct intelligent RAG systems.",
    bullets: [
      "Multi-agent orchestration (LangGraph, CrewAI)",
      "Hybrid search RAG pipelines with custom semantic rerankers",
      "Local LLM deployments (Llama, Mistral) for strict privacy compliance",
      "Prompt engineering and model fine-tuning for structured data generation"
    ],
    tech: ["LangChain", "LangGraph", "Qdrant", "FastAPI", "OpenAI / Claude"]
  },
  {
    title: "Data Engineering & Pipelines",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    description: "Robust data collection engines, automated web scrapers, and ETL pipelines designed to turn raw web noise into structured business databases.",
    valueProp: "Harvest data at scale, synchronize multi-source feeds, and automate business intelligence.",
    bullets: [
      "Distributed web scrapers with automatic proxy rotation & Captcha bypass",
      "Airflow or Celery scheduled cron pipelines for continuous data sync",
      "Database design, migrations, and performance indexing (PostgreSQL, MongoDB)",
      "Real-time streaming and event-driven pipelines (Kafka, Redis)"
    ],
    tech: ["Python", "Airflow", "PostgreSQL", "Celery", "Scrapy", "BeautifulSoup"]
  },
  {
    title: "Scalable Backend Systems",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    description: "Secure, low-latency API architectures designed to support web and mobile products without scaling bottlenecks.",
    valueProp: "Establish rock-solid backend infrastructure with high availability and comprehensive telemetry.",
    bullets: [
      "RESTful, GraphQL, and gRPC APIs designed for long-term frontend consumption",
      "Role-based authentication, JWT session handling, and rate limiting",
      "System sharding, database replication, and memory caching (Redis, B+Trees)",
      "Microservice migration, Dockerization, and structured health-check telemetry"
    ],
    tech: ["Java (Spring Boot)", "Node.js (Express)", "FastAPI", "Docker", "Redis"]
  },
  {
    title: "Technical Advisory & Consulting",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "Guidance on technology selection, database schema mapping, system scaling paths, and assessing AI project feasibility.",
    valueProp: "Verify project scope and prevent costly re-architectures before writing code.",
    bullets: [
      "AI feasibility analysis: checking cost-per-call, prompt safety, and accuracy trade-offs",
      "Database audit: identifying indexing bottlenecks and database queries slowing down pages",
      "Architecture mapping: designing microservices schemas and data flows for new products",
      "Cloud budget optimization: finding and shutting down redundant compute/database cycles"
    ],
    tech: ["System Design", "Feasibility Audits", "Query Tuning", "Cost Optimization"]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 px-5 bg-gradient-to-b from-[#f8f9fa] to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#007bff] uppercase bg-[#007bff]/10 px-4 py-1.5 rounded-full">
            Specializations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 tracking-tight">
            How I Can Help Your Product Grow
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I design and implement custom, reliable backend and AI solutions that automate workflows, structure data, and fuel product growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Highlight element */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#007bff] via-[#0056b3] to-[#f0a500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007bff]/10 to-[#0056b3]/5 text-[#007bff] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#007bff] transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed font-medium mb-4">
                  {service.description}
                </p>

                {/* Solutions Statement */}
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl mb-6">
                  <p className="text-sm font-semibold text-gray-800">
                    <span className="text-[#007bff]">Goal:</span> {service.valueProp}
                  </p>
                </div>

                {/* Capabilities list */}
                <ul className="space-y-3 mb-8">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2.5 mt-0.5 flex-shrink-0">
                        <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies footer */}
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <span className="text-xs font-semibold text-gray-400 uppercase block mb-3 tracking-wider">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200/50 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
