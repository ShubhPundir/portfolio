'use client'

import Navbar from '@/components/Navbar'
import Timeline, { type FreelanceProject } from '@/components/ui/Timeline'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import MultiSelectFilter from '@/components/ui/MultiSelectFilter'

const projects: FreelanceProject[] = [
  {
    id: 11,
    title: "Production RAG Infrastructure for Enterprise Document Intelligence",
    clientName: "Alice Ann",
    clientPrefix: "Alic",
    blurClientName: false,
    location: "Denmark",
    date: "February 2025",
    duration: "4 months",
    techStack: ["Langchain", "FastAPI", "QdrantDB", "ReactJS", "MongoDB"],
    description: "Architected a low-latency RAG pipeline for internal document intelligence. Solved the 'hallucination at scale' problem by implementing hybrid search and custom reranking schemas. Turned a slow search tool into a high-performance production engine.",
    impact: "Reduced document retrieval latency by 85% (45s to 3s). Scaled to 1,200+ MAU with 92% search accuracy, saving $12k/month in manual overhead.",
    highlights: ["1.2k+ MAU", "92% Accuracy", "$12k/mo Saved"],
    flag: "🇩🇰",
    countryCode: "dk"
  },
  {
    id: 10,
    title: "Automated Customer Operations (CRM) Engine",
    clientName: "Martin L. Sørensen",
    clientPrefix: "Mart",
    blurClientName: false,
    location: "Denmark",
    date: "December 2024",
    duration: "5 months",
    techStack: ["Python", "RASA", "PostgreSQL", "FastAPI"],
    description: "Eliminated manual support bottlenecks by building a deep CRM-integrated AI agent. Focused on reducing state-machine inefficiencies and ensuring 99.9% reliability in order processing calls.",
    impact: "Automated 68% of support volume. Achieved 88% user retention. Contributed to a leaner support team and faster response times.",
    highlights: ["88% Retention", "68% Automated"],
    flag: "🇩🇰",
    countryCode: "dk"
  },
  {
    id: 9,
    title: "Enterprise Conversational Infrastructure Migration",
    clientName: "Colin E. Duffy",
    clientPrefix: "Coli",
    blurClientName: false,
    location: "Denmark",
    date: "September 2024",
    duration: "2 months",
    techStack: ["RASA", "Cassandra", "BotPress", "NLU"],
    description: "Optimized NLP pipelines for a high-traffic support system. Successfully migrated messy legacy graph logic to a clean, production-ready RASA architecture designed for 10x scale.",
    impact: "45% reduction in compute costs. Dropped call center logs by 12% via improved intent classification (89% -> 96%). Saved 60+ engineer hours monthly.",
    highlights: ["45% Cost Reduction", "96% Intent Hit Rate", "60h/mo Saved"],
    flag: "🇩🇰",
    countryCode: "dk"
  },
  {
    id: 8,
    title: "E-commerce Sentiment Intelligence Pipeline",
    clientName: "Aisha Benali",
    clientPrefix: "Aish",
    blurClientName: false,
    location: "Morocco",
    date: "March 2024",
    duration: "2 months",
    techStack: ["Python", "Transformers", "BERT", "FastAPI", "React"],
    description: "Built a high-throughput sentiment analysis system for Shopify/Etsy stores. Focused on turning raw review noise into actionable product roadmaps for high-growth e-commerce brands.",
    impact: "Enabled real-time sentiment alerts, reducing response time by 70%. Enabling proactive issue resolution and boosting customer satisfaction metrics.",
    highlights: ["70% Faster Response", "50+ Brands"],
    flag: "🇲🇦",
    countryCode: "ma"
  },
  {
    id: 7,
    title: "Lean BI Infrastructure & CRM Data Engineering",
    clientName: "Mason Richards",
    clientPrefix: "Maso",
    blurClientName: false,
    location: "UK",
    date: "August 2023",
    duration: "1 months",
    techStack: ["Excel", "Python", "Pandas", "PowerBI"],
    description: "Re-engineered a bloated legacy BI system into a lean ETL pipeline. Solved the problem of fragmented data silos by creating a single source of truth for CRM metrics.",
    impact: "Automated 20+ hours of manual weekly reporting. Identified £1000 in churn risks through new predictive retention dashboards.",
    highlights: ["£1000 Churn Mitigated", "20h/wk Automated", "100% Data Integrity"],
    flag: "🇬🇧",
    countryCode: "gb"
  },
  {
    id: 6,
    title: "Multi-Factor NLP & Financial Hypothesis Validation Study",
    clientName: "Kaml",
    clientPrefix: "Kaml",
    blurClientName: true,
    location: "UK",
    date: "June 2023",
    duration: "2 months",
    techStack: ["Python", "BeautifulSoup", "yFinance", "Pandas", "NLTK"],
    description: "Architected a multi-outlet NLP extraction layer to validate complex market correlation hypotheses. Engineered resilient scrapers to capture sentiment and narratives across 15+ global news outlets, enabling data-driven factor analysis for a London finance study.",
    impact: "Successfully validated multiple market hypotheses correlating news sentiment with price action. Streamlined the factor analysis loop, reducing a 300+ hour manual research effort into a week of automated data crunching.",
    highlights: ["15+ Global News Outlets", "Hypothesis Validation", "Multi-Factor NLP"],
    flag: "🇬🇧",
    countryCode: "gb"
  },
  {
    id: 5,
    title: "Regional Sales Performance Analytics Cloud",
    clientName: "Ishaan",
    clientPrefix: "Ishaan",
    blurClientName: true,
    location: "India",
    date: "May 2023",
    duration: "4 months",
    techStack: ["Excel", "Python", "Pandas"],
    description: "Built a scalable analytics layer for regional sales data. Focused on reducing the time-to-insight for regional managers through automated data cleaning and visualization.",
    impact: "Reduction in regional reporting lag by 60%. Enabled data-driven territory expansion that resulted in 12% MoM revenue growth.",
    highlights: ["12% MoM Growth", "60% Faster Insights", "5 Regions"],
    flag: "🇮🇳",
    countryCode: "in"
  },
  {
    id: 4,
    title: "Transaction Log Analytics & Logstash Pipelines",
    clientName: "Francis O.",
    clientPrefix: "Fran",
    blurClientName: false,
    location: "UAE",
    date: "February 2023",
    duration: "4 months",
    techStack: ["Power BI", "Logstash", "Pandas", "Cassandra"],
    description: "Engineered high-volume Logstash pipelines to ingest ticket transaction data. Optimized data flow from raw logs to executive-ready BI dashboards.",
    impact: "99.9% data integrity across 1M+ monthly transactions. Reduced business intelligence turnaround from days to minutes.",
    highlights: ["1M+ Txn/mo", "99.9% Integrity", "Real-time BI"],
    flag: "🇦🇪",
    countryCode: "ae"
  },
  {
    id: 3,
    title: "Health Intelligence ETL & Monitoring Dashboards",
    clientName: "Amber P.",
    clientPrefix: "Ambe",
    blurClientName: false,
    location: "UK",
    date: "February 2023",
    duration: "5 months",
    techStack: ["Power BI", "Python (Pandas)", "Excel", "SQL"],
    description: "Designed and deployed health monitoring ETL pipelines. Focused on data precision and reliability for critical health analyst workflows.",
    impact: "Improved monthly reporting efficiency by 40%. Ensured 100% compliance in health trend tracking for UK-based health analysts.",
    highlights: ["40% Efficiency Gain", "100% Compliance", "Daily ETL"],
    flag: "🇬🇧",
    countryCode: "gb"
  },
  {
    id: 2,
    title: "Real Estate Market Intelligence Scraper",
    clientName: "Addi",
    clientPrefix: "Addi",
    blurClientName: true,
    location: "Ethiopia",
    date: "December 2022",
    duration: "1 months",
    techStack: ["Python", "BeautifulSoup", "ProxyMesh", "2Captcha"],
    description: "Built a resilient, periodic web scraping engine for Facebook Marketplace and Zillow. Engineered custom proxy rotation and captcha solving to ensure 24/7 data availability.",
    impact: "Captured daily pricing trends for 1000+ listings. Provided the data edge needed for a $500k real estate investment fund's market entry.",
    highlights: ["1000+ Daily Listings", "Zero downtime"],
    flag: "🇪🇹",
    countryCode: "et"
  },
  {
    id: 1,
    title: "QA System Log Analytics & Debugging Infrastructure",
    clientName: "Akande M. Eliott",
    clientPrefix: "Akan",
    blurClientName: false,
    location: "Morocco",
    date: "December 2022",
    duration: "3 months",
    techStack: ["Kibana", "R", "Excel"],
    description: "Developed a Kibana-based debugging environment for massive system test logs. Focused on reducing search friction for internal QA teams to speed up software release cycles.",
    impact: "Reduced test-cycle troubleshooting time by 40%. Automated root-cause analysis for 25% of recurring system failures.",
    highlights: ["40% Faster Debugging", "25% Auto-RCA", "Internal QA Scale"],
    flag: "🇲🇦",
    countryCode: "ma"
  }
]

const Freelancing = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [appliedCountries, setAppliedCountries] = useState<string[]>([])
  const [appliedTech, setAppliedTech] = useState<string[]>([])

  // Sort projects in descending chronological order (newest first)
  const sortedProjects = useMemo(() => {
    const parseDate = (dateStr: string) => {
      const months: { [key: string]: number } = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
        'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
      }
      const parts = dateStr.split(' ')
      const month = months[parts[0]] || 0
      const year = parseInt(parts[1]) || 0
      return year * 12 + month
    }
    return [...projects].sort((a, b) => parseDate(b.date) - parseDate(a.date))
  }, [])

  const countryOptions = useMemo(() => {
    const map = new Map<string, { label: string; value: string }>()
    projects.forEach((project) => {
      const code = project.countryCode.toLowerCase()
      if (!map.has(code)) {
        map.set(code, { value: code, label: `${project.flag} ${project.location}` })
      }
    })
    return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label))
  }, [])

  const techOptions = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((project) => project.techStack.forEach((tech) => set.add(tech)))
    return Array.from(set)
      .sort((a, b) => a.localeCompare(b))
      .map((tech) => ({ label: tech, value: tech }))
  }, [])

  const filteredProjects = useMemo(() => {
    return sortedProjects.filter((project) => {
      const countryMatch =
        appliedCountries.length === 0 ||
        appliedCountries.includes(project.countryCode.toLowerCase())

      const techMatch =
        appliedTech.length === 0 ||
        appliedTech.every((tech) =>
          project.techStack.map((t) => t.toLowerCase()).includes(tech.toLowerCase())
        )

      return countryMatch && techMatch
    })
  }, [appliedCountries, appliedTech, sortedProjects])

  return (
    <>
      <Navbar />
      <section id="freelancing" className="py-16 px-5 bg-gradient-to-b from-white to-[#f8f9fa] pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#333] mb-3">Freelance Portfolio</h2>
            <p className="text-[#666] text-lg mb-4">
              A curated list of freelance projects completed since 1st year of college, highlighting cross-domain problem solving, dashboard building, data wrangling, and automation.
            </p>
            {/* Contact Note */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-xl active:scale-95"
              >
                Request Case Studies & References
              </Link>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-10 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-semibold text-[#333]">Filter projects</p>
                <p className="text-sm text-[#666]">Select one or many to narrow the list</p>
              </div>
              <div className="flex gap-3">
                {(selectedCountries.length > 0 || selectedTech.length > 0) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCountries([])
                      setSelectedTech([])
                      setAppliedCountries([])
                      setAppliedTech([])
                    }}
                    className="text-sm font-medium text-[#007bff] hover:text-[#0056b3] transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>

            <div className="mt-5 flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 w-full">
                <MultiSelectFilter
                  label="Country"
                  options={countryOptions}
                  selected={selectedCountries}
                  onChange={setSelectedCountries}
                  placeholder="Pick one or more countries"
                  mode="dropdown"
                />
              </div>
              <div className="flex-1 w-full">
                <MultiSelectFilter
                  label="Tech Stack"
                  options={techOptions}
                  selected={selectedTech}
                  onChange={setSelectedTech}
                  placeholder="Pick one or more tools"
                  mode="dropdown"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  setAppliedCountries(selectedCountries)
                  setAppliedTech(selectedTech)
                }}
                className="px-8 bg-[#007bff] text-white font-semibold rounded-xl hover:bg-[#0056b3] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
                disabled={selectedCountries.length === 0 && selectedTech.length === 0 && appliedCountries.length === 0 && appliedTech.length === 0}
              >
                Apply
              </button>
              {/* Mobile Apply Button */}
              <button
                type="button"
                onClick={() => {
                  setAppliedCountries(selectedCountries)
                  setAppliedTech(selectedTech)
                }}
                className="w-full py-4 bg-[#007bff] text-white font-semibold rounded-xl hover:bg-[#0056b3] transition-colors shadow-sm md:hidden"
              >
                Apply Filters
              </button>
            </div>
          </div>

          {/* Timeline */}
          <Timeline items={filteredProjects} />

          {/* Summary Footer */}
          <div className="mt-20 text-center">
            <div className="inline-block px-12 py-10 bg-gray-900 border border-gray-800 rounded-3xl text-white shadow-2xl">
              <p className="text-4xl font-black mb-4 tracking-tighter">
                {filteredProjects.length}+ Infrastructure Deployments
              </p>
              <p className="text-xl text-blue-400 font-medium mb-6">
                From Day 0 Prototype to Planning to MVP to real users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Freelancing

