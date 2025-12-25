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

      {/* Favorite Heart Icon */}
      {project.favorite && (
        <div className="absolute top-4 right-4 text-red-500 animate-pulse">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      )}

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

