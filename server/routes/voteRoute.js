const express = require("express");
const router = express.Router();
const VoteService = require("../services/voteService");

router.post("/champion/", (req, res) => {
  VoteService.scoreChampion(req.body.championId, req.body.score, req.ip, (success, err) => {
    if (success) res.status(200).send()
    else res.status(400).send(err)
  })
});

module.exports = router;
