import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions/index";

function App() {
  const [secretWord, setSecretWord] = useState("");

  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);

  const dispatch = useDispatch();

  useEffect(() => {
    getSecretWord(setSecretWord);
  }, []);

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
