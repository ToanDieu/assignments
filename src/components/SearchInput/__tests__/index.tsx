import { render, fireEvent, cleanup } from "@testing-library/react";

import SearchInput from "../index";

afterEach(cleanup);

describe("<SearchInput/>", () => {
  test("onKeyPress Function should fired", () => {
    const handler = jest.fn();
    const { container } = render(<SearchInput onKeyPress={handler} />);
    const input =
      container.querySelector(".content__input") ||
      document.createElement("input");
    fireEvent.keyPress(input, {
      key: "Enter",
      code: 13,
      charCode: 13,
    });
    expect(handler.mock.calls.length).toBe(1);
  });
  test("SearchInput should render and match snapshot", () => {
    const { container } = render(<SearchInput onKeyPress={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
