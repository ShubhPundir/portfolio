import CertificationCard from '../../components/CertificationCard'

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-3">Certifications</h2>
          <p className="text-[#666] text-lg">Professional certifications and achievements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CertificationCard
            title="MongoDB Fundamentals"
            issuedBy="MongoDB Academy"
            year="2024"
            description="Learned NoSQL, Mongo Workspaces and database connectivities to applications."
            certificateLink="https://learn.mongodb.com/c/OiUBAvhtRpiU1-KnzEJZdA"
          />

          <CertificationCard
            title="Microsoft Azure Fundamentals (AZ-900)"
            issuedBy="Microsoft"
            year="2024"
            description="Understanding of cloud computing concepts and Azure services. Deployment of ML and AUTOML Apps onto the Azure and Databricks."
            certificateLink="https://www.credly.com/badges/7fd53f8c-be3e-48bf-acbb-34d7a42423b5/linked_in_profile"
          />

          <CertificationCard
            title="AWS Academy Data Engineering"
            issuedBy="AWS"
            year="2025"
            description="Practiced Cloud Data Engineering and validated knowledge on ETL pipelines."
            certificateLink="https://www.credly.com/badges/dcca2a23-24c9-4e5b-ad4e-47334d91c51c/public_url"
          />
        </div>
      </div>
    </section>
  )
}

export default Certifications

