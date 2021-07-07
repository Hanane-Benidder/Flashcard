export const DECKS = "DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function handleDecks(decks) {
  return {
    type: DECKS,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}
export function addCard(title, card) {
  return {
    type: ADD_CARD,
    title,
    card,
  };
}
