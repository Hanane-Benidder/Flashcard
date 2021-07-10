import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "udacityFlashcardsKey";

export function handleInitialData() {
  const initialData = {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces",
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event",
        },
      ],
    },
    CSS: {
      title: "CSS",
      questions: [
        {
          question: "What is CSS?",
          answer: "It describes how the HTML content will be shown on screen.",
        },
      ],
    },
  };

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData));

  return initialData;
}
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(handleInitialData);
}

export function saveDeck({ key, entry }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  );
}
