import react, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Button from "./Button";
import Input from "./Input";
import { dateFormatter } from "../util/dateFormatter";

const ExpenseForm = ({
  buttonLabel,
  cancelHandler,
  confirmHandler,
  defaultValues,
}) => {
  const [expenseInput, setExpenseInput] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? dateFormatter(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  const expenseHandler = (identifier, text) => {
    setExpenseInput((prevData) => ({
      ...prevData,
      [identifier]: text,
    }));
  };

  const confirmInputHandler = () => {
    let expenseData = {
      amount: +expenseInput.amount,
      date: new Date(expenseInput.date),
      description: expenseInput.description,
    };
    const isValidAmount = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isValidDate = expenseData.date.toString() !== "Invalid Date";
    const isValidDescription = expenseData.description.trim().length > 0;

    if (!isValidAmount || !isValidDate || !isValidDescription) {
      Alert.alert("Invalid Input", "Plss check Your input values");
      return;
    }
    confirmHandler(expenseData);
  };

  return (
    <>
      <View>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "number-pad",
            onChangeText: expenseHandler.bind(this, "amount"),
            value: expenseInput.amount,
          }}
        />

        <Input
          label="Date"
          textInputConfig={{
            onChangeText: expenseHandler.bind(this, "date"),
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            placeholderTextColor: "#ffffff",
            value: expenseInput.date,
          }}
        />
        <Input
          label="Description"
          textInputConfig={{
            onChangeText: expenseHandler.bind(this, "description"),
            multiline: true,
            value: expenseInput.description,
          }}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode="flat" onPress={cancelHandler}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={confirmInputHandler}>
            {buttonLabel}
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ExpenseForm;
