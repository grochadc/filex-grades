import React from "react";
import App from "./App";
import { render, cleanup, fireEvent, getByTestId } from "react-testing-library";

afterEach(cleanup);
describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
