import React from "react";
import { render } from "@testing-library/react";
import About from "../pages/about";

test("renders deploy about", () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/About Testing/);
  expect(linkElement).toBeInTheDocument();
});
