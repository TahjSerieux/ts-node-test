//COLLECTION 6 [messeges]
// Here contains each message with a specific conversations with its associated timestamp.

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    messages: {
        conversationId: mongoose.Schema.Types.ObjectId,
        senderId: mongoose.Schema.Types.ObjectId,
        content: String,
        createdAt: Date
    }
});

const MessageModel = mongoose.model('Message', messageSchema);

module.exports = MessageModel;


