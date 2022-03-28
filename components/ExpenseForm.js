import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const amountHandler = (text) => {
    console.log(text);
  };

  const descriptionHandler = (text) => {
    console.log(text);
  };

  const dateHandler = (text) => {
    console.log(text);
  };

  return (
    <>
      <View>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "number-pad",
            onChangeText: amountHandler,
          }}
        />

        <Input
          label="Date"
          textInputConfig={{
            onChangeText: dateHandler,
            maxLength: "10",
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "#ffffff",
          }}
        />
        <Input
          label="Description"
          textInputConfig={{
            onChangeText: descriptionHandler,
            multiline: true,
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ExpenseForm;
