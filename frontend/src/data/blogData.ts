import { link } from "fs"

export interface BlogPost {
    id: number
    title: string
    excerpt: string
    date: string
    platform: 'Medium' | 'Mudda Dashboard'
    thumbnail: string
    link: string
    tags: string[]
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'AI Workflow Generation for Administrative Orchestration',
        excerpt: 'Exploring how AI can automate and optimize administrative workflows through intelligent orchestration and generation.',
        date: 'January 2026',
        platform: 'Mudda Dashboard',
        thumbnail: '/portfolio/blogs/Mudda-AI-Workflow-v1.png',
        link: 'https://medium.com/@shb.pndr/building-agentic-workflows-for-administration-that-actually-run-v1-13473b4331a0',
        tags: ['AI', 'Workflow', 'Automation', 'Administration']
    },
    {
        id: 2,
        title: 'Why Your RAG Microservice Fails in Production',
        excerpt: 'A deep dive into common pitfalls and production challenges when deploying RAG (Retrieval Augmented Generation) microservices.',
        date: 'December 2025',
        platform: 'Medium',
        thumbnail: '/portfolio/blogs/RAG.png',
        link: 'https://medium.com/@shb.pndr/why-your-rag-microservice-fails-in-production-cb4c76719a30',
        tags: ['RAG', 'Microservices', 'Production', 'AI', 'LLM']
    },
    {
        id: 3,
        title: 'Why Your RAG Microservice Still Returns Hallucinations',
        excerpt: 'A deep dive into common pitfalls and production challenges when deploying RAG (Retrieval Augmented Generation) microservices.',
        date: 'December 2025',
        platform: 'Medium',
        thumbnail: '/portfolio/blogs/rag-microservice.jpg',
        link: 'https://medium.com/@shb.pndr/why-your-rag-microservice-still-returns-hallucinations-2a85138eada6',
        tags: ['RAG', 'Microservices', 'Production', 'AI', 'LLM']
    },
    {
        id: 4,
        title: 'PII Protection Laws Your Product Must Obey (Whether You Like It or Not)',
        excerpt: 'Understanding PII protection laws and regulations that every product must comply with in the modern digital landscape.',
        date: 'January 2026',
        platform: 'Medium',
        thumbnail: '/portfolio/',
        link: 'https://medium.com/@shb.pndr/pii-protection-laws-your-product-must-obey-whether-you-like-it-or-not-a34ac0af8c3d',
        tags: ['PII', 'Cybersecurity', 'LLM']
    },
    {
        id: 5,
        title: "How URL Shorteners Work - Part 1",
        excerpt: "An in-depth look at the mechanics behind URL shorteners, exploring how they function and their impact on web navigation.",
        date: "March 2023",
        platform: "Medium",
        thumbnail: "/portfolio/blogs/url-shorteners.jpg",
        link: "https://medium.com/@shb.pndr/how-url-shorteners-work-part-1-50413f91229b",
        tags: ["URL Shorteners", "Web Development", "Networking"]
    }
]
