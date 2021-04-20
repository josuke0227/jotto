import moxios from "moxios";
import { getSecretWord, correctGuess, actionTypes } from "./index";

describe("currectGuess", () => {
  test("returns an action with type 'CORRECT_GUESS'", () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORREECT_GUESS });
  });
});

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("secretWord is returned", () => {
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 200,
        response: "party",
      });
    });
    // update to test app in Redux / context sections
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});
