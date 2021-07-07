import React from "react";
import { View, Text, StyleSheet, Alert, Button } from "react-native";
import { connect } from "react-redux";
function deck() {
  // const { navigation, text, cards, route } = this.props;

  // const handleQuis = () => {
  //   if (cards === 0) {
  //     Alert.alert(
  //       "Empty Deck",

  //       [{ text: "OK" }]
  //     );
  //   } else {
  //     navigation.navigate("quiz", { text });
  //   }
  // };

  // const handlePress = () => {
  //   const { navigation, text, cards } = this.props;

  //   navigation.navigate("addCard", { text });
  // };
  return (
    <View>
      <View>
        {/* <Text>{route.params.text} </Text> */}
        <View style={styles.btton}>
          <Button title="Add Card" color="pink" />
        </View>
        <View style={styles.btton}>
          <Button title="Start Quiz" color="#ffbb99" />
        </View>
        <View style={styles.btton}>
          <Button title="Delete" color="#ffbb99" />
        </View>
      </View>
    </View>
  );
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

// const mapStateToProps = (decks, { route, navigation }) => {
//   const title = route.params.text;
//   const cards = decks[title].questions.length;

//   return {
//     cards,
//   };
// };
// export default connect(mapStateToProps)(deck);
export default deck;
