const Certifications = () => {
  return (
    <section className="text-center py-5 px-[5%] bg-white">
      <h2 className="text-[28px] text-[#333] mb-5">Certifications</h2>
      <div className="grid grid-cols-2 gap-5 justify-center md:grid-cols-1">
        {/* First Row */}
        <div className="bg-[#f8f9fa] p-5 rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-left md:w-[90%] md:mx-auto">
          <h3 className="text-lg text-[#007bff] mb-[5px]">MongoDB Fundamentals</h3>
          <p className="text-sm text-[#555] my-[3px]"><strong>Issued by:</strong> MongoDB Academy</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Year:</strong> 2024</p>
          <p className="text-sm text-[#555] my-[3px]">Learned NoSQL, Mongo Workspaces and database connectivities to applications.</p>
          <a href="https://learn.mongodb.com/c/OiUBAvhtRpiU1-KnzEJZdA" target="_blank" rel="noreferrer" className="text-[#007bff]">View Certificate</a>
        </div>

        <div className="bg-[#f8f9fa] p-5 rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-left md:w-[90%] md:mx-auto">
          <h3 className="text-lg text-[#007bff] mb-[5px]">Microsoft Azure Fundamentals (AZ-900)</h3>
          <p className="text-sm text-[#555] my-[3px]"><strong>Issued by:</strong> Microsoft</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Year:</strong> 2024</p>
          <p className="text-sm text-[#555] my-[3px]">Understanding of cloud computing concepts and Azure services. Deployment of ML and AUTOML Apps onto the Azure and Databricks.</p>
          <a href="https://www.credly.com/badges/7fd53f8c-be3e-48bf-acbb-34d7a42423b5/linked_in_profile" target="_blank" rel="noreferrer" className="text-[#007bff]">View Certificate</a>
        </div>

        <div className="bg-[#f8f9fa] p-5 rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-left md:w-[90%] md:mx-auto">
          <h3 className="text-lg text-[#007bff] mb-[5px]">AWS Academy Data Engineering</h3>
          <p className="text-sm text-[#555] my-[3px]"><strong>Issued by:</strong> AWS</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Year:</strong> 2025</p>
          <p className="text-sm text-[#555] my-[3px]">Practiced Cloud Data Engineering and validated knowledge on ETL pipelines.</p>
          <a href="https://www.credly.com/badges/dcca2a23-24c9-4e5b-ad4e-47334d91c51c/public_url" target="_blank" rel="noreferrer" className="text-[#007bff]">View Certificate</a>
        </div>
      </div>
    </section>
  )
}

export default Certifications

