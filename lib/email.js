import { createTransport } from 'nodemailer';

export async function sendEmail(toEmail, data) {
  try {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "DDefence",
      to: toEmail,
      subject: `A Potential Client Just Contacted You`,
      text: 
      `Hi, A Potential Client Just Reached Out. Here are the Details \n
        Name: ${data.name} \n
        Email: ${data.email} \n
        Phone: ${data.phone} \n
        Requesting Service: ${data.service} \n
        Message: ${data.message}
      `
      ,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return true
  } catch (error) {
    console.error('Error sending email:', error);
    return false
  }
}
