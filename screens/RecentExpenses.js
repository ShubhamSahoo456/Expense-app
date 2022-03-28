import react, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpenseContext } from "../context/ExpensesContext";
import { daterange } from "../util/dateFormatter";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);

  const recentdatesExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const get7Days = daterange(today, 7);

    return expense.date > get7Days;
  });
  return (
    <>
      <ExpenseOutput
        expenses={recentdatesExpenses}
        expensePeriod="Last 7 Days"
        fallbacktext="You have no recent expenses from last 7 days"
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default RecentExpenses;
