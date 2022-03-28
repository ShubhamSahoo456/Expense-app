import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpensses from "../screens/AllExpenses";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/IconButton";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const navigationHandler = (navigation) => {
    navigation.navigate("ManageExpenses");
  };

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: () => (
          <IconButton
            icon="add"
            color="white"
            size="24"
            onPress={navigationHandler.bind(this, navigation)}
          />
        ),
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
        component={RecentExpenses}
      />
      <Tab.Screen
        name="AllExpenses"
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
        component={AllExpensses}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
