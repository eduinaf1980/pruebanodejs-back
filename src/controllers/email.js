import fs from "fs";
import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config();

export const sendFile = (req, res) => {
    const { fil, mail } = req.body;
    var base64Data = req.body.fil.base64.replace(/^data:application\/pdf;base64,/, "");
    fs.writeFileSync('src/files/' + fil.name_file, base64Data, { encoding: 'base64' })
    sendPdf(mail, fil.name_file)
    res.send({ ok: true, message: "Se envio con exito el correo" })
}

export const sendPdf = (mail, name, res) => {

    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD_SMTP,
        },
        tls: { rejectUnauthorized: false }
    })

    smtpTransport.sendMail({
        from: 'eaf1980@gmail.com',
        to: mail,
        subject: 'Envio correo de prueba PDF Adjunto',
        html: `Muy buenas, este es un correo de prueba de nvio de archivos pdf.`,
        attachments: [
            {
                content: 'src/files/' + name,
                filename: name,
                contentType: 'application/pdf',
                path: 'src/files/' + name
            }
        ]
    }, function (error) {
        if (error) {
            console.log(error);
        }
        else {
            fs.unlinkSync('src/files/' + name)
            res.send({ ok: true, message: 'El email ha sido enviado verifique por favor' })
        }

    })


}


