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
import { addCard } from "./action";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
  };
  addQuestion = (question) => {
    this.setState({ question });
  };
  addAnswer = (answer) => {
    this.setState({ answer });
  };
  handleSubmit = () => {
    const { dispatch, title } = this.props;
    const { question, answer } = this.state;
    if (
      this.state.question === undefined ||
      this.state.question.length === 0 ||
      this.state.answer === undefined ||
      this.state.answer.length === 0
    ) {
      Alert.alert("Sorry", "Your question and Answer field need values", [
        { text: "Okey" },
      ]);
    } else {
      const card = {
        question,
        answer,
      };
      dispatch(addCard(title, card));
      this.setState({ question: "", answer: "" });

      this.props.navigation.navigate("Deck", { title });
    }
  };
  render() {
    const { question, answer } = this.state;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View>
          <TextInput
            multiline
            style={styles.item}
            placeholder="Add Question"
            value={question}
            onChangeText={this.addQuestion}
          />
          <TextInput
            multiline
            style={styles.item}
            placeholder="Add Answer"
            value={answer}
            onChangeText={this.addAnswer}
          />
          <View style={styles.btton}>
            <Button
              title="Submit"
              color="#ffbb99"
              onPress={this.handleSubmit}
            />
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

function mapStateToProps(decks, { route, navigation }) {
  const title = route.params.title;

  return {
    title,
    navigation,
  };
}

export default connect(mapStateToProps)(AddCard);
