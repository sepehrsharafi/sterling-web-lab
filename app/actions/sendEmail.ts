"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}) => {
  const { firstName, lastName, email, service, message } = formData;
  const html = `
    <div style="font-family: sans-serif; font-size: 16px; line-height: 1.5; color: #212121;">
      <h1 style="font-size: 24px; color: #484848;">New Contact Form Submission</h1>
      <p>You have received a new message from your website contact form.</p>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: `${firstName} ${lastName} <onboarding@resend.dev>`,
      to: "sepehr.sharafi.123@gmail.com",
      subject: "New Contact Form Submission",
      html,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
