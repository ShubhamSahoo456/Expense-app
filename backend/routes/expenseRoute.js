const express = require("express");
const {
  getAllExpense,
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");
const router = express.Router();

router.get("/getallExpense", getAllExpense);

router.post("/addExpense", addExpense);

router.put("/updateExpense/:id", updateExpense);

router.delete("/deleteExpense/:id", deleteExpense);

module.exports = router;
