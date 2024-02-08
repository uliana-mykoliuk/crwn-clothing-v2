import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("Button Tests", () => {
  test("Should render base button when nothing is passed", () => {
    render(<Button />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: white");
  });

  test("Should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyle;
    expect(googleButtonElement).toHaveStyle("background-color: #357ae8");
  });

  test("Should render inverted button when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const invertedButtonElement = screen.getByRole("button");
    expect(invertedButtonElement).toHaveStyle;
    expect(invertedButtonElement).toHaveStyle("background-color: black");
  });

  test("Should be disabled if isLoading is true", () => {
    render(<Button isLoading />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
