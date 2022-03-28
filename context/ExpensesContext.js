import react, { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 55.99,
    date: new Date("2022-03-26"),
  },
  {
    id: "e2",
    description: "A pair of joggers",
    amount: 89.34,
    date: new Date("2022-03-26"),
  },
  {
    id: "e3",
    description: "A Book",
    amount: 9.02,
    date: new Date("2022-03-18"),
  },
  {
    id: "e4",
    description: "Gym Fees",
    amount: 20.89,
    date: new Date("2022-03-10"),
  },
  {
    id: "e5",
    description: "Video Games",
    amount: 50.77,
    date: new Date("2022-03-08"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: () => {},
  updateExpense: () => {},
  deleteExpense: () => {},
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().getMilliseconds().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatableExpenseIndex] = updatedItem;
      return updatedExpense;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
};

const ExpeContextProvider = ({ children }) => {
  const [expenseData, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (data) => {
    dispatch({ type: "ADD", payload: data });
  };

  const updateExpense = (id, data) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: data } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  value = {
    expenses: expenseData,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <>
      <ExpenseContext.Provider value={value}>
        {children}
      </ExpenseContext.Provider>
    </>
  );
};

export default ExpeContextProvider;
