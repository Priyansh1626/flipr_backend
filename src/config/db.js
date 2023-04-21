const mongoose = require('mongoose');
require("dotenv").config();
const mongoURI = process.env.DB_CONNECT;
mongoose.set('strictQuery', false);
const connect = () => { mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) }
connect();
if (connect) {
    console.log("connected to db")
} else {
    console.log("Not connected to db")
}
