'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import TagFilter from './TagFilter'
import TagBadge from './TagBadge'
import { projects } from './projectsData'
import { TagType } from './types'

const AllProjects = () => {
  const [selectedTags, setSelectedTags] = useState<TagType[]>([])
  const [view, setView] = useState<'grid' | 'table'>('grid')

  // Handle tag selection
  const toggleTag = (tag: TagType) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    )
  }

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? [...projects].sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0))
      : projects
        .filter((project) => project.tags.some((tag) => selectedTags.includes(tag)))
        .sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0))

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-white to-[#f0f4f8] py-12 px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-[95%] 2xl:max-w-[90%] mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-block mb-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#007bff] via-[#0056b3] to-[#007bff] bg-clip-text text-transparent mb-3">
                All Projects
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-[#007bff] to-[#0056b3] rounded-full"></div>
            </div>
            <p className="text-[#666] text-lg md:text-xl mt-4">
              <span className="font-semibold text-[#333]">{filteredProjects.length}</span>{' '}
              {filteredProjects.length === 1 ? 'project' : 'projects'} found
              {selectedTags.length > 0 && (
                <span className="ml-2 text-[#007bff] font-medium">
                  • Filtered by {selectedTags.length} {selectedTags.length === 1 ? 'tag' : 'tags'}
                </span>
              )}
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200 self-center md:self-end">
            <button
              onClick={() => setView('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${view === 'grid'
                ? 'bg-[#007bff] text-white shadow-sm'
                : 'text-[#666] hover:bg-gray-50'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Grid
            </button>
            <button
              onClick={() => setView('table')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${view === 'table'
                ? 'bg-[#007bff] text-white shadow-sm'
                : 'text-[#666] hover:bg-gray-50'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              Table
            </button>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="mb-10">
          <TagFilter selectedTags={selectedTags} onToggleTag={toggleTag} />
        </div>

        {/* Content */}
        {filteredProjects.length > 0 ? (
          view === 'grid' ? (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            /* Table View */
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in-up">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-4 px-6 text-sm font-semibold text-[#333] w-[30%]">Project Name</th>
                      <th className="py-4 px-6 text-sm font-semibold text-[#333] w-[40%]">Description</th>
                      <th className="py-4 px-6 text-sm font-semibold text-[#333] w-[20%]">Tags</th>
                      <th className="py-4 px-6 text-sm font-semibold text-[#333] w-[10%]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredProjects.map((project, index) => (
                      <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="py-4 px-6 align-top">
                          <div className="flex items-center gap-2">
                            {project.favorite && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500 flex-shrink-0">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                              </svg>
                            )}
                            <span className="font-semibold text-[#333] group-hover:text-[#007bff] transition-colors">{project.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 align-top">
                          <p className="text-sm text-[#555] line-clamp-2 md:line-clamp-3">{project.description}</p>
                        </td>
                        <td className="py-4 px-6 align-top">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag, i) => (
                              <div key={i} className="scale-90 origin-left">
                                <TagBadge tag={tag} size="sm" />
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-6 align-top">
                          <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-2 text-[#007bff] hover:bg-[#007bff]/10 rounded-lg transition-colors"
                            title="View Repository"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        ) : (
          <div className="text-center py-20 px-6">
            <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 p-10">
              <div className="mb-6">
                <svg
                  className="w-24 h-24 mx-auto text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#333] mb-3">No projects found</h3>
              <p className="text-[#666] text-lg mb-6">
                No projects match the selected tags. Try adjusting your filters.
              </p>
              <button
                onClick={() => setSelectedTags([])}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#007bff] to-[#0056b3] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllProjects

