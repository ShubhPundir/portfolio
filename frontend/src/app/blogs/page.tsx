'use client'

import Navbar from '@/components/Navbar'
import { blogPosts } from '@/data/blogData'
import Link from 'next/link'

const BlogsPage = () => {
    return (
        <>
            <Navbar />
            <section id="blogs" className="py-16 px-5 bg-gradient-to-b from-white to-[#f8f9fa] pt-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-[#333] mb-3">Blog Posts</h2>
                        <p className="text-[#666] text-lg">
                            Technical articles and insights on AI, microservices, and software engineering
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((blog) => (
                            <Link
                                key={blog.id}
                                href={blog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                                    {/* Thumbnail */}
                                    <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={blog.thumbnail}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        {/* Platform Badge */}
                                        <div className="mb-3">
                                            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${blog.platform === 'Medium'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {blog.platform}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-[#007bff] transition-colors">
                                            {blog.title}
                                        </h3>

                                        {/* Date */}
                                        <p className="text-sm text-[#999] mb-3">{blog.date}</p>

                                        {/* Excerpt */}
                                        <p className="text-[#666] text-sm mb-4 flex-1">
                                            {blog.excerpt}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {blog.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Read More Arrow */}
                                        <div className="mt-4 flex items-center text-[#007bff] font-medium text-sm">
                                            <span>Read Article</span>
                                            <svg
                                                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {/* Summary Footer */}
                    <div className="mt-12 text-center">
                        <div className="inline-block px-8 py-6 bg-gradient-to-r from-[#007bff] to-[#0056b3] rounded-xl text-white shadow-lg">
                            <p className="text-2xl font-bold mb-2">
                                {blogPosts.length} Articles Published
                            </p>
                            <p className="text-lg opacity-90">
                                Sharing knowledge and insights with the tech community
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsPage
