import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class deckDetails extends Component {
  handlePress = () => {
    const { navigation, title, cards } = this.props;

    navigation.navigate("Deck", { title, cards });
  };
  render() {
    const { title, cards } = this.props;
    return (
      <View style={styles.deckItem}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>{title}</Text>
          <Text>{cards} Card/s </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  deckItem: {
    padding: 18,
    marginTop: 15,
    borderColor: "#ffddcc",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor: "pink",
  },
});
const mapStateToProps = (decks, { title, navigation }) => {
  const cards = decks[title].questions.length;

  return {
    cards,
    title,
    navigation,
  };
};
export default connect(mapStateToProps)(deckDetails);
// export default deckDetails;
