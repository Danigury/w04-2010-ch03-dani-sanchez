import { render } from "@testing-library/react";
import Info from "./Info.js";
import { screen } from "@testing-library/react";

describe("Given an info component", () => {
  describe("When isCalling is true", () => {
    test("Then it should show Calling...", () => {
      const isCalling = true;
      const expectedText = "Calling...";

      render(<Info isCalling={isCalling} />);
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
