import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../../components/PageHeader'
import axios from 'axios';

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`https://mern-job-portal-website.vercel.app/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    }, [])

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "Enter Your Resume Link",
            inputPlaceholder: "Enter the Link"
          });
          if (url) {
            Swal.fire(`Sucessfully Applied to Job Id:  ${id}`,  'success');
          } 
    }

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <PageHeader title={"Single Job Page"} path={'Single Job'}/>
        <div className="pt-16">
        <h2><span className="text-xl font-bold text-blue-500">Job Details: </span>{id}</h2>
<h1><span className="text-xl font-display text-gray-900">{job.jobTitle}</span></h1>

</div>
    <button className="bg-blue px-8 py-2 text-white" onClick={handleApply}>
        Apply Now
    </button>

    </div>
  )
}

export default JobDetails
