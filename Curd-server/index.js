const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const port = 5000;

// middilware
app.use(cors());

app.use(express.json());

// app.get('/users', (req, res) => {
//     res.send(users)
// })

//mongodb start

const uri =
  "mongodb+srv://Curd-Oparation:Curd-Oparation@cluster0.3aawf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const database = client.db("CURD-OPARATION");
    const userColection = database.collection("users");
    // userColection.insertMany(users)
    app.get("/users", async (req, res) => {
      const cursor = userColection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });
    app.post("/users",async (req, res) => {
      const FrontendUser = req.body;
     const result= await userColection.insertOne(FrontendUser);
      res.send(result);
    });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
  }
}
run().catch(console.dir);

//mongodb end
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => console.log(`app listen on ${port}`));
