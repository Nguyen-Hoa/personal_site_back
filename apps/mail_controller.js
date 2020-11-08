//Sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sendMail = (req, res) => {
    const body = req.body;
    console.log(body);

    const msg = {
        to: body.to,
        from: body.from,
        subject: body.subject,
        text: body.text,
      };

    sgMail.send(msg)
        .then(() => {
            console.log('Message sent!');
            return res.status(200).json({success: true, message: 'Message sent!'});
        })
        .catch(e => {
            console.log(e);
            return res.status(400).json({success: false, error: e});
        });
}

module.exports = {sendMail};