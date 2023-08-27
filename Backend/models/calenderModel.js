//COLLLECTION 7 [Calendar]
// Here contains the information related to dates that the user chooses to input.
const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    "id of creator": mongoose.Schema.Types.ObjectId,
    Calendar: [
        {
            "Start Date of event": Date,
            "End Date of event": Date,
            "Name of event": String,
            "Description of event": String,
            "Associated links": String,
            "Urgancy Level": String,
            "reminder interval": String
        }
    ]
});

const CalendarModel = mongoose.model('Calendar', calendarSchema);

module.exports = CalendarModel;
