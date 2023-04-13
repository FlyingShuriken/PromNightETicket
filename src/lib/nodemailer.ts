import nodemailer from "nodemailer";
// import oauth from "./gmail-ticket-oauth.json";

const email = process.env.GMAIL_ADDRESS;
const password = process.env.GMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	auth: {
		user: email,
		pass: password,
	},
});

export const mailOptions = {
	from: email,
};
