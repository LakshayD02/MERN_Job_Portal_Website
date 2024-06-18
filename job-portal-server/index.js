const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;
require('dotenv').config()
// Middleware
app.use(express.json())
app.use(cors( {
origin: ["https://https://mern-job-portal-website.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true
}
));

app.get('/', (req, res) => {
  res.send('Hello Developer')
})

// Username - lakshay22dhoundiyal
// Password - u97klyTxI0FAnbnn


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-portal.7ieojkl.mongodb.net/?retryWrites=true&w=majority&appName=job-portal`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //Create Database

    const db = client.db("mernJobPortal");
    const jobsCollections = db.collection("demoJobs");

    // Posting a Job

    app.post("/post-job", async(req, res) => {
      const body = req.body;
      body.createAt = new Date();
      // console.log(body)
      const result = await jobsCollections.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result);
        }else{
          return res.status(404).send({
            message: "Failed to post job! Try again later",
            status: false
          })
      }
    })

    // Get all jobs
    app.get("/all-jobs", async(req, res) => {
      const jobs = await jobsCollections.find({}).toArray()
      res.send(jobs);
    })

    // Get Single job using ID
    app.get("/all-jobs/:id", async(req, res) => {
      const id = req.params.id;
      const job = await jobsCollections.findOne({
        _id: new ObjectId(id)
      })
      res.send(job)
    })

    // Get Jobs by email

    app.get ("/myJobs/:email", async(req, res) => {
      // console.log(req.params.email)
      const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
      res.send(jobs)
    })

    // Delete a Job
    app.delete("/job/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await jobsCollections.deleteOne(filter);
      res.send(result)
    })

    //Update a Job
    app.patch("/update-job/:id", async(req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true};
      const updateDoc = {
        $set: {
          ...jobData
        },
    };

    const result = await jobsCollections.updateOne(filter, updateDoc, options);
    res.send(result)
  })

  // Resume Submission
  // API endpoint to handle job applications (POST request)
app.post('/job/:id', async (req, res) => {
  const { jobId, resumeLink } = req.body;

  try {
    const newApplication = new JobApplication({ jobId, resumeLink });
    await newApplication.save();

    res.json({ message: 'Application submitted successfully!' });
    console.log('Application saved:', newApplication);
  } catch (error) {
    console.error('Error saving application:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
