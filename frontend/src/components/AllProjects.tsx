'use client'

import { useState } from 'react'
import ProjectCard from './projects/ProjectCard'
import TagFilter from './projects/TagFilter'
import { projects } from './projects/projectsData'
import { TagType } from './projects/types'

const AllProjects = () => {
  const [selectedTags, setSelectedTags] = useState<TagType[]>([])

  // Handle tag selection
  const toggleTag = (tag: TagType) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    )
  }

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) => project.tags.some((tag) => selectedTags.includes(tag)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-white to-[#f0f4f8] py-12 px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-[95%] 2xl:max-w-[90%] mx-auto">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
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

        {/* Tag Filters */}
        <div className="mb-10">
          <TagFilter selectedTags={selectedTags} onToggleTag={toggleTag} />
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
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

