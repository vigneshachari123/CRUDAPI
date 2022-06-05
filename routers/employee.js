const express = require("express");
const router = express.Router();
const Employee = require("../model/schema");

router.get("/", async (req, res) => {
  try {
    const emp = await Employee.find();
    res.json(emp);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    res.json(emp);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/", async (req, res) => {
  const emp = new Employee({
    empcode: req.body.empcode,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  });
  try {
    const a1 = await emp.save();
    res.json(a1);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    emp.firstname = req.body.firstname;
    emp.lastname = req.body.lastname;

    const a1 = await emp.save();
    res.json(a1);
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.body.id });
    res.send("deleted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
