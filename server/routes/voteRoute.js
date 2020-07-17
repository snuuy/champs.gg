const express = require("express");
const router = express.Router();
const VoteService = require("../services/voteService");

// When a user publically votes, their vote is sent to the database
router.post("/champion/", (req, res) => {
  VoteService.scoreChampion(req.body.championId, req.body.score, req.ip, (success, err) => {
    if (success) res.status(200).send()
    else res.status(400).send(err)
  })
});

module.exports = router;