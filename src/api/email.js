import { Router } from "express";
import { sendPdf, uploadFile, uploads } from "../controllers/email.js";
import { Auth } from "../middlewares/auth.js"

const apiEmail = Router();

apiEmail.post('/email', Auth, sendPdf);
apiEmail.post('/file', Auth, uploads)

export default apiEmail;