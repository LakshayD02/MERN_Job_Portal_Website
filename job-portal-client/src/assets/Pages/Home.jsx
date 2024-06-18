import { useEffect, useState } from "react";
import Banner from "../../components/Banner"
import Card from "../../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../../sidebar/Sidebar";
import Newsletter from "../../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mern-job-portal-website.vercel.app/all-jobs").then(res => res.json()).then(data => {
      setJobs(data);
      setIsLoading(false)
    })
  }, [])

  // console.log(jobs)

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  // FILTER JOBS BY TITLE
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // console.log(filteredItems)

  // Radio Filtering

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // Button based Filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  //Calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex};
  }

  // Function for the next page
const nextPage = () => {
  if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
    setCurrentPage(currentPage + 1);
  }
}

// Function for the previous page

const prevPage = () => {
  if(currentPage > 1){
    setCurrentPage(currentPage - 1)
  }
}


  //Main Function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //Filtering Input Items
    if(query){
      filteredJobs = filteredItems;
    }

    //Category Filtering

    if(selected) {
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate,

      }) =>
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    // Slice the data based on current page
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)

    return filteredJobs.map((data, i) => <Card key ={i} data={data}/>)
  }

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    
    {/* Main Content */}
    <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
      {/* Left Side */}
     <div className="bg-white p-4 rounded">
      <Sidebar handleChange={handleChange} handleClick={handleClick}/>
     </div>

     {/* Jobs Cards */}
     <div className="col-span-2 bg-white p-4 rounded-sm"> 

      {
        isLoading ? (<p className="font-medium">Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) : <>
        <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
        <p className="">No Data Found!</p>
        </>
      }

      {/* PAGINATION */}

      {
        result.length > 0 ? (
          <div className="flex justify-center mt-4 space-x-8">
            <button onClick={prevPage} disabled={currentPage === 1} className="hover:underline font-bold">
              Previous
            </button>
            <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)} </span>
            <button onClick={nextPage} disabled = {currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className="hover:underline font-bold">
              Next
            </button>
          </div>
        ) : ""
      }
    
    </div>

{/* Right Side */}
     <div className="bg-white p-4 rounded"><Newsletter/></div>
    </div>
    
    </div>
  )
}

export default Home
