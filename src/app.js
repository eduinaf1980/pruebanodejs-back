import express from "express";
import apiCompanies from "./api/companies.js";
import apiItems from "./api/items.js";
import apiUsers from "./api/users.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(apiCompanies);
app.use(apiItems);
app.use(apiUsers);

export default app;