import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";

jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";

const setup = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe.each([
  [null, true, false],
  ["party", false, true],
])("renders with secretWord as %s", (secretWord, loadingShows, appShows) => {
  let wrapper;
  let originalUseReducer;

  beforeEach(() => {
    originalUseReducer = React.useReducer;

    const mockUseReducer = jest
      .fn()
      .mockReturnValue([{ secretWord }, jest.fn()]);
    React.useReducer = mockUseReducer;
    wrapper = setup();
  });

  afterEach(() => {
    React.useReducer = originalUseReducer;
  });

  test(`renders loading spinner: ${loadingShows}`, () => {
    const spinnerComponent = findByTestAttr(wrapper, "spinner");
    expect(spinnerComponent.exists()).toBe(loadingShows);
  });

  test(`renders app: ${appShows}`, () => {
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.exists()).toBe(appShows);
  });
});

describe("get secret word", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test("get secret word on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("getSecretWord does not run on app update", () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
