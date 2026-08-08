"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const inbox = "sepehr.sharafi.123@gmail.com";
const escapeHtml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");
const isEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value) && value.length <= 254;

export const sendEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}) => {
  const { firstName, lastName, email, service, message } = formData;
  if (!firstName?.trim() || !lastName?.trim() || !isEmail(email) || !message?.trim()) {
    return { success: false };
  }
  const html = `
    <div style="font-family: sans-serif; font-size: 16px; line-height: 1.5; color: #212121;">
      <h1 style="font-size: 24px; color: #484848;">New Contact Form Submission</h1>
      <p>You have received a new message from your website contact form.</p>
      <p><strong>First Name:</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Last Name:</strong> ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(service)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Sterling Web Lab <onboarding@resend.dev>",
      to: inbox,
      replyTo: email,
      subject: "New Contact Form Submission",
      html,
    });
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};

export const sendAuditEmail = async (formData: {
  name: string;
  email: string;
  website: string;
  business: string;
  message: string;
}) => {
  const { name, email, website, business, message } = formData;
  if (!name?.trim() || !isEmail(email)) return { success: false };
  try {
    const url = new URL(website);
    if (!["http:", "https:"].includes(url.protocol)) return { success: false };
  } catch {
    return { success: false };
  }
  const html = `
    <div style="font-family: sans-serif; font-size: 16px; line-height: 1.5; color: #212121;">
      <h1 style="font-size: 24px; color: #484848;">New Website Audit Request</h1>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Website:</strong> ${escapeHtml(website)}</p>
      <p><strong>Business type:</strong> ${escapeHtml(business || "Not provided")}</p>
      <p><strong>Current challenge:</strong></p>
      <p>${escapeHtml(message || "Not provided").replace(/\n/g, "<br />")}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Sterling Web Lab <onboarding@resend.dev>",
      to: inbox,
      replyTo: email,
      subject: `Website Audit Request: ${website.replace(/[\r\n]/g, "").slice(0, 160)}`,
      html,
    });
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
