import React from "react";
import { cleanup, render } from "react-testing-library";
import Form from "../components/Form";

afterAll(cleanup);
describe("Form", () => {
  it("renders correctly", () => {
    const { container } = render(<Form setCode={jest.fn} />);
  });
});
