import axios from "axios";

export const actionTypes = {
  CORREECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {};
};

export const getSecretWord = () => {
  // TODO: write actual action in Redux / Context test
  return axios.get("http://localhost:3030").then((response) => response.data);
};
