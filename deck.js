import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";
import { connect } from "react-redux";
import { clearLocalNotification, setLocalNotification } from "./notification";

class deck extends Component {
  handlePress = () => {
    const { title, cards, navigation } = this.props;
    navigation.navigate("AddCard", { title, cards });
  };

  handleQuiz = () => {
    const { title, cards, navigation } = this.props;
    navigation.navigate("Quiz", { title, cards });
    //  clearLocalNotification().then(setLocalNotification);
  };
  render() {
    const { title, cards } = this.props;
    return (
      <View>
        <View>
          <View style={styles.title}>
            <Text style={styles.text}>{title} </Text>
            <Text style={styles.text}>{cards} </Text>
          </View>
          <View style={styles.btton}>
            <Button title="Add Card" color="pink" onPress={this.handlePress} />
          </View>
          <View style={styles.btton}>
            <Button
              title="Start Quiz"
              color="#ffbb99"
              onPress={this.handleQuiz}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btton: {
    color: "yellow",
    padding: 10,
    marginTop: 40,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "#ffaa80",
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

const mapStateToProps = (decks, { route, navigation }) => {
  const title = route.params.title;
  const cards = decks[title].questions.length;

  return {
    title,
    cards,
    navigation,
  };
};
export default connect(mapStateToProps)(deck);
