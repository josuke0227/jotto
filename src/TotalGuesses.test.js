import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";
import TotalGuesses from "./TotalGuesses";

const defaultProps = { guessCount: 0 };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
};

test("should not return error for correct type of props", () => {
  const correctProps = { guessCount: 0 };
  checkProps(TotalGuesses, correctProps);
});

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-total-guess");
  expect(component.length).toBe(1);
});

test("renders the number of guesses", () => {
  const guessCount = 8;
  const wrapper = setup({ guessCount });
  const component = findByTestAttr(wrapper, "component-total-guess");
  expect(component.text()).toContain(guessCount.toString());
});
