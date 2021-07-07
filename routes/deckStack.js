import { createStackNavigator } from "@react-navigation/stack";
import AddDeck from "../addDeck";
import AddCard from "../addCard";
import Deck from "../deck";
import React from "react";

const Stack = createStackNavigator();
const AddDeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddDeck" component={AddDeck} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator>
  );
};
export default AddDeckStack;
