const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("successfully fetched");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "chef" || worktype == "manager" || worktype == "waiter") {
      const data = await Person.find({ work: worktype });
      console.log("response fetched");
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log({ error: "error fetching worktype" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      { new: true, runValidators: true }
    );

    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: "error fetching id" });
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "person deleted successfully" });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
