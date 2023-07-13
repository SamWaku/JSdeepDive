const express = require("express");
const app = express();
const cors = require('cors')
const path = require("path");
const router = require("./src/routes");
const viewRouter = require("./frontend/src/routes");
const connectDB = require("./src/config/connect");
const logger = require('morgan')

app.use(cors())
app.use(express.json());
app.use(logger('dev'))
app.use("/api", router);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(
    express.static("views", {
        extensions: ["html"],
    })
);
app.use("/", viewRouter);

const bootstrap = async () => {
    try {
        await connectDB; // connect to Database
        app.listen(4000);
    } catch (error) {
        console.log(error);
    }
};

bootstrap();
