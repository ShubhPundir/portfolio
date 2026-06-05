'use client'

import Link from 'next/link'

const caseStudies = [
  {
    title: "Production RAG Infrastructure for Enterprise Document Intelligence",
    client: "Alice Ann Williams",
    location: "Denmark 🇩🇰",
    metrics: [
      { value: "85%", label: "Latency Reduction" },
      { value: "92%", label: "Search Accuracy" },
      { value: "$12k", label: "Monthly Notional Savings" }
    ],
    problem: "The client had a slow internal search utility looking up thousands of complex engineering documents, guidelines, principles, etc. The legacy system suffered from high retrieval latency (averaging 45s) and frequent LLM hallucinations at scale.",
    solution: "Architected a low-latency hybrid search retrieval-augmented generation (RAG) pipeline. Designed custom indexing protocols using FastAPI, Open Search Instance, and custom semantic reranking models to filter out noise. Engineered a stateful response engine with strict guardrails to prevent hallucinations.",
    outcome: "Reduced search and retrieval latency down to 3 seconds. Scaled seamlessly to 1,200+ monthly active users (MAU) while cutting manual overhead, saving $12,000/month in operations cost.",
    tech: ["FastAPI", "LangChain", "OpenSearch", "ReactJS"]
  },
  {
    title: "Automated Customer Operations (CRM) Engine",
    client: "Martin L. Sørensen",
    location: "Denmark 🇩🇰",
    metrics: [
      { value: "68%", label: "Support Automated" },
      { value: "88%", label: "User Retention" },
      { value: "99.5%", label: "Call Uptime" }
    ],
    problem: "The client faced scaling constraints due to overwhelming support volume, resulting in delayed ticketing, lost orders, and customer churn. Manual CRM entries consumed several hours of staff time daily.",
    solution: "Built a custom, CRM-integrated conversational AI engine. Developed a robust dialog state machine using Python, RASA NLU, and FastAPI to handle ordering inquiries and call routing. Integrated real-time webhooks with the client's CRM to auto-update transaction records and support transcripts.",
    outcome: "Successfully deflected and automated 68% of inbound support inquiries. Boosted user retention to 88% while freeing up the core team from repetitive administration.",
    tech: ["Python", "RASA", "FastAPI", "PostgreSQL", "CRM Webhooks"]
  }
]

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 px-5 bg-[#f8f9fa] border-t border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#007bff] uppercase bg-[#007bff]/10 px-4 py-1.5 rounded-full">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 tracking-tight">
            Real Solutions. Measured Outcomes.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore how backend and AI engineering solved concrete operational bottlenecks and delivered clear ROI for startups.
          </p>
        </div>

        {/* Case Studies Container */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row gap-8 lg:gap-12"
            >
              
              {/* Left Column: Client, Title, Metrics */}
              <div className="w-full lg:w-2/5 flex flex-col justify-between">
                <div>
                  {/* Client Info */}
                  <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-[#0056b3]">
                    <span>{study.client}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 font-medium">{study.location}</span>
                    <span className="text-green-500 bg-green-50 text-[10px] px-2 py-0.5 rounded border border-green-200 flex items-center gap-1 ml-auto">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Client
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-950 leading-tight mb-6">
                    {study.title}
                  </h3>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  {study.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center md:text-left">
                      <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                        {metric.value}
                      </p>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Problem, Solution, Outcome details */}
              <div className="w-full lg:w-3/5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-150 pt-8 lg:pt-0 lg:pl-12">
                <div className="space-y-6">
                  
                  {/* Problem */}
                  <div>
                    <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      The Problem
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-xs font-bold text-[#007bff] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#007bff] rounded-full"></span>
                      The Solution
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      The Outcome
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>

                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-6 mt-8">
                  {study.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-bold text-gray-500 bg-gray-50 border border-gray-200/60 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/freelancing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 text-base"
          >
            <span>View All 12+ Freelance Deployments</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CaseStudies
