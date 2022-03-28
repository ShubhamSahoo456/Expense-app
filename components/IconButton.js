import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Ionicons name={icon} color={color} size={size} />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
});

export default IconButton;
