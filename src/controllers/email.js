import fs from "fs";
import path from "path"
import nodemailer from "nodemailer"
import multer from "multer"
import env from "dotenv"
env.config()

const pathToAttachment = '/Users/eduardo/Downloads/ticket.pdf';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

export const uploads = (req) => {
    const {myFile} = req.body;
    console.log(req.body)
    upload.single('myFile')
}

export const uploadFile = (req, res) => {
    res.send({ data: 'Enviar un archivo' })
}

export const sendPdf = (req,res)=>{

    const attachment = fs.readFileSync(pathToAttachment).toString("base64")

    let smtpTransport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        service:'Gmail',
        port:465,
        secure:true,
        auth:{
            user: 'eaf1980@gmail.com',
            pass: 'bvvcllvzoxljblui'
        },
        tls:{rejectUnauthorized:false}
    })

    smtpTransport.sendMail({
        from: 'ama.eduinaf1980@gmail.com',
        to: 'eaf1980@gmail.com',
        subject:'Pdf Generate document',
        html:`
        Testing Pdf Generate document, Thanks.`,
        attachments:[
            {
                content:attachment,
                filename:'ticket.pdf',
                contentType: 'application/pdf',
                path:pathToAttachment
            }
        ]
    },function(error,info){

        if(error){
            console.log(error);
        }
        else{
            res.send("Mail has been sended to your email. Check your mail")
        }
       
    })


}


