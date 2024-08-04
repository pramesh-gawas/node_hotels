const express = require("express");
const router = express.Router();

const menuItem = require("../menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new menuItem(data);
    const savedMenu = await newMenuItem.save();
    console.log("menu saved");
    res.status(200).json(savedMenu);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  const response = await menuItem.find();
  res.status(500).json(response);
  console.log("menu data fetched");
});

router.get("/:taste", async (req, res) => {
  try {
    const newtaste = req.params.taste;
    if (newtaste == "sweet" || newtaste == "spicy" || newtaste == "sour") {
      const response = await menuItem.find({ taste: newtaste });
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
