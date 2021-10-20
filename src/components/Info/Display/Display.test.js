import Display from "./Display.js";
import { render, screen } from "@testing-library/react";

describe("Given a Display component", () => {
  describe("When it recieves '7'", () => {
    test('Then it should show "7"', () => {
      const number = 7;
      const expectedText = "7";

      render(<Display number={number} />);
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
