import Hero from '@/app/_sections/Hero'
import Education from '@/app/_sections/Education'
import WorkExperience from '@/app/_sections/WorkExperience'
import Projects from '@/components/Projects'
import Skills from '@/app/_sections/Skills'
import Certifications from '@/app/_sections/Certifications'
import Contact from '@/app/_sections/Contact'
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

