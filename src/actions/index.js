import { getLetterMatchCount } from "../helpers/index";
import axios from "axios";

export const actionTypes = {
  CORREECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
};

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount,
      },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORREECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  return function (dispatch) {
    return axios.get("http://localhost:3030").then((response) =>
      dispatch({
        type: actionTypes.SET_SECRET_WORD,
        payload: response.data,
      })
    );
  };
};
