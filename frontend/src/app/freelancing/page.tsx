'use client'

import Navbar from '@/components/Navbar'
import FreelanceTimeline, { type FreelanceProject } from '@/components/ui/FreelanceTimeline'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import MultiSelectFilter from '@/components/ui/MultiSelectFilter'

const Freelancing = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedTech, setSelectedTech] = useState<string[]>([])

  const projects: FreelanceProject[] = [
    {
      id: 1,
      title: "Analysis Dashboard for Test Logs",
      clientName: "Akande M. Eliott",
      clientPrefix: "Akan",
      blurClientName: false,
      location: "Morocco",
      date: "December 2022",
      techStack: ["Kibana", "R", "Excel"],
      description: "Built a Kibana-based analytics dashboard to visualize large volumes of system test logs, enabling quicker debugging and test evaluation for internal QA teams.",
      impact: "Enabled real-time log analytics and reduced test-cycle troubleshooting by ~40%.",
      flag: "🇲🇦",
      countryCode: "ma"
    },
    {
      id: 2,
      title: "Periodic Web Scraper for Facebook Marketplace & Zillow",
      clientName: "Addi",
      clientPrefix: "Addi",
      blurClientName: true,
      location: "Ethiopia",
      date: "December 2022",
      techStack: ["Python", "BeautifulSoup", "ProxyMesh", "2Captcha"],
      description: "Created a web scraper that periodically extracts property listings and price trends from Facebook Marketplace and Zillow for market research.",
      impact: "Enabled daily scraping and data dumps, helping track property price trends over time.",
      flag: "🇪🇹",
      countryCode: "et"
    },
    {
      id: 3,
      title: "ETL Report Generation + Power BI Dashboards",
      clientName: "Amber P.",
      clientPrefix: "Ambe",
      blurClientName: false,
      location: "UK",
      date: "February 2023",
      techStack: ["Power BI", "Python (Pandas)", "Excel", "SQL"],
      description: "Generated ETL pipelines for health monitoring data and visualized the results through interactive Power BI dashboards for a UK-based health analyst.",
      impact: "Improved monthly reporting efficiency and health trend tracking accuracy.",
      flag: "🇬🇧",
      countryCode: "gb"
    },
    {
      id: 4,
      title: "Power BI Dashboards + Logstash Pipelines",
      clientName: "Francis O.",
      clientPrefix: "Fran",
      blurClientName: false,
      location: "UAE",
      date: "February 2023",
      techStack: ["Power BI", "Logstash", "Pandas", "Cassandra"],
      description: "Developed dashboards for visualizing ticket transaction logs and built Logstash pipelines to preprocess and clean large transactional data streams.",
      impact: "Streamlined data pipeline setup and enabled business intelligence turnaround faster.",
      flag: "🇦🇪",
      countryCode: "ae"
    },
    {
      id: 5,
      title: "Compiled Reports for Sales Performance",
      clientName: "Ishaan",
      clientPrefix: "Ishaan",
      blurClientName: true,
      location: "India",
      date: "May 2023",
      techStack: ["Excel", "Python", "Pandas"],
      description: "Analyzed historical sales data to generate detailed performance reports segmented by region and category.",
      impact: "Delivered easy-to-read summaries to help improve regional sales decision-making.",
      flag: "🇮🇳",
      countryCode: "in"
    },
    {
      id: 6,
      title: "News & Blog Scraping with Financial Correlation",
      clientName: "Kaml",
      clientPrefix: "Kaml",
      blurClientName: true,
      location: "UK",
      date: "June 2023",
      techStack: ["Python", "BeautifulSoup", "yFinance", "Pandas"],
      description: "Scraped finance-related news/blogs from Yahoo Finance and cross-referenced them with corresponding stock data to highlight correlation patterns.",
      impact: "Provided insights into possible media influence on market behavior.",
      flag: "🇬🇧",
      countryCode: "gb"
    },
    {
      id: 7,
      title: "CRM Data Wrangling & Research",
      clientName: "Mason Richards",
      clientPrefix: "Maso",
      blurClientName: false,
      location: "UK",
      date: "August 2023",
      techStack: ["Excel", "Python", "Pandas", "openpyxl", "PowerBI"],
      description: "Cleaned and structured messy CRM export data, conducted trend analysis, and built summary metrics for reporting. Refactored legacy BI system with a leaner and simpler PowerBI dashboard for performance charts.",
      impact: "Improved data quality and streamlined reporting processes.",
      flag: "🇬🇧",
      countryCode: "gb"
    },
    {
      id: 8,
      title: "Customer Review Sentiment Analysis Pipeline",
      clientName: "Aisha Benali",
      clientPrefix: "Aish",
      blurClientName: false,
      location: "Morocco",
      date: "March 2024",
      techStack: ["Python", "Transformers", "BERT", "FastAPI", "React"],
      description: "Built an automated sentiment analysis system to categorize customer reviews from multiple e-commerce sources (Shopify, Etsy) into positive, negative, and neutral sentiments. Integrated the results into Power BI dashboards for daily trend visualization.",
      impact: "Helped client identify negative review spikes 3× faster, enabling proactive issue resolution and boosting customer satisfaction metrics.",
      flag: "🇲🇦",
      countryCode: "ma"
    },
    {
      id: 9,
      title: "Chatbot using RASA",
      clientName: "Colin E. Duffy",
      clientPrefix: "Coli",
      blurClientName: false,
      location: "Denmark",
      date: "September 2024",
      techStack: ["RASA", "Cassandra", "BotPress", "NLU"],
      description: "Implemented NLU principles in creating intents, actions and stories for user requests and responses. Migrating BotPress story graphs into simpler cleaner Rasa code streamlining user experience and reducing cost by 45%.",
      impact: "Improved client's ticket query with order delays and reduced call complaint logs by 12%.",
      flag: "🇩🇰",
      countryCode: "dk"
    },
    {
      id: 10,
      title: "Chatbot integration with Existing CRM System",
      clientName: "Martin L. Sørensen",
      clientPrefix: "Mart",
      blurClientName: false,
      location: "Denmark",
      date: "December 2024",
      techStack: ["Python", "RASA", "PostgreSQL"],
      description: "Integrated an existing customer service chatbot with the client's CRM backend to enable dynamic retrieval and update of customer tickets, orders, and interaction histories. Implemented secure API endpoints and a context manager to maintain conversation continuity across sessions.",
      impact: "Automated ~60% of repetitive CRM queries, improving response time for customer support by 35% and reducing manual data lookup tasks.",
      flag: "🇩🇰",
      countryCode: "dk"
    },
    {
      id: 11,
      title: "RAG over document using Gemini",
      clientName: "Alice Ann",
      clientPrefix: "Alic",
      blurClientName: false,
      location: "Denmark",
      date: "February 2025",
      techStack: ["Langchain", "FastAPI", "QdrantDB", "ReactJS", "MongoDB"],
      description: "Made an end-to-end optimized chatbot for document referencing and search analytics for internal managerial tools.",
      impact: "Enabled efficient document search and retrieval for internal operations.",
      flag: "🇩🇰",
      countryCode: "dk"
    }
  ]

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
  }, [projects])

  const countryOptions = useMemo(() => {
    const map = new Map<string, { label: string; value: string }>()
    projects.forEach((project) => {
      const code = project.countryCode.toLowerCase()
      if (!map.has(code)) {
        map.set(code, { value: code, label: `${project.flag} ${project.location}` })
      }
    })
    return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label))
  }, [projects])

  const techOptions = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((project) => project.techStack.forEach((tech) => set.add(tech)))
    return Array.from(set)
      .sort((a, b) => a.localeCompare(b))
      .map((tech) => ({ label: tech, value: tech }))
  }, [projects])

  const filteredProjects = useMemo(() => {
    return sortedProjects.filter((project) => {
      const countryMatch =
        selectedCountries.length === 0 ||
        selectedCountries.includes(project.countryCode.toLowerCase())

      const techMatch =
        selectedTech.length === 0 ||
        selectedTech.every((tech) =>
          project.techStack.map((t) => t.toLowerCase()).includes(tech.toLowerCase())
        )

      return countryMatch && techMatch
    })
  }, [selectedCountries, selectedTech, sortedProjects])

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
            <p className="text-sm text-[#666]">
              <Link
                href="/#contact"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline font-medium transition-colors"
              >
                Contact
              </Link>
              {' '}for names and references
            </p>
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
                    }}
                    className="text-sm font-medium text-[#007bff] hover:text-[#0056b3] transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <MultiSelectFilter
                label="Country"
                options={countryOptions}
                selected={selectedCountries}
                onChange={setSelectedCountries}
                placeholder="Pick one or more countries"
                mode="dropdown"
              />
              <MultiSelectFilter
                label="Tech Stack"
                options={techOptions}
                selected={selectedTech}
                onChange={setSelectedTech}
                placeholder="Pick one or more tools"
                mode="dropdown"
              />
            </div>
          </div>

          {/* Timeline */}
          <FreelanceTimeline projects={filteredProjects} />

          {/* Summary Footer */}
          <div className="mt-12 text-center">
            <div className="inline-block px-8 py-6 bg-gradient-to-r from-[#007bff] to-[#0056b3] rounded-xl text-white shadow-lg">
              <p className="text-2xl font-bold mb-2">
                {filteredProjects.length} Projects Shown
              </p>
              <p className="text-lg opacity-90">
                Delivering quality solutions across diverse domains
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Freelancing

