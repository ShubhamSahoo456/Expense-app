import react from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <>
      <View style={style}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <View style={[styles.button, mode === "flat" && styles.flat]}>
            <Text
              style={[styles.buttonText, mode === "flat" && styles.flattext]}
            >
              {children}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 8,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  flattext: {
    color: GlobalStyles.colors.primary200,
  },
});

export default Button;
