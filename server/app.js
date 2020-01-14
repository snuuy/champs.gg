const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const champion = require("./routes/championRoute");
const vote = require("./routes/voteRoute");

//use routes
app.use("/api/champion", champion);
app.use("/api/vote", vote);

//serve frontend files
app.use(express.static(path.join(__dirname, "../client/build")));

//this must be the last route
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

app.listen(process.env.PORT || 8000);
