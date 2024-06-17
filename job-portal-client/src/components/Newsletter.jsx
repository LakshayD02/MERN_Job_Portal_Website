import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
import Swal from 'sweetalert2';
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState(''); // State to store email address
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!email.trim()) {
      // Handle empty email error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter your email address.',
      });
      return; // Exit function if email is empty
    }

    // Simulate email submission to backend (replace with your backend logic)
      setEmail(''); // Clear email after successful submission
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'You have been subscribed to our newsletter!',
      });
  };

  // Handle resume upload (replace with your upload logic)
  const handleResumeUpload = (event) => {
    const newSelectedFile = event.target.files[0];
    setSelectedFile(newSelectedFile); // Update state with selected file

    if (!newSelectedFile) {
      return; // Handle no file selected
    }

    // Implement your resume upload logic here (e.g., send to backend)
    console.log('Selected file:', newSelectedFile);

    // Display success message and reset resume field
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your resume has been uploaded successfully!',
    }).then(() => {
      setSelectedFile(null); // Reset selected file state after success
    });
  };

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaEnvelopeOpenText /> Email Latest Jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Subscribe our Newsletter for latest job updates
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value="Subscribe"
            required
            onClick={handleSubscribe} // Handle submit button click
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Upload your resume here to get noticed faster by Top Companies.
        </p>
        <div className="w-full space-y-4">
          <input
            type="file" // Use input type="file" for resume upload
            id="resumeInput"
            accept=".pdf, .doc, .docx" // Specify allowed file types
            onChange={handleResumeUpload} // Handle file selection change
            className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
          />
          {/* Removed the button as it's unnecessary with a file input */}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

 // Import SweetAlert2

// const Newsletter = () => {
//   const [email, setEmail] = useState(''); // State to store email address

//   const handleSubscribe = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     if (!email.trim()) {
//       // Handle empty email error
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Please enter your email address.',
//       });
//       return; // Exit function if email is empty
//     }

//       setEmail(''); // Clear email after successful submission
//       Swal.fire({
//         icon: 'success',
//         title: 'Success!',
//         text: 'You have been subscribed to our newsletter!',
//       })
//     }

//   return (
//     <div>
//       <div className="">
//         <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
//           <FaEnvelopeOpenText /> Email Latest Jobs
//         </h3>
//         <p className="text-primary/75 text-base mb-4">
//           Subscribe our Newsletter for latest job updates
//         </p>
//         <div className="w-full space-y-4">
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Update state on change
//             className="w-full block py-2 pl-3 border focus:outline-none"
//           />
//           <input
//             type="submit"
//             value="Subscribe"
//             required
//             onClick={handleSubscribe} // Handle submit button click
//             className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
//           />
//         </div>
//       </div>
//     </div>

//      {/* 2nd Part below the newsletter */}
//      <div className="mt-20">
//      <h3 className="text-lg font-bold mb-2 flex items-center gap-2"><FaRocket/>
//          Get Noticed Faster</h3>
//          <p className="text-primary/75 text-base mb-4">Upload you resume here to net noticed faster by Top Companies.</p>
//  <div className="w-full space-y-4">
//  {/* <input
//      type="file"
//      id="resumeInput"
//      accept=".pdf, .doc, .docx"
//      // value={"Upload Your Resume"}
//      className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold"
//  /> */}
//  <button type='submit' className="w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold">Upload Your Resume</button>
 
//  </div>
//  </div>
//   )
      
// export default Newsletter