import Hero from '@/app/_sections/Hero'
import Services from '@/app/_sections/Services'
import CaseStudies from '@/app/_sections/CaseStudies'
import BlogFeatured from '@/app/_sections/BlogFeatured'
import Education from '@/app/_sections/Education'
import WorkExperience from '@/app/_sections/WorkExperience'
import Skills from '@/app/_sections/Skills'
import Certifications from '@/app/_sections/Certifications'
import CTASection from '@/app/_sections/CTASection'
import Contact from '@/app/_sections/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <BlogFeatured />
      <WorkExperience />
      <Skills />
      <Education />
      <Certifications />
      <CTASection />
      <Contact />
    </>
  )
}

