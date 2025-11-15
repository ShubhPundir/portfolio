import Card from './Card'

const Education = () => {
  return (
    <section className="text-center py-5 px-[5%] bg-[#f8f9fa]">
      <h2 className="text-[28px] text-[#333] mb-5">Education</h2>
      <div className="flex flex-row justify-center items-start gap-5 flex-nowrap">
        <Card 
          title="Bachelor of Technology in Computer Science" 
          bgColor="white" 
          textAlign="center"
          className="flex-1"
        >
          <p className="text-sm text-[#555] my-[3px]">The Northcap University, 2022 - 2026</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>CGPA:</strong> 8.98</p>
        </Card>

        <Card 
          title="ISC: Grade 12th" 
          bgColor="white" 
          textAlign="center"
          className="flex-1"
        >
          <p className="text-sm text-[#555] my-[3px]">Sri Sri Academy, 2020 - 2022</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Percentage:</strong> 90.0%</p>
        </Card>

        <Card 
          title="ICSE: Grade 10th" 
          bgColor="white" 
          textAlign="center"
          className="flex-1"
        >
          <p className="text-sm text-[#555] my-[3px]">Sri Sri Academy, 2020 - 2020</p>
          <p className="text-sm text-[#555] my-[3px]"><strong>Percentage:</strong> 94.7%</p>
        </Card>
      </div>
    </section>
  )
}

export default Education

