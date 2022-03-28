import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import ExpeContextProvider from "./context/ExpensesContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpeContextProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </ExpeContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
