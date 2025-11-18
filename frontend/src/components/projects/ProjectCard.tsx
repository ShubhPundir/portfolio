import TagBadge from './TagBadge'
import { Project } from './types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:scale-[1.02] border border-gray-100 hover:border-[#007bff]/30 relative overflow-hidden">
      {/* Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007bff] via-[#0056b3] to-[#007bff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Project Name & Description */}
      <div className="flex-grow mb-4">
        <h3 className="mb-3">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007bff] text-xl font-bold no-underline hover:text-[#0056b3] transition-colors duration-200 flex items-center gap-2 group/link"
          >
            <span>{project.name}</span>
            <svg
              className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 transition-all duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </h3>
        <p className="text-sm text-[#555] leading-relaxed">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-gray-100">
        {project.tags.map((tag, i) => (
          <TagBadge key={i} tag={tag} size="sm" />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard

