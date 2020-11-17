import React from "react"
import App from './App'
import { render, screen } from "@testing-library/react";

test("renders correct content", () => {
  const { getByText, getByLabelText } = render(<App />)
  screen.debug()
})