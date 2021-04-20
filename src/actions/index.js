import axios from "axios";

export const actionTypes = {
  CORREECT_GUESS: "CORRECT_GUESS",
};

export function correctGuess() {
  return { type: actionTypes.CORREECT_GUESS };
}

export const getSecretWord = () => {
  // TODO: write actual action in Redux / Context test
  return axios.get("http://localhost:3030").then((response) => response.data);
};
