import { Router } from "express";
import { sendPdf, uploadFile, uploads, sendFile } from "../controllers/email.js";
import { Auth } from "../middlewares/auth.js"

const apiEmail = Router();

apiEmail.post('/email/addfile', Auth, sendFile);
apiEmail.post('/file', Auth, uploads)


export default apiEmail;