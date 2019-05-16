import React from "react";
import App from "../App";
import grades from "../db_mock.js";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
  getAllByTestId,
  getByLabelText,
  getByText,
  wait
} from "react-testing-library";
import axios from "axios";

afterEach(cleanup);
describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
  });
  it("renders a list of students when clicked", async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: [grades] }));
    const { container } = render(<App />);
    const link = getByTestId(container, "externos-link");
    fireEvent.click(link);
    await wait(() => getByTestId(container, "externo-item"));
    const students = getAllByTestId(container, "externo-item");

    expect(axios.get).toHaveBeenCalledWith("http://localhost:3001/external");
    expect(students).toHaveLength(1);
    expect(students[0].textContent).toBe(grades.nombre);
  });
  it("renders a specific student's grades", async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: [grades] }));
    const { container } = render(<App />);
    const input = getByLabelText(container, "Code:");
    input.value = grades.codigo;
    fireEvent.change(input);
    const button = getByTestId(container, "send-button");
    fireEvent.click(button);

    await wait(() => getByTestId(container, "codigo-name"));
    const studentCode = getByText(container, "codigo-name");

    expect(studentCode).toBe(grades.codigo);
  });
});
