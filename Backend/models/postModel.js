
/**COLLECTION 4 [Posts]
Base level Object [Post] */
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Post: {
        isrepost: Boolean,
        user_id: mongoose.Schema.Types.ObjectId,
        Description: String,
        image: String,
        createdAt: Date,
        likes: [
            {
                User_id: mongoose.Schema.Types.ObjectId,
                CreatedAt: Date
            }
        ],
        comments: [
            {
                _id: mongoose.Schema.Types.ObjectId,
                User_id: mongoose.Schema.Types.ObjectId,
                Comment: String,
                CreatedAt: Date
            }
        ],
        reposts: [
            {
                User_id: mongoose.Schema.Types.ObjectId,
                CreatedAt: Date
            }
        ],
        send: [
            {
                User_id: mongoose.Schema.Types.ObjectId,
                SentAt: Date,
                Reciver_id: mongoose.Schema.Types.ObjectId
            }
        ]
    }
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;
