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

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get("http://localhost:3030");
  setSecretWord(response.data);
};
