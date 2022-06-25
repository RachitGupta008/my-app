import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Hi Visitor, Welcome to the sample website deployed using Github Actions./i
  );
  expect(linkElement).toBeInTheDocument();
});
