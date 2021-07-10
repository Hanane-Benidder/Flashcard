import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { saveDeck } from "./api";
import { addDeck } from "./action";

class addNewDeck extends Component {
  state = {
    text: "",
  };
  changeInput = (text) => {
    this.setState(() => ({ text }));
  };
  handlesubmit = () => {
    const { text } = this.state;
    const key = text;
    // console.log("1", text);
    if (text < 2 || text === 0) {
      Alert.alert("Sorry", "Name must to be over 3 chars", [{ text: "Okey" }]);
    } else {
      const entry = {
        title: text,
        questions: [],
      };
      // console.log("2", entry);
      this.props.dispatch(addDeck({ [key]: entry }));

      this.setState(() => ({ text: "" }));
      this.props.navigation.navigate("Deck", { title: text });
      saveDeck({ key, entry });
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Text style={styles.text}>What is the title of your new deck ?!</Text>
          <TextInput
            style={styles.item}
            placeholder="Deck Title"
            onChangeText={this.changeInput}
            value={this.state.text}
          />

          <View style={styles.btton}>
            <Button
              title="Create Deck"
              color="#ffbb99"
              onPress={this.handlesubmit}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 21,
    color: "#ffaa80",
  },

  item: {
    width: "90%",
    paddingHorizontal: 8,
    marginBottom: 10,
    borderColor: "#ffddcc",
    borderBottomWidth: 2,
    borderBottomColor: "#ffddcc",
    borderRadius: 10,
    padding: 10,
  },
  btton: {
    width: "60%",
    padding: 10,
    marginTop: 40,
  },
});
const mapStateToProps = (decks, { navigation }) => {
  return {
    decks,
    navigation,
  };
};
export default connect(mapStateToProps)(addNewDeck);
