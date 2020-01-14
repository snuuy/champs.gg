const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/build")));

//routes
const champion = require("./routes/championRoute");
const vote = require("./routes/voteRoute");

app.use("/api/champion", champion);
app.use("/api/vote", vote);

app.listen(process.env.PORT || 8000);
