const Skills = () => {
  return (
    <section id="skills" className="text-center py-5 px-5 bg-[#f4f4f4] font-sans">
      <h2>Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[1000px] mx-auto">
        <div className="bg-white p-5 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105">
          <h3 className="text-[#f0a500] mb-[10px]">Languages</h3>
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Java</li>
            <li className="text-base text-[#333] my-[5px]">Python</li>
            <li className="text-base text-[#333] my-[5px]">R</li>
            <li className="text-base text-[#333] my-[5px]">C/C++</li>
            <li className="text-base text-[#333] my-[5px]">JavaScript/TypeScript</li>
            <li className="text-base text-[#333] my-[5px]">HTML/CSS</li>
            <li className="text-base text-[#333] my-[5px]">SQL/NOSQL</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105">
          <h3 className="text-[#f0a500] mb-[10px]">Technical Skills</h3>
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
        </div>

        <div className="bg-white p-5 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105">
          <h3 className="text-[#f0a500] mb-[10px]">Frameworks</h3>
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
        </div>

        <div className="bg-white p-5 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105">
          <h3 className="text-[#f0a500] mb-[10px]">Tools</h3>
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Git & GitHub</li>
            <li className="text-base text-[#333] my-[5px]">PowerBI & Tableau</li>
            <li className="text-base text-[#333] my-[5px]">MS Excel</li>
            <li className="text-base text-[#333] my-[5px]">Postman</li>
            <li className="text-base text-[#333] my-[5px]">Figma</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105">
          <h3 className="text-[#f0a500] mb-[10px]">Soft Skills</h3>
          <ul className="list-none p-0">
            <li className="text-base text-[#333] my-[5px]">Problem-Solving</li>
            <li className="text-base text-[#333] my-[5px]">Teamwork & Collaboration</li>
            <li className="text-base text-[#333] my-[5px]">Adaptability</li>
            <li className="text-base text-[#333] my-[5px]">Communication</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills

