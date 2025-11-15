const Education = () => {
  return (
    <section className="text-center py-5 px-[5%] bg-[#f8f9fa]">
      <h2 className="text-[28px] text-[#333] mb-5">Education</h2>
      <div className="flex justify-around gap-5 flex-wrap md:flex-col md:items-center">
        <div className="flex-1 min-w-[300px] max-w-[320px] bg-white p-[15px] rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-center md:w-[80%]">
          <h3 className="text-lg text-[#007bff] mb-[5px]">Bachelor of Technology in Computer Science</h3>
          <p className="text-sm text-[#555] my-[3px]">The Northcap University, 2022 - 2026</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>CGPA:</strong> 8.98</p>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[320px] bg-white p-[15px] rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-center md:w-[80%]">
          <h3 className="text-lg text-[#007bff] mb-[5px]">ISC: Grade 12th</h3>
          <p className="text-sm text-[#555] my-[3px]">Sri Sri Academy, 2020 - 2022</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Percentage:</strong> 90.0%</p>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[320px] bg-white p-[15px] rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-center md:w-[80%]">
          <h3 className="text-lg text-[#007bff] mb-[5px]">ICSE: Grade 10th</h3>
          <p className="text-sm text-[#555] my-[3px]">Sri Sri Academy, 2020 - 2020</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Percentage:</strong> 94.7%</p>
        </div>
      </div>
    </section>
  )
}

export default Education

