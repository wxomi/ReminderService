const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();

const sendBasicEmail = async (mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingEmail = async () => {
  try {
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    throw error;
  }
};

const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    throw error;
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await repo.update(ticketId, data);
    return response;
  } catch (error) {
    throw error;
  }
};

const subscribeEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;
  switch (service) {
    case "CREATE_TICKET":
      await sendBasicEmail();
      await createNotification(data);
      break;
    case "SEND_BASIC_MAIL":
      await sendBasicEmail(data);
    default:
      console.log("No valid event recieved");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmail,
  createNotification,
  updateTicket,
  subscribeEvents,
};
