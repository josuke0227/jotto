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

  test("secretWord is returned", async () => {
    const store = storeFactory();
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 200,
        response: "party",
      });
    });

    const mockSetSecretWord = jest.fn();
    await getSecretWord(mockSetSecretWord);
    expect(mockSetSecretWord).toHaveBeenCalledWith("party");
  });
});
