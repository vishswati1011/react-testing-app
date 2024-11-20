import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackForm from "../components/FeedbackForm";
import { act } from "react";

describe("Tests related to feedback form", () => {
  test.skip("on load condition of feedback form", () => {
    render(<FeedbackForm />);
    const textBox = screen.getByRole("textbox");
    expect(textBox).toBeInTheDocument();

    const checkBox = screen.getByLabelText(
      /I accept the terms and conditions/i
    );
    expect(checkBox).toBeInTheDocument();

    const btn = screen.getByRole("button", {
      name: "Add Feedback",
      exact: false,
    });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
  });

  test.skip("Button enabled only if input and checkbox have value", () => {
    render(<FeedbackForm />);
    const textBox = screen.getByPlaceholderText("Enter you feedback here");
    const checkBox = screen.getByLabelText(
      "I accept the terms and conditions",
      { exact: false }
    );
    const btn = screen.getByRole("button", {
      name: "Add Feedback",
      exact: false,
    });

    fireEvent.change(textBox, { target: { value: "Food was too spicy" } });
    fireEvent.click(checkBox); // it will check the checkbox

    expect(btn).toBeEnabled();

    fireEvent.click(checkBox); // it will uncheck the checkbox
    expect(btn).toBeDisabled();
  });

// we can user userEvent as well in place fireEvent
  test.skip("UserEvent Button enabled only if input and checkbox have value", async () => {
    render(<FeedbackForm />);
    const textBox = screen.getByPlaceholderText("Enter you feedback here");
    const checkBox = screen.getByLabelText(
      "I accept the terms and conditions",
      { exact: false }
    );
    const btn = screen.getByRole("button", {
      name: "Add Feedback",
      exact: false,
    });

    await act(async () => {
      await userEvent.type(textBox, "Food was too spicy");
      await userEvent.click(checkBox);
    });

    expect(btn).toBeEnabled();

    await act(async () => {
      await userEvent.click(checkBox);
    });
    expect(btn).toBeDisabled();
  });
});
