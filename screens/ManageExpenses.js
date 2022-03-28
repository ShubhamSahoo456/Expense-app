import react, { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/Button";
import { ExpenseContext } from "../context/ExpensesContext";

const ManageExpenses = ({ route, navigation }) => {
  const expenseid = route.params?.expenseId;
  const expenseCtx = useContext(ExpenseContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: expenseid ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, expenseid]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(expenseid);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (expenseid) {
      expenseCtx.updateExpense(expenseid, {
        description: "Test!!",
        amount: 55.09,
        date: new Date("2022-03-03"),
      });
    } else {
      expenseCtx.addExpense({
        description: "Test add",
        amount: 55.09,
        date: new Date("2022-03-03"),
      });
    }
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode="flat" onPress={cancelHandler}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={confirmHandler}>
            {expenseid ? "Update" : "Save"}
          </Button>
        </View>
        {expenseid && (
          <>
            <View style={styles.trashButton}>
              <IconButton
                icon="trash"
                color={GlobalStyles.colors.error500}
                size={36}
                onPress={deleteExpenseHandler}
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    padding: 24,
  },
  trashButton: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
    justifyContent: "center",
  },
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

export default ManageExpenses;
