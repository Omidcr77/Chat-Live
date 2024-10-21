const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    pic: { type: String, required: true, default:
        "https://stock.adobe.com/search/images?k=default+user"
    },

},
 { timestamps: true}
)

const User = mongoose.model("User", userSchema);

module.exports = User;