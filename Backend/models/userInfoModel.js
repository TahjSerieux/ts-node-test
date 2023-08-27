
/**COLLECTION 2 [User info]
Base Level Object [User info]
This document containing the detailed information of each user will contain and overarching ID that
is attached to that specific document and the specific [user_id] that links the information within the
document to a specific user. */
const mongoose = require('mongoose')

// Define the schema
const userInfoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    "User info": {
        User_id: mongoose.Schema.Types.ObjectId,
        Contact: {
            Email: String,
            "Alternate Email": String,
            "Phone Number": String
        },
        Diversity_Info: {
            Gender: String,
            Nationality: String,
            Ethnicity: String,
            Race: String,
            Pronouns: String
        },
        Background_Info: {
            Education: [
                {
                    "Level of education": String,
                    "Field of study": String,
                    "School Name": String,
                    Country: String,
                    "School Location": String,
                    "Currently Enrolled Status": Boolean,
                    "From Date": Date,
                    "To Date": Date
                }
            ],
            Certifications: [
                {
                    "Certification / license name": String,
                    "Does expire": Boolean,
                    "From Date": Date,
                    "To Date": Date,
                    Description: String
                }
            ],
            Skills: [String],
            Work_Experience: [
                {
                    "Job Title": String,
                    "Company Name": String,
                    Country: String,
                    "City, State": String,
                    "Currently Working": Boolean,
                    "From Date": Date,
                    "To Date": Date,
                    Description: String
                }
            ]
        },
        Statuses: {
            Mentee_status: Boolean,
            Mentor_status: Boolean
        }
    },
    valid_from: Date,
    valid_to: Date
},{timestamps:true, collection:'UsersInfo'});

const userInfoModel =  mongoose.model('UserInfo',userInfoSchema)