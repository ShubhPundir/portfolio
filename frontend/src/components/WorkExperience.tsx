const WorkExperience = () => {
  return (
    <section className="text-center py-[10px] px-[5%] bg-white">
      <h2 className="text-[28px] text-[#333] mb-5">Work Experience</h2>
      <div className="flex justify-around gap-5 flex-wrap md:flex-col md:items-center">
        
        <div className="flex-1 min-w-[300px] max-w-[320px] bg-[#f8f9fa] p-[15px] rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-center text-[#333] md:w-[80%]">
          <h3 className="text-lg text-[#007bff] mb-[5px]">Junior Java Developer Intern</h3>
          <p className="text-sm text-[#555] my-[3px]"><strong>Company:</strong> TEN: The Entrepreneurship Network</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Duration:</strong> Sep 2021 - Nov 2021</p>
          <ul className="text-left text-sm text-[#555]">
            <li>Analyzed requirements and planned SRS for multi-media organizations.</li>
            <li>Implemented REST APIs and optimized database queries for payment gateways via RazorPay.</li>
            <li>Worked on performance improvements and bug fixes resolving to a 20% improvement in backend lags.</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[320px] bg-[#f8f9fa] p-[15px] rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-center text-[#333] md:w-[80%]">
          <h3 className="text-lg text-[#007bff] mb-[5px]">Machine Learning Engineer</h3>
          <p className="text-sm text-[#555] my-[3px]"><strong>Company:</strong> WDS: Wiz Digital Services</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Duration:</strong> Jan 2024 - May 2024</p>
          <ul className="text-left text-sm text-[#555]">
            <li>Implemented NLU and NLP techniques on multiple clientele dataset to encrpyt and safeguard sensitive information with an accuracy of 92%</li>
            <li>Collaborated with cross functional teams to integrate privacy-preserving techniques seamlessly into legacy and existing systems.</li>
            <li>Deployed end to end chatbot services and fine tuned open source LLMs to drive customer satisfaction close to 75% .</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[320px] bg-[#f8f9fa] p-[15px] rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-center text-[#333] md:w-[80%]">
          <h3 className="text-lg text-[#007bff] mb-[5px]">Freelancer</h3>
          <p className="text-sm text-[#555] my-[3px]"><strong>Company:</strong> Self Employed</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Duration:</strong> Jan 2022 - Present</p>
          <ul className="text-left text-sm text-[#555]">
            <li>Scraped/Crawled data for multiple clients producing tangible and meaningful business insights.</li>
            <li>Developed ETL data pipelines for text preprocessing for Big Data.</li>
            <li>Developed Real Time Dashboards onto Full-Stack applications from IOT Senors, Distributed Management Services, etc</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience

