import react, { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/IconButton";
import { GlobalStyles } from "../constants/style";
import Button from "../components/Button";
import { ExpenseContext } from "../context/ExpensesContext";
import ExpenseForm from "../components/ExpenseForm";

const ManageExpenses = ({ route, navigation }) => {
  const expenseid = route.params?.expenseId;
  const expenseCtx = useContext(ExpenseContext);
  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === expenseid
  );

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

  const confirmHandler = (data) => {
    if (expenseid) {
      expenseCtx.updateExpense(expenseid, data);
    } else {
      expenseCtx.addExpense(data);
    }
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <ExpenseForm
          buttonLabel={expenseid ? "Update" : "Save"}
          cancelHandler={cancelHandler}
          confirmHandler={confirmHandler}
          defaultValues={selectedExpense}
        />
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
});

export default ManageExpenses;
