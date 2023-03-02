const { response } = require("express");
const express = require("express");

const router = express.Router();
const assetsRouter = router;


assetsRouter.get("/", (req, res) => {
  res.status(200).send(" Assets/ working");
});

assetsRouter.post("/Assets", (req, res) => {
  res.status(400).json({ msg: "Here" });
});

assetsRouter.get("/cableConnetors", (req, res) => {
  res.status(200).send(`getting ${req.query.limit} cableconnector`);
});

assetsRouter.get("/computers", (req, res) => {
  res.status(200).send("Assets/computer working");
});

assetsRouter.get("/monitors", (req, res) => {
  res.status(200).send("assets / monitors working");
});

assetsRouter.get("/networkEquipment", (req, res) => {
    res.status(200).send("Assets/ Network Equipment working");
  });
  
  assetsRouter.get("/peripherals", (req, res) => {
    res.status(200).send("assets /  working");
  });

module.exports = assetsRouter;