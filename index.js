const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// sunshine
// NO5BygFoxPCaY0r6
//middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hesma7h.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const fresherJobsCollection = client.db('sunshine').collection('fresherJobs');
        const experiencedJobsCollection = client.db('sunshine').collection('experiencedJobs');

        app.get('/fresherjobs', async (req, res) => {
            const query = {};
            const cursor = fresherJobsCollection.find(query);
            const jobs = await cursor.toArray();
            res.send(jobs);
        });

        app.get('/experiencedjobs', async (req, res) => {
            const query = {};
            const cursor = experiencedJobsCollection.find(query);
            const jobs = await cursor.toArray();
            res.send(jobs);
        });
    }
    finally {

    }
}

run().catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('sunshine server running');
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
}); 