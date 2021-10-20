import { screen, render } from "@testing-library/react";

import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it receives a 'call' text", () => {
    test("Then it should execute displaying function in an anchor", () => {
      const moc = jest.fn();
      const expectedText = "calling";

      render(
        <Action
          href={"calling"}
          text={"calling"}
          className={"calling"}
          actionOnClick={moc}
        />
      );
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
