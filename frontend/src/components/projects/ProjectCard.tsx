import TagBadge from './TagBadge'
import { Project } from './types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 flex flex-col h-full hover:scale-[1.02]">
      {/* Project Name & Description */}
      <div className="flex-grow mb-4">
        <h3 className="mb-3">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007bff] text-xl font-bold no-underline hover:underline transition-colors duration-200"
          >
            {project.name}
          </a>
        </h3>
        <p className="text-sm text-[#555] leading-relaxed">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mt-auto">
        {project.tags.map((tag, i) => (
          <TagBadge key={i} tag={tag} size="sm" />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard

