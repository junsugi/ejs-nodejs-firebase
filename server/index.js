const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://junsugi:<password>@cluster0.3givi.mongodb.net/testApp?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("mongoDB Connected..."))
  .catch (err => console.log(err));

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/api/hello", (req, res) => {
    res.json({message: "안녕하세요~"});
});

app.post('/api/user/login', (req, res) => {
    return res.json({success: true});
})
