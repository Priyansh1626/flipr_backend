require("dotenv").config();
require("./config/db")
const port = process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true,
}));

app.use(express.json());

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});