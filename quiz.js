import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { connect } from "react-redux";

class Quiz extends Component {
  state = {
    qindex: 0,
    count: 1,
    showAnswer: false,
    correctCount: 0,
    incorrectCount: 0,
  };

  togglequestion = () => {
    this.setState((prev) => ({
      showAnswer: !prev.showAnswer,
    }));
  };

  correctAnswer = () => {
    this.setState((prev) => ({
      qindex: prev.qindex + 1,
      count: prev.count + 1,
      correctCount: prev.correctCount + 1,
      showAnswer: false,
    }));
  };

  inCorrectAnswer = () => {
    this.setState((prev) => ({
      qindex: prev.qindex + 1,
      count: prev.count + 1,
      incorrectCount: prev.correctCount + 1,
      showAnswer: false,
    }));
  };

  restartQuiz = () => {
    this.setState(() => ({
      qindex: 0,
      count: 1,
      showAnswer: false,
      correctCount: 0,
      incorrectCount: 0,
    }));
  };

  GoToDeck = () => {
    const { navigation } = this.props;
    navigation.navigate("Deck");
  };

  render() {
    const { deck, questionslengh, questions, cards } = this.props;
    const { qindex, count, showAnswer, correctCount, incorrectCount } =
      this.state;
    const totalQuestions = correctCount + incorrectCount;

    if (cards === 0) {
      return (
        <View>
          <Text style={styles.text}>
            Sorry You Must Add Cards To Start Quiz
          </Text>
        </View>
      );
    }

    if (count > questionslengh) {
      return (
        <View style={styles.holder}>
          <View>
            <Text style={styles.text}>
              Totat Score is : {correctCount} out of {totalQuestions}
            </Text>
          </View>

          <View style={styles.btn}>
            <Button
              color="#ffddcc"
              title="Restart"
              onPress={this.restartQuiz}
            />
          </View>
          <View style={styles.btn}>
            <Button color="#ffddcc" title="GoBack" onPress={this.GoToDeck} />
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.txt2}>
          {count}/{questionslengh}
        </Text>
        <Text style={styles.text}>
          {showAnswer ? questions[qindex].answer : questions[qindex].question}
        </Text>

        <View style={styles.btncontainer}>
          <TouchableOpacity onPress={this.togglequestion}>
            <Text style={styles.txt1}>
              {showAnswer ? "Show Question" : "Show Answer"}{" "}
            </Text>
          </TouchableOpacity>
          <View style={styles.btn}>
            <Button
              color="#ff704d"
              title="InCorrect"
              onPress={this.inCorrectAnswer}
            />
          </View>
          {/* <Text>OR</Text> */}
          <View style={styles.btn}>
            <Button
              color="#00b300"
              title="Correct"
              onPress={this.correctAnswer}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  holder: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btncontainer: {
    padding: 5,
    marginTop: 290,
  },
  text: {
    padding: 18,
    marginTop: 15,
    borderColor: "#ffddcc",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor: "#ffbb99",
  },
  btn: {
    width: "100%",
    padding: 10,

    marginTop: 10,
  },
  txt1: {
    fontSize: 20,
    marginLeft: 130,
    marginRight: 100,
  },
  txt2: {
    fontSize: 20,
    marginLeft: 180,
    marginRight: 120,
  },
});

const mapStateToProps = (decks, { route, navigation }) => {
  const cards = route.params.cards;
  const title = route.params.title;
  const deck = decks[title];
  const questions = deck.questions;
  const questionslengh = questions.length;

  return {
    deck,
    questions,
    questionslengh,
    title,
    navigation,
    cards,
  };
};
export default connect(mapStateToProps)(Quiz);
