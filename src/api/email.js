import { Router } from "express";
import { sendFile } from "../controllers/email.js";
import { Auth } from "../middlewares/auth.js"

const apiEmail = Router();

apiEmail.post('/email/addfile', Auth, sendFile);


export default apiEmail;