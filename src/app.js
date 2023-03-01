import express from "express";
import apiCompanies from "./api/companies.js";
import apiItems from "./api/items.js";
import apiUsers from "./api/users.js";
import apiEmail from "./api/email.js";
import cors from "cors";
import bodyParser from "body-parser";

const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }

const app = express();
app.use(cors(corsOptions));
app.use(express.json({limit: '2mb'}));

app.use(apiCompanies);
app.use(apiItems);
app.use(apiUsers);
app.use(apiEmail);

export default app;