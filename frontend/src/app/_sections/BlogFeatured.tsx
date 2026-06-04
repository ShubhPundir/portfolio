'use client'

import Link from 'next/link'
import { blogPosts } from '@/data/blogData'

const BlogFeatured = () => {
  // Highlight the RAG, AI Workflow, and PII posts as they represent high technical authority
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <section id="featured-blogs" className="py-20 px-5 bg-gray-50 border-t border-b border-gray-150 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-[#007bff] uppercase bg-[#007bff]/10 px-4 py-1.5 rounded-full">
            Engineering Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-4 tracking-tight">
            How I Solve Complex Engineering Challenges
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I write detailed walkthroughs of systems architecture, operational gotchas, and performance optimization lessons learned from client deployments.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={blog.thumbnail || '/portfolio/blogs/rag-microservice.jpg'}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback image if the primary fails to load
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#007bff] bg-white border border-[#007bff]/20 px-2.5 py-1 rounded-md shadow-sm">
                    {blog.platform}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-gray-400 mb-2">{blog.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#007bff] transition-colors leading-snug mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Footer tags and Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-bold text-gray-500 bg-gray-100 border border-gray-200/50 px-2.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-xs font-bold text-[#007bff] uppercase tracking-wider group-hover:underline">
                    Read Full Article
                    <svg className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#007bff] font-extrabold hover:text-[#0056b3] transition-colors text-base group"
          >
            <span>Read all published articles</span>
            <svg
              className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BlogFeatured
