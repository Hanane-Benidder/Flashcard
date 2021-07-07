import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";
import Home from "./homeStack";
import AddDeck from "./deckStack";
import React from "react";

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Ionicons name="list" size={30} color="#ffaa80" />,
        }}
      />
      <Tab.Screen
        name="AddDeck"
        component={AddDeck}
        options={{
          tabBarIcon: () => <Ionicons name="add" size={30} color="#ffaa80" />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabStack;
