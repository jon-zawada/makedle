import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";
import "@testing-library/jest-dom";

describe("HomePage", () => {
  test("renders the home page", () => {
    render(<HomePage />);
    expect(screen.getByText("MAIN CONTENT")).toBeInTheDocument();
    expect(screen.getAllByRole("button", {name: "Play a game"}));
    expect(screen.getAllByRole("button", {name: "Make a game"}));
  });
});
