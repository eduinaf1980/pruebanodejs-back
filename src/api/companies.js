import { Router } from "express";
import { createCompanies, deleteCompanies, getCompanies, getCompany, updateCompanies } from "../controllers/companies.js";

import { Auth } from "../middlewares/auth.js"


const apiCompanies = Router();

apiCompanies.post('/companies', Auth, createCompanies);
apiCompanies.get('/companies', Auth, getCompanies);
apiCompanies.post('/companies/:id', Auth, getCompany);
apiCompanies.put('/companies', Auth, updateCompanies);
apiCompanies.delete('/companies/:nit', Auth, deleteCompanies);

export default apiCompanies;