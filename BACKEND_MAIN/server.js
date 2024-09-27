// import http from 'http';


// const server = http.createServer((request, response) => {
//     if(request.method === "GET"){
//         if(request.url === "/"){
//             response.writeHead(200, {'Content-Type': 'application/json'});
//             response.write(JSON.stringify("Hello from the node-http server"))
//             response.end();
//         }else if(request.url === "/server"){
//             response.write("<h1>Hello from http server</h1>");
//             response.end();
//         }
//     }else if (request.method === "POST"){
//         let body = "";
//         request.on("error", (err) =>{
//             console.log("Error", err.message);
//         }).on("data", (chunk) => {
//             body+=chunk;

//         }).on("end", () => {
//             body = JSON.parse(body);
//             response.writeHead(201, {'Content-Type':'application/json'});
//             response.write(JSON.stringify(body));
//             response.end();
//         })
//     }
// })

// server.listen(PORT, () => {
//     console.log(`Listening on the port ${PORT}`)
// })

// This is a simple node-http template


import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
let PORT = 5000 || process.env.PORT;

app.use("/api/auth/", authRouter);

app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`)
})