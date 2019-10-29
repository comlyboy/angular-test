// cors gives permissin to  "GET, POST, PUT, PATCH, DELETE, OPTIONS" capability
// mongoose makes schema possible in mongo DB
// bodyparser exposes the body portion of an incoming request on "req.body"


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import dataRoutes from "./routes/data";


const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


// permissions
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});


// For various routes
app.use('/api', dataRoutes);



export default app;