import {sendEmail} from '../../utils/nodemailer';

async function handler (req, res) {
  `
    req = {
      email: string (from middleware),
      ...
    }
  `
  await sendEmail(
    "samratsahoo2013@gmail.com",
    "sriman.4.2021@doonschool.com",
    "Sriman",
    "Samrat Sahoo"
  )
  res.status(201).json({
    success: true,
    message: "Volunteer has been created"
  });
}

export default handler;