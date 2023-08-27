/*COLLECTION 3 [Network]
This will contain the framework for adding relationships within your network and also functions with
removing or changing relationships overtime as demonstrated in the document below. */

const mongoose = require('mongoose');

const networkSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Network: [
        {
            peer_id: mongoose.Schema.Types.ObjectId,
            status: String,
            start_date: Date,
            end_date: Date
        }
    ]
});

const NetworkModel = mongoose.model('Network', networkSchema);

module.exports = NetworkModel;
