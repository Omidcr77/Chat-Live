const express = require("express");
const { chats } = require("./data"); 
const dotenv = require('dotenv')
const app = express();

dotenv.config();
app.get('/', (req, res) => {
    res.send("API is Running successfully..");
});


app.get('/api/chat', (req, res) => {
    res.json(chats); 
});

app.get('/api/chat/:id', (req, res) => {
    console.log(req.params.id);
    const singleChat = chats.find( c => c._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log('Server is running on port: '+PORT);
});
