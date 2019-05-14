import React from "react";
import { cleanup, render } from "react-testing-library";
import NameChooser from "../components/NameChooser";

describe("NameChooser", () => {
  it("checks proptypes", () => {
    const { container } = render(<NameChooser grades={[]} setCode={jest.fn} />);
  });
});
