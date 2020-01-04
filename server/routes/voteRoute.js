const express = require("express");
const router = express.Router();
const VoteService = require("../services/voteService");

router.post("/champion/", (req, res) => {
  const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
  VoteService.scoreChampion(req.body.championId, req.body.score, ip)
    .then(() => res.status(200))
    .catch(err => res.status(400).send(err.message));
});

module.exports = router;
