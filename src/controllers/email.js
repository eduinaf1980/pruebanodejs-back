import sgMail from "@sendgrid/mail";
import fs from "fs";

const pathToAttachment = '/Users/eduardo/Downloads/ticket.pdf';

export const sendEmail = async (req, res) => {
    const { direc, email } = req.body;
    sgMail.setApiKey('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')
    fs.readFile((pathToAttachment), (err, data) => {
        if (err) {
          console.log(err)
        }
        if (data) {
            const msg = {
                to: 'eaf1980@gmail.com', // Change to your recipient
                from: email, // Change to your verified sender
                subject: 'Sending with SendGrid is Fun',
                text: 'and easy to do anywhere, even with Node.js',
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                attachments: [
                    {
                        content: data.toString('base64'),
                        filename: 'ticket.pdf',
                        type: 'application/pdf',
                        disposition: 'attachment',
                        content_id: 'prueba',
                    }
                ]
            }
            sgMail
                .send(msg)
                .then(() => {
                    console.log('Email sent')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    })
}

