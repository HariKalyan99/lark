import dotenv from 'dotenv';
import connectToMongo from './DB/connectToMongo.js';
dotenv.config();



connectToMongo();