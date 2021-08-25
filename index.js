const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://ramziosta:dbUserPassword@cluster0.lznw5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('ufo');
    const alien = database.collection('sightings');

    // Query for a movie that has the title 'Back to the Future'
    const query = { State :"NJ" };
    const tt = await alien.findOne(query);

    console.log(tt);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);mit
