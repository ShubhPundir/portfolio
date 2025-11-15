import CertificationCard from './CertificationCard'

const Certifications = () => {
  return (
    <section className="text-center py-5 px-[5%] bg-white">
      <h2 className="text-[28px] text-[#333] mb-5">Certifications</h2>
      <div className="grid grid-cols-2 gap-5 max-w-[1200px] mx-auto md:grid-cols-1">
        <CertificationCard
          title="MongoDB Fundamentals"
          issuedBy="MongoDB Academy"
          year="2024"
          description="Learned NoSQL, Mongo Workspaces and database connectivities to applications."
          certificateLink="https://learn.mongodb.com/c/OiUBAvhtRpiU1-KnzEJZdA"
          className="w-full md:w-[90%] md:mx-auto"
        />

        <CertificationCard
          title="Microsoft Azure Fundamentals (AZ-900)"
          issuedBy="Microsoft"
          year="2024"
          description="Understanding of cloud computing concepts and Azure services. Deployment of ML and AUTOML Apps onto the Azure and Databricks."
          certificateLink="https://www.credly.com/badges/7fd53f8c-be3e-48bf-acbb-34d7a42423b5/linked_in_profile"
          className="w-full md:w-[90%] md:mx-auto"
        />

        <CertificationCard
          title="AWS Academy Data Engineering"
          issuedBy="AWS"
          year="2025"
          description="Practiced Cloud Data Engineering and validated knowledge on ETL pipelines."
          certificateLink="https://www.credly.com/badges/dcca2a23-24c9-4e5b-ad4e-47334d91c51c/public_url"
          className="w-full md:w-[90%] md:mx-auto"
        />
      </div>
    </section>
  )
}

export default Certifications

