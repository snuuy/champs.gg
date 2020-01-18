const express = require("express");
const router = express.Router();
const ChampionService = require("../services/championService");

router.get("/all", (req, res) => {
  ChampionService.getAllChampions(req.ip, (champions) => {
    if (champions != null) res.status(200).send(champions);
    else res.sendStatus(500)
  })
});

router.get("/:shortname", (req, res) => {
  ChampionService.getChampion(req.params.shortname)
    .then(champion => res.status(200).send(champion))
    .catch(err => res.status(400).send(err.message))
});

module.exports = router;
