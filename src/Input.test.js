import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../test/testUtils";

import Input from "./Input";

const setup = () => {
  return shallow(<Input />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});
