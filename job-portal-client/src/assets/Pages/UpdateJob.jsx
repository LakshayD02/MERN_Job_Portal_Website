
import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable";

const UpdateJob = () => {
    const {id} = useParams();
    // console.log(id)
    const {_id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate,
        experienceLevel, companyLogo, employmentType, description, postedBy, skills} = useLoaderData();
        const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills = selectedOption;
        // console.log(data);
        fetch(`https://mern-job-portal-website.vercel.app/update-job/${id}`, {
          method: "PATCH",
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if(result.acknowledged === true){
            alert("Job Updated Successfully");
          }
          reset()
          window.location.href = 'https://mern-job-portal-lakshay.vercel.app/my-job';
        });
        };

        const options = [
            {value: "JavaScript", label: "JavaScript"},
            {value: "HTML", label: "HTML"},
            {value: "CSS", label: "CSS"},
            {value: "DOM", label: "DOM"},
            {value: "Asynchronous Programming", label: "Asynchronous Programming"},
            {value: "React", label: "React"},
            {value: "Node.js", label: "Node.js"},
            {value: "Express.js", label: "Express.js"},
            {value: "MongoDB", label: "MongoDB"},
            {value: "SQL", label: "SQL"},
            {value: "Python", label: "Python"},
            {value: "Java", label: "Java"},
            {value: "C++", label: "C++"},
            {value: "Ruby", label: "Ruby"},
            {value: "PHP", label: "PHP"},
            {value: "Go", label: "Go"},
            {value: "Rust", label: "Rust"},
            {value: "TypeScript", label: "TypeScript"},
            {value: "Angular", label: "Angular"},
            {value: "Vue.js", label: "Vue.js"},
            {value: "Flutter", label: "Flutter"},
            {value: "React Native", label: "React Native"},
            {value: "Ionic", label: "Ionic"},
            {value: "Kotlin", label: "Kotlin"},
            {value: "Swift", label: "Swift"},
            {value: "Other", label: "Other"}
            
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    {/* Form */}
    <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
    
        {/* First Row */}
        <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Job Title</label>
            <input type="text" placeholder='Enter Job Title' defaultValue={jobTitle} 
            {...register("jobTitle", { required: true })} className='create-job-input'/>
            </div>
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Company Name</label>
            <input type="text" placeholder='Ex: Google' defaultValue={companyName}
            {...register("companyName", { required: true })} className='create-job-input'/>
            </div>
        </div>
    
        {/* 2nd Row */}
        <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Minimum Salary</label>
            <input type="text" placeholder='Ex: 3LPA' 
            {...register("minPrice")} className='create-job-input' defaultValue={minPrice}/>
            </div>
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Maximum Salary</label>
            <input type="text" placeholder='Ex: 20LPA' 
            {...register("maxPrice", { required: true })} className='create-job-input' defaultValue={maxPrice}/>
            </div>
        </div>
    
        {/* Third Row */}
    
        <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Salary Type</label>
            <select {...register("salaryType", { required: true })} className='create-job-input'>
            <option value={salaryType}>{salaryType}</option>
            <option value="Hourly">Hourly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
            </div>
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Job Location</label>
            <input type="text" placeholder='Ex: Seattle' defaultValue={jobLocation}
            {...register("jobLocation", { required: true })} className='create-job-input'/>
            </div>
        </div>
    
        {/* Fourth Row */}
    
        <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Job Posting Date</label>
            <input type="date" placeholder='Ex: 24-05-30' defaultValue={postingDate}
            {...register("postingDate")} className='create-job-input'/>
            </div>
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Experience Level</label>
            <select {...register("experienceLevel", { required: true })} className='create-job-input'>
            <option value={experienceLevel}>{experienceLevel}</option>
            <option value="Fresher/No Experience">Fresher</option>
            <option value="Internship">Internship</option>
            <option value="Remote Work">Experienced</option>
          </select>
            </div>
        </div>
    
        {/* Fifth Row */}
    
    <div className="">
    <label className='block mb-2 text-lg'>Required Skill Sets</label>
    <CreatableSelect
    defaultValue={skills}
    onChange={setSelectedOption}
    options={options}
    isMulti
    className='create-job-input py-4'/>
    </div>
    
    {/* Sixth Row */}
    <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Company Logo</label>
            <input type="url" placeholder='Ex: Your Company Logo URL' defaultValue={companyLogo}
            {...register("companyLogo")} className='create-job-input'/>
            </div>
            <div className="lg:w-1/2 w-full">
            <label className='block mb-2 text-lg'>Employment Type</label>
            <select {...register("employmentType", { required: true })} className='create-job-input'>
            <option value={employmentType}>{employmentType}</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Temporary">Temporary</option>
          </select>
            </div>
        </div>
    
    {/* 7th Row */}
    <div className="w-full">
    <label className='block mb-2 text-lg'>Job Description</label>
    <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700' 
    rows={6}
    defaultValue={description}
    placeholder='Enter Job Description'
    {...register("description", { required: true })}
    style={{ resize: 'none' }}/>
    </div>
    
    {/* Last Row */}
    <div className="w-full">
      <label className='block mb-2 text-lg'>Employee Email</label>
      <input type="email" placeholder='Ex: employee@gmail.com' defaultValue={postedBy}
            {...register("postedBy", { required: true })} className='create-job-input'/>
    
    </div>
    
    
          <input type="submit" className='block bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
        </form>
    </div>
        </div>
  )
}

export default UpdateJob
