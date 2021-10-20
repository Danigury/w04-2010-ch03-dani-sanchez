import Key from "./Key.js";
import { render, screen } from "@testing-library/react";

describe("Given a Keyboard component", () => {
  describe("When executes actionOnClick", () => {
    test("Then it should render 1", () => {
      const expectedNumber = "1";

      render(<Key text={"1"} actionOnClick={() => {}} />);
      const text = screen.getByText(expectedNumber);

      expect(text).toBeInTheDocument();
    });
  });
});
