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
      
      {/* Background & Credentials (resume-style sections secondary) */}
      <div className="bg-[#f8f9fa] py-4 border-t border-gray-150">
        <div className="max-w-7xl mx-auto text-center pt-16">
          <span className="text-sm font-bold tracking-wider text-gray-400 uppercase bg-gray-200/50 px-4 py-1.5 rounded-full">
            Background & Credentials
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Engineering Experience & Skills
          </h2>
        </div>
        <WorkExperience />
        <Skills />
        <Education />
        <Certifications />
      </div>

      <CTASection />
      <Contact />
    </>
  )
}

