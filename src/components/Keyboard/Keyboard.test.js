import Keyboard from "./Keyboard.js";
import { render, screen } from "@testing-library/react";

describe("Given a Keyboard component", () => {
  describe("When executes actionOnClick", () => {
    test("Then it should render 1", () => {
      const expectedNumber = "1";

      render(<Keyboard text={"1"} actionOnClick={() => {}} />);
      const text = screen.getByText(expectedNumber);

      expect(text).toBeInTheDocument();
    });
  });
});
