import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BotomTabNavigation";
import ManageExpenses from "../screens/ManageExpenses";
import { GlobalStyles } from "../constants/style";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="bottomtab"
        options={{ headerShown: false }}
        component={BottomTabNavigation}
      />
      <Stack.Screen
        name="ManageExpenses"
        options={{
          presentation: "modal",
        }}
        component={ManageExpenses}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
