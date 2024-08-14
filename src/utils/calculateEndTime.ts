import { Appointment } from "constants/interfaces";

const calculateEndTime = (appointment: Appointment): string => {
  let endTime;
  const regexPattern = /(\d+)h(?: (\d+)m)?/;

  const duration = appointment.duration;

  const aptDate = new Date(`${appointment.date} ${appointment.startTime}`);

  const durationArr = duration.match(regexPattern);

  if (durationArr && durationArr[2]) {
    const endAppointmentHour =
      Number(aptDate.getHours()) + Number(durationArr[1]);
    const endAppointmentMinutes =
      Number(aptDate.getMinutes()) + Number(durationArr[2]);

    aptDate.setHours(endAppointmentHour, endAppointmentMinutes);
  } else if (durationArr) {
    const endAppointmentHour =
      Number(aptDate.getHours()) + Number(durationArr[1]);
    aptDate.setHours(endAppointmentHour);
  }
  endTime = aptDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format
  });

  return endTime;
};

export default calculateEndTime;
