const express = require("express");
const app = express();

//controllers
const champion = require("./controllers/championController");

app.use("/api/champion", champion);

app.listen(process.env.PORT || 8000);
