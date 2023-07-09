const nodemailer = require('nodemailer')
require('dotenv').config({ path: './config/.env' })

const sendEmail = async (subject, send_to, sent_from, reply_to, message) => {
    // creation d'email
    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 587,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
        tls:{
            rejectUnauthorized: false
        },
    })

    // option d'envoi d'email
    const options = {
        from: sent_from,
        to: send_to,
        subject: subject,
        html: message
    }

    // envoi du mail
    transporter.sendMail(options, function(err, info){
        if (err) {
            console.log(err);
        }
        console.log(info);
    })

}

module.exports = sendEmail