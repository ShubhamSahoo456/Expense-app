import react, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseContext } from "../context/ExpensesContext";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);

  return (
    <>
      <ExpenseOutput
        expenses={expenseCtx.expenses}
        expensePeriod="All Expenses"
        fallbacktext="You have no expenses registered yet"
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default AllExpenses;
