import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <section id="skills" className="text-center py-5 px-5 bg-[#f4f4f4] font-sans">
      <h2 className="text-[28px] text-[#333] mb-5">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto px-5">
        <SkillCard 
          title="Languages" 
          bgColor="white" 
          textAlign="center"
        >
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Java</li>
            <li className="text-base text-[#333] my-[5px]">Python</li>
            <li className="text-base text-[#333] my-[5px]">R</li>
            <li className="text-base text-[#333] my-[5px]">C/C++</li>
            <li className="text-base text-[#333] my-[5px]">JavaScript/TypeScript</li>
            <li className="text-base text-[#333] my-[5px]">HTML/CSS</li>
            <li className="text-base text-[#333] my-[5px]">SQL/NOSQL</li>
          </ul>
        </SkillCard>

        <SkillCard 
          title="Technical Skills" 
          bgColor="white" 
          textAlign="center"
        >
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Data Science</li>
            <li className="text-base text-[#333] my-[5px]">Data Analytics/Wrangling</li>
            <li className="text-base text-[#333] my-[5px]">Business Intelligence</li>
            <li className="text-base text-[#333] my-[5px]">Master Data Management</li>
            <li className="text-base text-[#333] my-[5px]">Machine Learning/Deep Learning</li>
            <li className="text-base text-[#333] my-[5px]">Natural Language Processing</li>
            <li className="text-base text-[#333] my-[5px]">Recommendation Engines</li>
            <li className="text-base text-[#333] my-[5px]">Web Scraping</li>
            <li className="text-base text-[#333] my-[5px]">Databases</li>
          </ul>
        </SkillCard>

        <SkillCard 
          title="Frameworks" 
          bgColor="white" 
          textAlign="center"
        >
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Springboot MVC</li>
            <li className="text-base text-[#333] my-[5px]">Django & Flask</li>
            <li className="text-base text-[#333] my-[5px]">Node.js & Express.js</li>
            <li className="text-base text-[#333] my-[5px]">MS SQL/MongoDB/Cassandra</li>
            <li className="text-base text-[#333] my-[5px]">Tensorflow & Pytorch</li>
            <li className="text-base text-[#333] my-[5px]">OpenCV & EasyOCR</li>
            <li className="text-base text-[#333] my-[5px]">AWS/Azure Deployment</li>
            <li className="text-base text-[#333] my-[5px]">Apache Hadoop Ecosystem</li>
          </ul>
        </SkillCard>

        <SkillCard 
          title="Tools" 
          bgColor="white" 
          textAlign="center"
        >
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Git & GitHub</li>
            <li className="text-base text-[#333] my-[5px]">PowerBI & Tableau</li>
            <li className="text-base text-[#333] my-[5px]">MS Excel</li>
            <li className="text-base text-[#333] my-[5px]">Postman</li>
            <li className="text-base text-[#333] my-[5px]">Figma</li>
          </ul>
        </SkillCard>

        <SkillCard 
          title="Soft Skills" 
          bgColor="white" 
          textAlign="center"
        >
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Problem-Solving</li>
            <li className="text-base text-[#333] my-[5px]">Teamwork & Collaboration</li>
            <li className="text-base text-[#333] my-[5px]">Adaptability</li>
            <li className="text-base text-[#333] my-[5px]">Communication</li>
          </ul>
        </SkillCard>
      </div>
    </section>
  )
}

export default Skills

