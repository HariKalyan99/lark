import dotenv from 'dotenv';
import connectToMongo from './DB/connectToMongo.js';
dotenv.config();
import express from 'express';

const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/", (request, response) => {
    return response.send("<h1>Hello from node-express server</h1>")
})



app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`)
    connectToMongo();
})

