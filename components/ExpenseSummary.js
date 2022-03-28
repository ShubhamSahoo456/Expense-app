import react from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style";

const ExpenseSummary = ({ expensePeriod, expense }) => {
  const sumExpense = expense.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.period}>{expensePeriod}</Text>
        <Text style={styles.sum}>$ {sumExpense.toFixed(2)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  period: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
  sum: {
    fontSize: 20,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
    letterSpacing: 1,
  },
});

export default ExpenseSummary;
