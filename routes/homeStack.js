import { createStackNavigator } from "@react-navigation/stack";
import Home from "../deckHome";
import AddCard from "../addCard";
import React from "react";
import Deck from "../deck";
import DeckDetails from "../deckDetails";
import AddQuiz from "../quiz";
const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="DeckDetails" component={DeckDetails} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Quiz" component={AddQuiz} />
    </Stack.Navigator>
  );
};
export default HomeStack;
