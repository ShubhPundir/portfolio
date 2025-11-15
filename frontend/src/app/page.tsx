import Hero from '@/components/Hero'
import Education from '@/components/Education'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Skills from '@/components/skills/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </>
  )
}

