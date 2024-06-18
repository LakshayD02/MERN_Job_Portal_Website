import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../assets/Pages/Home";
import About from "../assets/Pages/About";
import CreateJob from "../assets/Pages/CreateJob";
import MyJobs from "../assets/Pages/MyJobs";
import SalaryPage from "../assets/Pages/SalaryPage";
import UpdateJob from "../assets/Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../assets/Pages/JobDetails";
import Signup from "../components/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "https://mern-job-portal-website.vercel.app/", element: <Home/>},
        {
          path: "https://mern-job-portal-website.vercel.app/post-job",
          element: <CreateJob/>
        },
        
        {
          path: "https://mern-job-portal-website.vercel.app/my-job",
          element: <MyJobs/>
        },
        {
          path: "https://mern-job-portal-website.vercel.app/salary",
          element: <SalaryPage/>
        },
        {
          path: "https://mern-job-portal-website.vercel.app/edit-job/:id",
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
        {
          path: "https://mern-job-portal-website.vercel.app/job/:id",
          element: <JobDetails/>
        }

    ],
    },

    {
      path: "https://mern-job-portal-website.vercel.app/login",
      element: <Login/>
    },
    {
      path: "https://mern-job-portal-website.vercel.app/sign-up",
      element: <Signup/>
    }

  ]);

  export default router;
