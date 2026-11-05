const { Message } = require('../models');

const createMessage = async (data) => {
  return await Message.create({
    name: data.name,
    email: data.email,
    subject: data.subject || 'Portfolio Inquiry',
    message: data.message,
  });
};

const getAllMessages = async () => {
  return await Message.findAll({
    order: [['createdAt', 'DESC']],
  });
};

const markMessageAsRead = async (id) => {
  const msg = await Message.findByPk(id);
  if (!msg) return null;
  return await msg.update({ isRead: true });
};

module.exports = {
  createMessage,
  getAllMessages,
  markMessageAsRead,
};
