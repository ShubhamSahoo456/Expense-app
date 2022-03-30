const db = require("../config/connection");
const Expense = db.expense;

const getAllExpense = async (req, res, next) => {
  try {
    const expense = await Expense.findAll({});
    if (expense) {
      res.json(expense);
    }
  } catch (err) {
    console.log(err);
  }
};

const addExpense = async (req, res, next) => {
  try {
    console.log(req.body);
    const addData = await Expense.create(req.body);
    if (addData) {
      res.json(addData);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateExpense = async (req, res, next) => {
  try {
    const updateData = await Expense.update(req.body, {
      where: { id: req.params.id },
    });
    if (updateData) {
      res.json(updateData);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteExpense = async (req, res, next) => {
  try {
    const deleteData = await Expense.destroy({
      where: { id: req.params.id },
    });
    if (deleteData) {
      res.json(deleteData);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllExpense,
  addExpense,
  updateExpense,
  deleteExpense,
};
