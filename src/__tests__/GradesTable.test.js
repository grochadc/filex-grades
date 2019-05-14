import React from "react";
import { cleanup, render } from "react-testing-library";
import GradesTable from "../components/GradesTable";

afterAll(cleanup);
describe("GradesTable", () => {
  it("checks propTypes", () => {
    const { container } = render(
      <GradesTable grades={{ codigo: "EXTERNO" }} />
    );
  });
});
