import react from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style";

const Input = ({ textInputConfig, label }) => {
  let inputStyles = [styles.input];

  if (textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={inputStyles} {...textInputConfig} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  inputLabel: {
    color: GlobalStyles.colors.primary100,
    fontSize: 12,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
    padding: 8,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default Input;
