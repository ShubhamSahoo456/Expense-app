import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../constants/style";
import ExpenseList from "./Expenselist";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseOutput = ({ expenses, expensePeriod, fallbacktext }) => {
  return (
    <>
      <View style={styles.container}>
        <ExpenseSummary expensePeriod={expensePeriod} expense={expenses} />
        {expenses.length > 0 ? (
          <ExpenseList expenses={expenses} />
        ) : (
          <Text style={styles.fallback}>{fallbacktext}</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallback: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 20,
    textAlign: "center",
  },
});

export default ExpenseOutput;
