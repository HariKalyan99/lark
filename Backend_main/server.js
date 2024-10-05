import dotenv from 'dotenv';
import connectToMongo from './DB/connectToMongo.js';
import cookieParser from 'cookie-parser';
dotenv.config();
import express from 'express';
import authRouter from './routes/auth.routes.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use("/api/auth", authRouter);



app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`)
    connectToMongo();
})






