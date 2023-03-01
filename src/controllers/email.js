import fs from "fs";
import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config();


export const sendFile = (req, res) => {
    const {fil, mail} = req.body;
    if(fs.writeFileSync('src/files/' + fil.name_file, fil.base64, {encoding:'base64'})){
        console.log("PRUEBA")
    }
    sendPdf(mail,fil.name_file)
    console.log('Enviado')
    res.send({ok: true, message: "Se envio con exito el correo"})
}

export const sendPdf = (mail, name, req, res)=>{

    let smtpTransport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        service:'Gmail',
        port:465,
        secure:true,
        auth:{
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD_SMTP,
        },
        tls:{rejectUnauthorized:false}
    })

    smtpTransport.sendMail({
        from: 'eaf1980@gmail.com',
        to: mail,
        subject:'Envio prueba email pdf',
        html:`
        Prueba envio mail con pdf.`,
       attachments:[
            {
                content:'src/files/'+name,
                filename: name,
                contentType: 'application/pdf',
                path:pathToAttachment
            }
        ]
    },function(error,info){

        if(error){
            console.log(error);
        }
        else{
            res.send({ok: true, message: 'El email ha sido enviado verifique por favor'})
        }
       
    })


}


