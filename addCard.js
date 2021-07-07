import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button,
} from "react-native";

export default class addCard extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View>
          <TextInput multiline style={styles.item} placeholder="Add Question" />
          <TextInput multiline style={styles.item} placeholder="Add Answer" />
          <View style={styles.btton}>
            <Button title="Submit" color="#ffbb99" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  btton: {
    color: "yellow",
    padding: 10,
    marginTop: 40,
  },
  item: {
    width: 280,
    height: 80,
    paddingHorizontal: 8,
    marginBottom: 10,
    borderColor: "#ffddcc",
    borderBottomWidth: 1,
    borderBottomColor: "#ffddcc",
    borderRadius: 10,
  },
});
