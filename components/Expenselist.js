import react from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

const expenseHandler = (itemData) => {
  console.log(itemData.item);
  return <ExpenseItem {...itemData.item} />;
};

const ExpenseList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={expenseHandler}
    />
  );
};

const styles = StyleSheet.create({});

export default ExpenseList;
