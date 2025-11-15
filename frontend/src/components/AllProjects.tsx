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
    <div className="min-h-screen bg-[#f8f9fa] py-8 px-5">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#333] mb-2">All Projects</h1>
        <p className="text-[#666] text-lg">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} found
          {selectedTags.length > 0 && ` (filtered by ${selectedTags.length} ${selectedTags.length === 1 ? 'tag' : 'tags'})`}
        </p>
      </div>

      {/* Tag Filters */}
      <TagFilter selectedTags={selectedTags} onToggleTag={toggleTag} />

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-[#666] text-lg">No projects found matching the selected tags.</p>
          <button
            onClick={() => setSelectedTags([])}
            className="mt-4 text-[#007bff] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}

export default AllProjects

