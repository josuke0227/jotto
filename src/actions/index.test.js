import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./index";

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("secretWord is returned", () => {
    const store = storeFactory();
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 200,
        response: "party",
      });
    });

    // update to test app in Redux / context sections
    return store.dispatch(getSecretWord()).then(() => {
      const secretWord = store.getState().secretWord;
      expect(secretWord).toBe("party");
    });
  });
});
