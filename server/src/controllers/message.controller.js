const messageService = require('../services/message.service');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const sendMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return errorResponse(res, 400, 'Name, email, and message are required fields');
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return errorResponse(res, 400, 'Please provide a valid email address');
    }

    const newMessage = await messageService.createMessage({
      name,
      email,
      subject,
      message,
    });

    return successResponse(res, 201, 'Message delivered successfully! I will get back to you soon.', {
      id: newMessage.id,
      createdAt: newMessage.createdAt,
    });
  } catch (error) {
    next(error);
  }
};

const getMessages = async (req, res, next) => {
  try {
    const messages = await messageService.getAllMessages();
    return successResponse(res, 200, 'Messages retrieved', messages);
  } catch (error) {
    next(error);
  }
};

const markAsRead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await messageService.markMessageAsRead(id);

    if (!updated) {
      return errorResponse(res, 404, 'Message not found');
    }

    return successResponse(res, 200, 'Message marked as read', updated);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  sendMessage,
  getMessages,
  markAsRead,
};
