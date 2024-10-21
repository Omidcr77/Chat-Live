const { default: mongoose } = require('mongoose')
const mangoose = require('mongoose')

const chatModel = mangoose.Schema(
    {
        chatName: {
            type: String, trim: true},
        isGroupChat: {type: Boolean, default: false},
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    timestamps: true,
    
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;


// chatName
// isGroupChat
// Users
// latestMessages
// groupAdmin