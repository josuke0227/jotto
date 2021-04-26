import React, { useEffect } from "react";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions/index";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: "",
  });

  const success = false;
  const guessedWords = [];

  const setSecretWord = (secretWord) => {
    dispatch({ type: "setSecretWord", payload: secretWord });
  };

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  if (state.secretWord === null) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </div>
    );
  }

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={state.secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
