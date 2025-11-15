import Card from './Card'

const WorkExperience = () => {
  return (
    <section className="text-center py-[10px] px-[5%] bg-white">
      <h2 className="text-[28px] text-[#333] mb-5">Work Experience</h2>
      <div className="flex flex-row justify-center items-start gap-5 flex-nowrap">
        <Card 
          title="Junior Java Developer Intern" 
          bgColor="gray" 
          textAlign="center"
          className="flex-1 min-h-[400px]"
        >
          <ul className="text-left text-sm text-[#555] list-disc pl-5 space-y-1">
            <strong>Company:</strong> TEN: The Entrepreneurship Network<br/>
            <strong>Duration:</strong> Sep 2021 - Nov 2021<br/>
            <li>Analyzed requirements and planned <strong>SRS</strong> for multi-media organizations.</li>
            <li>Implemented <strong>REST APIs</strong> and optimized database queries for payment gateways via <strong>RazorPay</strong>.</li>
            <li>Worked on performance improvements and bug fixes resolving to a <strong>20% improvement</strong> in backend lags.</li>
          </ul>
        </Card>

        <Card 
          title="Machine Learning Engineer" 
          bgColor="gray" 
          textAlign="center"
          className="flex-1 min-h-[400px]"
        >
          <ul className="text-left text-sm text-[#555] list-disc pl-5 space-y-1">
            <strong>Company:</strong> WDS: Wiz Digital Services<br/>
            <strong>Duration:</strong> Jan 2024 - May 2024<br/>
            <li>Implemented <strong>NLU and NLP</strong> techniques on multiple clientele dataset to encrypt and safeguard sensitive information with an accuracy of <strong>92%</strong></li>
            <li>Collaborated with cross functional teams to integrate <strong>privacy-preserving techniques</strong> seamlessly into legacy and existing systems.</li>
            <li>Deployed end to end <strong>chatbot services</strong> and fine tuned open source <strong>LLMs</strong> to drive customer satisfaction close to <strong>75%</strong>.</li>
          </ul>
        </Card>

        <Card 
          title="Freelancer" 
          bgColor="gray" 
          textAlign="center"
          className="flex-1 min-h-[400px]"
        >
          <ul className="text-left text-sm text-[#555] list-disc pl-5 space-y-1">
            <strong>Company:</strong> Self Employed<br/>
            <strong>Duration:</strong> Jan 2022 - Present<br/>
            <li>Scraped/Crawled data for multiple clients producing tangible and meaningful <strong>business insights</strong>.</li>
            <li>Developed <strong>ETL data pipelines</strong> for text preprocessing for <strong>Big Data</strong>.</li>
            <li>Developed <strong>Real Time Dashboards</strong> onto <strong>Full-Stack applications</strong> from <strong>IOT Sensors</strong>, <strong>Distributed Management Services</strong>, etc.</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}

export default WorkExperience

