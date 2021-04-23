import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../test/testUtils";

jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions/";

import NewWrodButton from "./NewWordButton";

const defaultProps = { display: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<NewWrodButton {...setupProps} />);
};

describe("render", () => {
  test("renders without error", () => {
    const wrapper = setup({ display: true });
    const component = findByTestAttr(wrapper, "component-new-word-button");
    expect(component.length).toBe(1);
  });

  test('renders no text when "display" props is false', () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttr(wrapper, "component-new-word-button");
    expect(component.text()).toBe("");
  });

  test("renders non-empty text when 'display' prop is true", () => {
    const wrapper = setup({ display: true });
    const component = findByTestAttr(wrapper, "component-new-word-button");
    expect(component.text().length).not.toBe(0);
  });
});

test("does not throw warning with expeted props", () => {
  const expectedProps = { display: false, resetAction: () => {} };
  checkProps(NewWrodButton, expectedProps);
});

test('calls "resetAction" props upon button click', () => {
  const resetActionMock = jest.fn();
  const wrapper = setup({ display: true, resetAction: resetActionMock });
  const resetButton = findByTestAttr(wrapper, "component-new-word-button");
  resetButton.simulate("click");

  expect(resetActionMock.mock.calls.length).toBe(1);
});
