const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://abhishekgadhave222:IWDCvaE7IG0BfZVj@namastenode.llf0l.mongodb.net/";

const client = new MongoClient(url);
// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // Insert some documents

  const data = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123",
    city: "New York",
  };
  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);
  //Read
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({}, true);
  console.log("Total documents =>", countResult);

  const result = await collection.find({ firstName: "John" }).toArray();
  console.log("result", result);

  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//notes
// go to mongoDB
// Create a free M0 cluster
// create a user
// Get the connection string
// install mongodb compass
// create connection using below connection string
// create a database
// crud operations
