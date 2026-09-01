import axios from "axios"

export default async function contactUsEmail(data) {
  const emailServiceUrl = "https://geo.azmag.gov/services/api/contact/contactUs";

  try {
    const response = await axios.post(emailServiceUrl, { ...data });
    console.log("Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}