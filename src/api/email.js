import { Router } from "express";
import { sendEmail } from "../controllers/email.js";
import { Auth } from "../middlewares/auth.js"

const apiEmail = Router();

apiEmail.post('/email', Auth, sendEmail);

export default apiEmail;