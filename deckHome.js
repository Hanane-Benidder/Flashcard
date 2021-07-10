import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import DeckDetails from "./deckDetails";
import { getDecks } from "./api";
import { handleDecks } from "./action";
import { connect } from "react-redux";
class deckHome extends Component {
  componentDidMount() {
    getDecks().then((decks) => this.props.dispatch(handleDecks(decks)));
  }
  render() {
    const { decks } = this.props;
    console.log(decks);
    return (
      <View style={styles.container}>
        <ScrollView>
          {Object.keys(decks).map((item) => (
            <DeckDetails
              key={item}
              title={decks[item].title}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (decks) => {
  return {
    decks,
  };
};
export default connect(mapStateToProps)(deckHome);
