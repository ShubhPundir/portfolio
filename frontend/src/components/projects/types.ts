import { ReactNode } from 'react'

// ENUM for project tags
export const TAGS = {
  SDE: "SDE", // Full-stack development or end-to-end
  ANALYTICS: "Analytics",
  WEB_SCRAPING: "Web Scraping",
  ML_DL: "ML/DL", // Machine Learning or Deep Learning
  NLP: "NLP",
  CV: "CV", // Computer Vision
  VANILLA_PROGRAMMING: "Vanilla Programming", // No external modules
} as const

export type TagType = typeof TAGS[keyof typeof TAGS]

// Tag colors
export const TAG_COLORS: Record<TagType, string> = {
  "SDE": "#007bff", // Blue
  "Analytics": "#7aff33", // Green
  "Web Scraping": "#17a2b8", // Cyan
  "ML/DL": "#ff5733", // Orange-Red
  "NLP": "#8e44ad", // Purple
  "CV": "#ff33ff", // Pink
  "Vanilla Programming": "#ff0000", // Red
}

export interface Project {
  name: string
  description: string | ReactNode
  tags: TagType[]
  repoLink: string
}

export interface Experience {
  title: string
  company: string
  duration: string
  icon: string | ReactNode
  link: string
  description: string | ReactNode
}
