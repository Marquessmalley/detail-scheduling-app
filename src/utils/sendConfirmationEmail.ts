import emailjs from "@emailjs/browser";
import { Appointment } from "constants/interfaces";

export const sendEmail = (userAppointment: Appointment) => {
  emailjs
    .send(
      `${process.env.REACT_APP_EMAILJS_SERVICEID}`,
      `${process.env.REACT_APP_EMAILJS_TEMPLATEID}`,
      {
        appointment_date: userAppointment.date,
        appointment_time: userAppointment.startTime,
        service_name: userAppointment.selectedPackage,
        user_email: userAppointment.contactInfo.email,
      },
    )
    .then((result) => {
      console.log("Email sent successfully:", result.text);
    })
    .catch((error) => {
      console.log("Failed to send email:", error.text);
    });
};
