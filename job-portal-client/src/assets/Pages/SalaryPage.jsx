import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'

const SalaryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);

  useEffect ( () => {
    fetch("salary.json").then(res => res.json()).then(data => setSalary(data))
  }, [searchText])
  const handleSearch = () => {
    const filter = salary.filter((job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    console.log(filter)
    setSalary(filter)
  }

  console.log(searchText)

  return (
    <div className='max-w-screen container mx-auto xl:px-24 px-4'>
        <PageHeader title={"Estimate Salary"} path={"Salary"}/>
    
    <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Type Here to Search"
                className="py-2 pl-3 border focus-within:ring-indigo-600
                lg:w-6/12 mb-4 w-full"
                onChange={e => setSearchText(e.target.value)}
                style={{ // Inline style to set focus ring color
                  outlineColor: '#4F46E5', // Replace with your desired blue color
                }}
            />
            <button onClick={handleSearch} className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4">
                Search
            </button>
        </div>
    </div>
    
    {/* Salary Display Card */}
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center">
      {
        salary.map((data) => (
          <div key={data.id} className='shadow px-4 py-8'>
            <h4 className="font-semibold text-xl">{data.title}</h4>
            <p className="my-2 font-medium text-blue text-lg">{data.salary}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/" className="font-bold">{data.status}</a>
              <a href="/" className="font-bold">{data.skills}</a>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default SalaryPage