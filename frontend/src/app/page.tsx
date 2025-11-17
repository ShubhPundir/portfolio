import Hero from '@/app/_sections/Hero'
import Education from '@/components/Education'
import WorkExperience from '@/app/_sections/WorkExperience'
import Projects from '@/components/Projects'
import Skills from '@/app/_sections/Skills'
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

