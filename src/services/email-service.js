const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();

// const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
//   try {
//     const response = await
//     console.log(response);
//   } catch (error) {
//     throw error;
//   }
// };

const fetchPendingEmail = async (timeStamp) => {
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

module.exports = {
  // sendBasicEmail,
  fetchPendingEmail,
  createNotification,
  updateTicket,
};
