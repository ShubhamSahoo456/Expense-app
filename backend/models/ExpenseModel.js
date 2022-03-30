module.exports = (sequelize, Datatypes) => {
  const Expense = sequelize.define(
    "expense_tbl",
    {
      amount: {
        type: Datatypes.FLOAT(10, 3),
        allowNull: false,
      },
      date: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      description: {
        type: Datatypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return Expense;
};
