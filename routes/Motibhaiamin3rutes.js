const express = require("express");
const Motibhaiamin3rutes = express.Router();
const Motibhaiamin3 = require("../models/Motibhaiamin3");

Motibhaiamin3rutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const newPerson = new Motibhaiamin3(data);
    const savedPerson = await newPerson.save();
    console.log("data save");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Motibhaiamin3rutes.get("/:lname", async (req, res) => {
  try {
    const lnametype = req.params.lname;
    console.log(lnametype);

    const data = await Motibhaiamin3.find({ lname: lnametype });
    if (!data) {
      res.status(500).json({
        message: "No data found",
      });
    }
    0;
    console.log("data fatch");
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
Motibhaiamin3rutes.get("/", async (req, res) => {
  try {
    const data = await Motibhaiamin3.find();
    console.log("data fatch");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

Motibhaiamin3rutes.get("/:lname", async (req, res) => {
  try {
    const { lname } = req.params;

    const data = await Motibhaiamin3.findOne({ lname: lname });
    if (!data) {
      res.status(500).json({
        message: "No data found",
      });
    }
    0;
    console.log("data fatch");
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
Motibhaiamin3rutes.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updateField = req.body;
    const data = await Motibhaiamin3.findOne({ _id: personId });
    const response = await Motibhaiamin3.findByIdAndUpdate(data, updateField, {
      new: true,
      runValidators: true,
    });
    console.log("data updated");
    res.status(200).json(response);

    if (!response) {
      return res.status(404).json({ message: "Person not found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
Motibhaiamin3rutes.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const data = await Motibhaiamin3.findOne({ _id: personId });

    const reminder = await Motibhaiamin3.findOneAndDelete(data);
    if (!reminder) {
      return res.status(404).json({ message: "No Menu with this ID" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "person deleted success" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = Motibhaiamin3rutes;
