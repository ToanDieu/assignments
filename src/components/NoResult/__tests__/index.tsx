import { render } from "@testing-library/react";

import NoResult from "../index";

describe("<NoResult/>", () => {
  test("render No Result text", () => {
    const { container } = render(<NoResult />);
    const h1 = container.querySelector("h1");
    expect(h1?.textContent).toBe("No result");
  });
  test("NoResult should render and match snapshort", () => {
    const { container } = render(<NoResult />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
