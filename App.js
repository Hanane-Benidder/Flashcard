import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import TabStack from "./routes/tabStack";
import DeckHome from "./deckHome";
import { setLocalNotification } from "./notification";

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <TabStack />
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
