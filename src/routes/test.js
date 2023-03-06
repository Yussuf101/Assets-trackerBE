const express = require("express");

const { addTest, listTest } = require("../Controllers/test");

const testRouter = express.Router();

testRouter.get("/", async (req, res) => {
  try {
    res.status(200).send(await listTest());
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

testRouter.post("/", async (req, res) => {
  try {
    await addTest(req.body.name);
    res
      .status(201)
      .json({ msg: `Test name ${req.body.name} has been created` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = testRouter;
