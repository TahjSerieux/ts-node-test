
/*COLLECTION 5 [Conversations]
Here will contain the conversations that you will have in dms with others. It holds the data of people
you have had conversations with*/
const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Conversations: {
        participants: [mongoose.Schema.Types.ObjectId],
        createdAt: Date,
        updatedAt: Date
    }
});

const ConversationModel = mongoose.model('Conversation', conversationSchema);

module.exports = ConversationModel;
