import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  test('should renders the word "Question"', () => {
    render(<App />);
    const element = screen.getByText(/Question/i);
    expect(element).toBeInTheDocument();
  });

  test("should contain the data-testid 'quiz'", () => {
    render(<App />);
    const element = screen.getByTestId("quiz");
    expect(element).toBeInTheDocument();
  });

  test("should contain the data-testid 'question-screen'", () => {
    render(<App />);
    const element = screen.getByTestId("question-screen");
    expect(element).toBeInTheDocument();
  });
});
