import { DECKS, ADD_DECK, ADD_CARD } from "../action";

function decks(state = {}, action) {
  switch (action.type) {
    case DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case ADD_CARD:
      const { title, card } = action;
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: state[title].questions.concat([card]),
        },
      };
    default:
      return state;
  }
}
export default decks;
