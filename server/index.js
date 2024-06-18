const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth");
const noteRoutes = require("./Routes/notes");
dotenv.config({ path: ".env" });
const app = express();
// const allowedOrigins = ['http://localhost:5174'];
const PORT = 6969;



app.use(cors({
    origin: ['https://find-notes.vercel.app'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true


}));
app.use(bodyParser.json());
app.use(express.json());


try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Successfull");
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => {
    res.send("Server Is Running");
});


app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/files", express.static("files"));
app.options('*', cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Include OPTIONS method
    credentials: true
}));
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})
